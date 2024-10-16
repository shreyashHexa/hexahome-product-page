import React, { useState } from 'react'; // Import React and hooks
import Image from 'next/image';
const PrevArrow = ({ onClick }) => (
    <div 
        className="absolute z-10 p-2 bg-white rounded-full shadow-md cursor-pointer top-2 left-2" 
        onClick={onClick}>
        <Image src="/images/prev-arrow.svg" alt="Previous" width={24} height={24} />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div 
        className="absolute z-10 p-2 bg-white rounded-full shadow-md cursor-pointer top-2 right-2" 
        onClick={onClick}>
        <Image src="/images/next-arrow.svg" alt="Next" width={24} height={24} />
    </div>
);

const Testimonials = ({ reviews = [] }) => { // Default to empty array
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle case for empty reviews
    if (reviews.length === 0) {
        return <div>No testimonials available.</div>; // Handle empty reviews case
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>&#9733;</span>
        ));
    };

    // Display a single review based on current index
    const reviewToDisplay = reviews[currentIndex];

    return (
        <div className="relative px-4 py-8 text-black bg-lgray md:px-10 md:py-10">
            <div className="flex items-center justify-between">
                {/* Left-aligned text content */}
                <div>
                    <h3 className="text-tblue text-xl md:text-2xl bg-white border-black px-2 py-1 md:py-2 w-[160px] rounded-[90px]">Testimonials</h3>
                    <h2 className="mt-4 text-2xl md:text-3xl">What people say about HexaHome</h2>
                    <p className="mt-2 text-sm md:text-base">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                </div>

                {/* Right-aligned arrows */}
                <div className="relative">
                    <PrevArrow onClick={handlePrev} />
                    <NextArrow onClick={handleNext} />
                </div>  
            </div>

            <div className="relative mt-8">
                {/* Display the current review */}
                <div className="p-4 bg-white rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%] mb-4 mx-auto">
                    <p className="mb-4 text-base md:text-lg">{reviewToDisplay.description}</p>
                    <div className="flex items-center mt-4">
                        <Image src={reviewToDisplay.image} alt={reviewToDisplay.name} className="w-10 h-10 mr-4 rounded-full md:w-12 md:h-12" />
                        <div>
                            <h4 className="text-sm font-bold md:text-base">{reviewToDisplay.name}</h4>
                            <div className="flex">
                                {renderStars(reviewToDisplay.rating)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Testimonials);
