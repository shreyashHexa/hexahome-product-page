import React, { useState } from 'react';
import Image from 'next/image';

// Custom Arrow Component for Next and Previous buttons with circular background and repositioning
const NextArrow = ({ onClick }) => (
    <div 
        className="absolute z-10 p-2 bg-white rounded-full shadow-md cursor-pointer top-2 right-[10%] sm:right-[5%] md:right-[3%] lg:right-[2%]" 
        onClick={onClick}>
        <Image
            src="/images/next-arrow.svg" 
            alt="Next" 
            width={24} 
            height={24} 
            className="text-tblue hover:text-blue-600" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div 
        className="absolute z-10 p-2 bg-white rounded-full shadow-md cursor-pointer top-2 right-[18%] sm:right-[12%] md:right-[9%] lg:right-[7%]" 
        onClick={onClick}>
        <Image
            src="/images/prev-arrow.svg" 
            alt="Previous" 
            width={24} 
            height={24} 
            className="text-tblue hover:text-blue-600" />
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            description: 'HexaHome made finding a home so easy! I was able to browse listings with no hassle.',
            name: 'John Doe',
            image: '/images/reviewpf.png',
            rating: 5,
        },
        {
            description: 'I love the features and convenience. HexaHome has changed the way I search for properties!',
            name: 'Jane Smith',
            image: '/images/reviewpf.png',
            rating: 4,
        },
        {
            description: 'Amazing service! The platform is user-friendly and the customer support is top-notch.',
            name: 'Alex Johnson',
            image: '/images/reviewpf.png',
            rating: 5,
        },
        {
            description: 'Best experience I’ve had with real estate platforms.',
            name: 'Michael Lee',
            image: '/images/reviewpf.png',
            rating: 4,
        },
        {
            description: 'HexaHome is the most reliable service I’ve used for property rentals.',
            name: 'Sarah Kim',
            image: '/images/reviewpf.png',
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Determine the number of reviews to display based on screen size
    const reviewsToDisplay = reviews.slice(currentIndex, currentIndex + 3);

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
                <div className="flex flex-wrap justify-center space-x-4">
                    {/* Display 1 card on small screens, 2 on medium, and 3 on large screens */}
                    {reviewsToDisplay.map((review, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%] mb-4">
                            <p className="mb-4 text-base md:text-lg">{review.description}</p>
                            <div className="flex items-center mt-4">
                                <Image 
                                    src={review.image} 
                                    alt={review.name} 
                                    className="w-10 h-10 mr-4 rounded-full md:w-12 md:h-12" 
                                    width={40} // Specify width for the profile image
                                    height={40} // Specify height for the profile image
                                />
                                <div>
                                    <h4 className="text-sm font-bold md:text-base">{review.name}</h4>
                                    <div className="flex">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Testimonials);
