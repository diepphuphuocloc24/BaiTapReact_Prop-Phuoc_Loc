import React from 'react'
import ShoeStore from './ShoesStore'
import Header from './header/Header'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'

const MainTemplate = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <ShoeStore />
            <Footer />
        </div>
    )
}

export default MainTemplate
