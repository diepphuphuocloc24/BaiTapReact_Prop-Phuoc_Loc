import React from 'react'

const ProductItem = ({ shoesProp, onSelectedCurrentShoes }) => {
    // Khi bấm nút Thêm vào giỏ hàng
    const handleAddToCard = () => {
        onSelectedCurrentShoes(shoesProp)
    }

    return (
        <>{
            shoesProp && (
                <div
                    className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                    <div className="h-52 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                            src={shoesProp.image}
                            alt={shoesProp.name}
                            className="h-full object-contain"
                        />
                    </div>
                    <div className="pt-5 text-left">
                        <p className="text-xl font-bold text-red-500">${shoesProp.price}</p>
                        <h3 className="text-lg font-bold text-black hover:text-gray-700 transition-colors">
                            {shoesProp.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            {shoesProp.shortDescription}
                        </p>
                        <p className="text-green-600 font-semibold text-md">{shoesProp.status}</p>
                        <div className="mt-5 flex justify-end gap-3">
                            <button
                                className="bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg 
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                            >
                                Buy Now
                            </button>
                            <button
                                className="bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg 
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                                onClick={() => handleAddToCard()}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default ProductItem
