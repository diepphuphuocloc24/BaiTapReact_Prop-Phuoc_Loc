import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#408267] flex items-center justify-center py-8">
                <div className="flex items-center gap-6">
                    <h3 className="text-white text-2xl font-semibold">
                        JOIN OUR MEMBER & GET 15% OFF
                    </h3>
                    <button className="bg-white text-black text-2xl font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-[4px_4px_10px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer">
                        <a href="#">SIGN UP FOR FREE</a>
                    </button>
                </div>
            </div>

            <div className="bg-gray-50 text-gray-500">
                <div className="w-[80%] mx-auto flex justify-between py-16">

                    <div>
                        <h2 className="text-lg font-bold text-black mb-4">Resources</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Find A Store</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Become A Member</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Running Shoe Finder</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Coaching</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Send Us Feedback</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-black mb-4">Help</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Get Help</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Order Status</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Delivery</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Returns</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Payment Options</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-black mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">About FIELU</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">News</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Careers</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Investors</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Sustainability</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Impact</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Report a Concern</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-black mb-4">Guides</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Terms of Sale</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Terms of Use</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">FIELU Privacy Policy</a></li>
                            <li><a href="#" className="inline-block transition transform duration-300 hover:text-gray-900 hover:scale-104">Privacy Settings</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 text-center text-md text-gray-500 py-4">
                    © 2025 <span className="font-semibold text-black">FIELU Co Ltd.</span> All rights reserved.
                </div>

                <div className='bg-black'>
                    <div className="text-white text-md py-2 flex justify-end container mx-auto">
                        © 2025 FIELU Co Ltd.
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
