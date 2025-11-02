import React, { useState } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'

const ShoeStore = () => {
    const [listCurrentShoes, setListCurrentShoes] = useState()

    // Nhận thông tin từ List
    const getInforFromList = (selectedListShoes) => {
        setListCurrentShoes(selectedListShoes)
        console.log("Tại index là:", selectedListShoes)
    }

    return (
        <div>
            <Modal shoesPropModal={listCurrentShoes} />
            <ProductList onSelectListShoes={getInforFromList} />
        </div>
    )
}

export default ShoeStore
