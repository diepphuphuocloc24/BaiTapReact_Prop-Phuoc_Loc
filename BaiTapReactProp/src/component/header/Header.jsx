import React from 'react'

const Header = () => {
    return (
        <div
            className="fixed top-0 left-0 w-full bg-black z-10 py-5 animate__animated animate__fadeInDown"
            style={{ animationDelay: '0.3s' }}
        >
            <div className="relative container mx-auto flex items-center justify-end">
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-extrabold text-white tracking-widest">
                    FIELU
                </h1>

                <button data-modal-target="cart-modal" data-modal-toggle="cart-modal" className="bg-white text-black font-semibold py-2 px-4 rounded flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-500">
                    <i className="fi fi-ts-shopping-bag mr-2"></i> My Cart
                </button>
            </div>
        </div >
    )
}

export default Header
