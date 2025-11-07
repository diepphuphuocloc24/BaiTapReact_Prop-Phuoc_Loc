import React from 'react'
import ShoeStore from './ShoesStore'
import Header from './header/Header'
import Footer from './footer/Footer'
import Carousel from './carousel/Carousel'

const MainTemplate = () => {
    return (
        <div className="bg-black">
            <Header />
            <Carousel />
            <ShoeStore />
            <Footer />
            {/* BACK TO TOP */}
            <section>
                <a
                    href="#"
                    class="fixed bottom-6 right-4 bg-black opacity-40 text-white p-3 rounded-full shadow-lg hover:opacity-60 transition-all duration-300"
                >
                    <i class="fa-solid fa-chevron-up"></i>
                </a>
            </section>
        </div>
    )
}

export default MainTemplate
