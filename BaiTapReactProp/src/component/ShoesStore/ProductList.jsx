import React, { useState } from "react";
import data from "./../data.json";
import ProductItem from "./ProductItem";

const ProductList = ({ onSelectListShoes }) => {
    const [shoeList] = useState(data);

    const [currentShoes, setCurrentShoes] = useState(null)

    // Nhận thông tin từ Item
    const getInfoFromItem = (selectedShoes) => {
        setCurrentShoes(selectedShoes)
        onSelectListShoes(selectedShoes)
        console.log("Tại List là:", selectedShoes);
    }

    const renderShoeList = () => {
        return shoeList.map((shoes) => {
            return (
                <ProductItem key={shoes.id} shoesProp={shoes} onSelectedCurrentShoes={getInfoFromItem} />
            )
        })
    }

    return (
        <div
            className="py-10 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('./img/background.jpg')" }}
        >
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    OUR PRODUCT
                </h2>

                <div className="grid grid-cols-3 gap-8">
                    {renderShoeList()}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
