import React from "react";

const Modal = ({
  shoesPropModal,
  onChangeQuantity,
  onTotalPrice,
  onClearListCart,
  onDeleteShoesCart,
}) => {
  const showShoesToModal = () => {
    return shoesPropModal && shoesPropModal.map((shoesModal) => {
      return (
        <div
          key={shoesModal.id}
          className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
        >
          <img
            src={shoesModal.img}
            alt={shoesModal.name}
            className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-xl border border-gray-200 p-1 shadow-sm hover:scale-105 transform transition duration-500"
          />

          <div className="flex-1 flex flex-col justify-between gap-4 md:gap-6 w-full">
            <div className="flex justify-between items-start md:items-center">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {shoesModal.name}
              </h3>
              <button
                className="text-gray-500 hover:text-red-600 p-2 rounded-full transition-colors duration-500 shadow-sm hover:shadow-md"
                onClick={() => handleDelete(shoesModal.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>

            <div className="flex justify-between items-center mt-2">
              <h4 className="text-red-600 font-bold text-lg md:text-xl">
                ${shoesModal.price}
              </h4>
              <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white">
                <button
                  className="px-3 py-1 bg-gray-200 border-r border-gray-400 hover:text-red-500 text-black font-bold transition duration-500 cursor-pointer"
                  onClick={() => handleChangeQuantity(shoesModal.id, false)}
                >
                  −
                </button>
                <span className="px-4 py-1 font-medium text-black">
                  {shoesModal.quantity}
                </span>
                <button
                  className="px-3 py-1 bg-gray-200 border-l border-gray-400 hover:text-red-500 text-black font-bold transition duration-500 cursor-pointer"
                  onClick={() => handleChangeQuantity(shoesModal.id, true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const handleChangeQuantity = (id, status) => {
    onChangeQuantity(id, status);
  };

  const TotalPrice = () => {
    return onTotalPrice();
  };

  const handleCheckOut = () => {
    onClearListCart();

    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");

    document.getElementById("close-button").click();
  };

  const handleClear = () => {
    onClearListCart();
  };

  const handleDelete = (id) => {
    onDeleteShoesCart(id);
  };

  return (
    <div
      id="cart-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl relative p-8 md:p-10 animate-fade-in">
        <button
          id="close-button"
          className="absolute top-5 right-5 text-gray-500 hover:text-red-600 text-3xl font-bold transition-all duration-500 cursor-pointer"
          data-modal-hide="cart-modal"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <h2 className="flex items-center text-2xl md:text-3xl font-extrabold mb-8 text-indigo-700">
          <i className="fi fi-ts-shopping-bag mr-3 text-2xl md:text-3xl"></i> My
          Cart
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-4 pr-6 overflow-y-auto max-h-[400px] border-r">
            <div className="flex flex-col gap-3">{showShoesToModal()}</div>
          </div>

          <div className="flex-3 flex flex-col gap-5 p-5 rounded-xl shadow-inner bg-white">
            <p className="font-semibold text-black text-lg">Discount Code</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your Discount Code"
                className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-xl hover:bg-gray-800 transition-all duration-500 font-semibold cursor-pointer">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-black text-lg">Delivery:</p>
              <p className="text-black font-bold text-xl">$25</p>
            </div>

            <div className="flex justify-between font-bold text-2xl text-red-600 border-t border-gray-200 pt-3">
              <span>TOTAL PRICE:</span>
              <strong id="total-price">${TotalPrice()}</strong>
            </div>

            <div className="flex flex-col mt-5 gap-4">
              <div className="flex gap-3 justify-end">
                <button
                  className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition font-semibold cursor-pointer"
                  onClick={() => handleCheckOut()}
                >
                  Check Out
                </button>
                <button
                  className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition font-semibold cursor-pointer"
                  onClick={() => handleClear()}
                >
                  Clear All
                </button>
              </div>

              <div className="flex justify-between items-center gap-2 mt-4">
                <p className="font-semibold text-gray-700 text-md">WE ACCEPT</p>
                <div className="flex gap-3 items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                    alt="Mastercard"
                    className="w-10 h-6 object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
                    alt="Paypal"
                    className="w-10 h-6 object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                    alt="Visa"
                    className="w-10 h-6 object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
