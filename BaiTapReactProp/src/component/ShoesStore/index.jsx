import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./../data.json";

const ShoeStore = () => {
  const [shoeList, setShoeList] = useState(data);

  const [listCurrentShoes, setListCurrentShoes] = useState();

  const [array_Cart, setArray_Cart] = useState([]);

  // Nhận thông tin từ List
  const getInforFromList = (selectedListShoes) => {
    setListCurrentShoes(selectedListShoes);

    addToCart(selectedListShoes);
  };

  // Tìm vị tí Index
  const findIndexShoes = (id) => {
    return array_Cart.findIndex((shoes) => {
      return shoes.id === id;
    });
  };

  // Thêm sản phẩm vào Cart
  const addToCart = (selectedShoes) => {
    const index = findIndexShoes(selectedShoes.id);

    const newArray_Cart = [...array_Cart];

    if (index !== -1) {
      newArray_Cart[index].quantity += 1;
    } else {
      const inforShoesCart = {
        id: selectedShoes.id,
        name: selectedShoes.name,
        price: selectedShoes.price,
        img: selectedShoes.image,
        quantity: 1,
      };
      newArray_Cart.push(inforShoesCart);
    }

    setArray_Cart(newArray_Cart);
    setLocalStorage(newArray_Cart);
  };

  //   Thay đổi số lượng sản phẩm
  const changeQuantity = (id, status) => {
    const index = findIndexShoes(id);
    if (index !== -1) {
      const newArray = [...array_Cart];

      const object_Shoes = newArray[index];

      if (status) {
        object_Shoes.quantity += 1;
      } else {
        object_Shoes.quantity -= 1;
        if (object_Shoes.quantity <= 0) {
          return setArray_Cart(
            newArray.filter((shoes) => {
              return shoes.id !== id;
            })
          );
        }
      }

      setArray_Cart(newArray);
    }
  };

  const calculateTotalPrice = () => {
    if (array_Cart.length === 0) return 0;
    const total = array_Cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return total + 25; // phí giao hàng
  };

  const calculateTotalQuantity = () => {
    if (array_Cart.length === 0) {
      return 0;
    } else {
      return array_Cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    }
  };

  const clearListCart = () => {
    setArray_Cart([]);
  };

  const deleteShoesCart = (id) => {
    const index = findIndexShoes(id);
    if (index !== -1) {
      const newArray = array_Cart.filter((shoes) => {
        return shoes.id !== id;
      });
      setArray_Cart(newArray);
    }
  };

  const setLocalStorage = () => {
    const convertToString = JSON.stringify(array_Cart);
    localStorage.setItem("LIST-CART", convertToString);
  };

  const getLocalStorage = () => {
    const storedData = localStorage.getItem("LIST-CART");
    if (storedData) {
      return JSON.parse(storedData);
    }
  };
  getLocalStorage();

  return (
    <div>
      <p
        style={{ fontFamily: '"Nunito", sans-serif' }}
        className={`fixed top-6 right-31 z-10 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg font-[Nunito] tracking-tight leading-none
              ${calculateTotalQuantity() === 0 ? "hidden" : ""}`}
      >
        {calculateTotalQuantity()}
      </p>

      <Modal
        shoesPropModal={array_Cart}
        onChangeQuantity={changeQuantity}
        onTotalPrice={calculateTotalPrice}
        onClearListCart={clearListCart}
        onDeleteShoesCart={deleteShoesCart}
      />

      <ProductList
        shoesListProp={shoeList}
        onSelectListShoes={getInforFromList}
      />
    </div>
  );
};

export default ShoeStore;
