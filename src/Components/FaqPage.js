import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Importing icons for plus and minus

const FaqPage = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active question
    const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled down
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`gap-8 px-12 py-8 ${isScrolled ? 'bg-white text-black' : 'bg-white text-black'}`}>
            <div className="text-base text-center">
                <h3 className="inline-block px-4 py-2 text-lg font-semibold bg-gray-300 rounded-full md:text-xl text-tblue">Frequently Asked Questions</h3>
                <h2 className="py-4 text-2xl font-bold md:text-3xl">Checkout the FAQ’s On HexaHome</h2>
            </div>

            <div className="faqcompo">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                        {/* Combined question and answer container */}
                        <div
                            className={`flex justify-between items-center p-4 border rounded-lg ${activeIndex === index ? 'bg-lgray' : ''}`} // Change background color when active
                            onClick={() => toggleFAQ(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h4 className="flex-1 text-lg font-semibold md:text-xl">{faq.question}</h4>
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${activeIndex === index ? 'bg-lgray' : ''}`}>
                                {activeIndex === index ? (
                                    <AiOutlineMinus size={16} />
                                ) : (
                                    <AiOutlinePlus size={16} />
                                )}
                            </div>
                        </div>
                        {activeIndex === index && (
                            <p className="p-2 text-base rounded bg-lgray md:text-lg">{faq.answer}</p> // Same background for answer
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(FaqPage);
