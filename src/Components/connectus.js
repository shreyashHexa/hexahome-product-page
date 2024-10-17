import React from 'react';
import Image from "next/image";

const Connectus = () => {
    return (
        <div>
            <div className="flex flex-col pt-10 items-left md:px-16 md:pt-16 bg-lgray">
                <div className="px-2 mb-8 text-left">
                    <h3 className="inline-block px-3 py-1 text-base font-semibold rounded-full bg-blue-50 text-tblue">Get Connect With Us</h3>
                    <h2 className="mt-2 text-3xl font-bold text-black md:text-2xl">Send us your plan, our team will connect you with the solution</h2>
                </div> 
                <div className="flex flex-col pb-16 md:flex-row">
                    {/* Image Div with text overlay */}
                    <div className="relative hidden mb-8 md:mb-0 md:w-1/2 md:pr-4 md:block">
                        <Image 
                            src="/images/connectus.png"
                            alt='Connect Us'
                            width={620}
                            height={630}
                            className="object-cover w-full h-full rounded-lg"
                        />
                        {/* Overlay content on the image at bottom-left */}
                        <div className="absolute bottom-0 left-0 w-full p-6 pb-20 text-white pr-112 "> 
                            <h2 className="text-2xl font-bold">Write us a message.<br />We’ll be in touch within 24 hours - that’s a promise!</h2>
                        </div>
                    </div>
                    {/* Form Div */}
                    <div id="form" className="flex flex-col px-6 py-6 text-black bg-white border rounded-2xl md:w-1/2 md:pl-4">
                        <form className="flex flex-col">
                            {/* First and Last Name Inline */}
                            <div className="flex flex-col mb-4 md:flex-row">
                                <div className="w-full md:mr-2 md:w-1/2">
                                    <label htmlFor="firstName" className="mb-2">First Name:</label>
                                    <input type="text" id="firstName" className="w-full p-2 border rounded" required />
                                </div>
                                <div className="w-full md:ml-2 md:w-1/2">
                                    <label htmlFor="lastName" className="mb-2">Last Name:</label>
                                    <input type="text" id="lastName" className="w-full p-2 border rounded" required />
                                </div>
                            </div>

                            <label htmlFor="company" className="mb-2">Company Name:</label>
                            <input type="text" id="company" className="p-2 mb-4 border rounded" required />

                            <label htmlFor="email" className="mb-2">Email:</label>
                            <input type="email" id="email" className="p-2 mb-4 border rounded" required />

                            <label htmlFor="description" className="mb-2">Brief Description:</label>
                            <textarea id="description" className="p-2 mb-4 border rounded" rows="4" required></textarea>

                            <button type="submit" className="p-2 text-white rounded bg-tblue">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section with Image and Text at the Center */}
            <div className="relative pt-10px">
                <div className="relative w-full h-[50vh] md:h-[80vh]"> {/* Adjust height for small and larger screens */}
                    <Image 
                        src="/images/connectusbg.png"
                        alt='background'
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top" // Crop the bottom part by shifting the image upwards
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                        <h2 className="text-xl font-bold md:text-2xl">Ready to launch your next project?</h2>
                        <p className="mt-2 text-sm text-center md:text-base">
                            With lots of unique blocks, Build your next Business With Us.  <br/>   
                            Let’s work together!
                        </p>
                        <button className="px-4 py-2 mt-4 text-white rounded-lg bg-tblue md:px-6 md:py-2">Connect With Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Connectus);
