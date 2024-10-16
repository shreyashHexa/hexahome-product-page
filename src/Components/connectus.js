import React from 'react';
import Image from "next/image";

const Connectus = () => {
    return (
        <div className="flex flex-col pt-8 items-left md:px-16 md:pt-16">
            <div className="px-2 mb-8 text-left">
                <h3 className="inline-block px-3 py-1 text-lg font-semibold bg-gray-200 rounded-full text-tblue">Get Connect With Us</h3>
                <h2 className="mt-2 text-3xl font-bold md:text-2xl">Send us your plan, our team will connect you with the solution</h2>
            </div> 
            <div className="flex flex-col md:flex-row">
                {/* Image Div with text overlay */}
                <div className="relative hidden mb-8 md:mb-0 md:w-1/2 md:pr-4 md:block">
                    <Image 
                        src="/images/connectus.png" // Correct image path
                        alt='Connect Us'
                        width={620}
                        height={630}
                        className="object-cover w-full h-full rounded-lg" // Ensure image takes full width and height
                    />
                    <div className="w-full p-2 text-center text-white rounded-b-lg bg-opacity-70">
                        <p>Your text here</p> {/* Replace with your desired text */}
                    </div>
                </div>
                {/* Form Div */}
                <div id="form" className="flex flex-col py-3 bg-white border rounded-lg md:w-1/2 md:pl-4">
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
            {/* <div><Image 
            src="/images/connect2.png" 
            alt=''
            width={600}
            height={200}
            />
                </div> */}
        </div>
    );
};

export default React.memo(Connectus);
