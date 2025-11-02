import React from 'react';

const Modal = ({ shoesPropModal }) => {
    return (
        <div
            id="cart-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 hidden items-center justify-center bg-black/40"
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative p-8 md:p-10">
                <button
                    className="absolute top-5 right-5 text-gray-500 hover:text-red-600 text-3xl font-bold transition-all duration-500 cursor-pointer"
                    data-modal-hide="cart-modal"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <h2 className="flex items-center text-2xl font-extrabold mb-8">
                    <i className="fi fi-ts-shopping-bag mr-3 text-2xl"></i> My Cart
                </h2>

                <div className="flex gap-8">
                    <div className="w-4/7 p-6 overflow-y-auto max-h-[400px] border-r">
                        <div>
                            <div className="flex justify-between items-center gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition cursor-pointer">
                                <img
                                    src={shoesPropModal && shoesPropModal.image}
                                    alt={shoesPropModal && shoesPropModal.name}
                                    className="flex-1 w-24 h-24 object-contain rounded-lg cursor-pointer"
                                />

                                <div className="flex-2 flex flex-col justify-between gap-8">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-gray-800">{shoesPropModal && shoesPropModal.name}</h3>
                                        <button className="text-sm text-black hover:text-red-600 px-3 py-1 transition-all font-bold cursor-pointer duration-500">
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        <h4 className="text-red-600 font-bold text-xl">${shoesPropModal && shoesPropModal.price}</h4>
                                        <div className="flex items-center gap-1">
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-lg font-semibold cursor-pointer">−</button>
                                            <span className="px-3 font-medium text-gray-700 select-none">1</span>
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-lg font-semibold cursor-pointer">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/7 flex flex-col gap-5">
                        <p className="font-semibold text-gray-700 text-lg">Discount Code</p>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Your Discount Code"
                                className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                            <button className="bg-black text-white px-6 py-3 rounded-r-xl hover:bg-gray-800 transition-all duration-500 font-semibold cursor-pointer">
                                Apply
                            </button>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-gray-700 text-lg">Delivery:</p>
                            <p className="text-black font-bold text-xl">$25</p>
                        </div>

                        <div className="flex justify-between font-bold text-2xl text-red-500 border-t border-gray-200 pt-3">
                            <span>TOTAL PRICE:</span>
                            <strong id="total-price">$0</strong>
                        </div>

                        <div className="flex flex-col mt-5 gap-4">
                            <div className="flex gap-3 justify-end">
                                <button className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition font-semibold cursor-pointer">
                                    Check Out
                                </button>
                                <button className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition font-semibold cursor-pointer">
                                    Clear All
                                </button>
                            </div>

                            <div className="flex justify-between items-center gap-2 mt-4">
                                <p className="font-semibold text-gray-700 text-md">WE ACCEPT</p>
                                <div className="flex gap-3 items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="Mastercard" className="w-10 h-6 object-contain cursor-pointer" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="Paypal" className="w-10 h-6 object-contain cursor-pointer" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" alt="Visa" className="w-10 h-6 object-contain cursor-pointer" />
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
