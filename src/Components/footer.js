import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [openSections, setOpenSections] = useState({
        company: false,
        services: false,
        industries: false,
        developers: false,
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <footer className="px-4 pt-10 pb-6 text-white bg-fbg">
            <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-[25%_75%]">
                {/* First Column: Logo, Address, Social Icons */}
                <div className="grid gap-4 mb-6 md:mb-0">
                    <Image 
                        src="/images/logo.svg" 
                        alt="Company Logo"
                        width={150}
                        height={60}
                        className="mb-4"
                    />
                    <p id="des" className="mb-4 text-sm">
                        Hexadecimal is an Indian digital agency that has architected and maintained digital solutions for hundreds of VC-backed startups, government agencies, and Fortune 500 companies.
                    </p>
                    <h2>
                        Contact us: <Link href="mailto:info@hexadecimalsoftware.com">info@hexadecimalsoftware.com</Link>
                    </h2>
                    <h2 className="font-semibold">
                        INDIA 
                        <p className="mb-4 text-sm">
                            Office-410, Corporate Park, Tower-A1, Sector 142, Noida, Uttar Pradesh 201305
                        </p>
                    </h2>
                    {/* <div className="flex mb-4 space-x-4">
    <a href="#" className="text-white hover:text-gray-400">
        <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
    </a>
    <a href="#" className="text-white hover:text-gray-400">
        <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
    </a>
    <a href="#" className="text-white hover:text-gray-400">
        <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
    </a>
    <a href="#" className="text-white hover:text-gray-400">
        <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
    </a>
</div> */}


                </div>

                {/* Second Section: Our Company, Services, Industries */}
                <div className="grid gap-4 md:grid-cols-3 sm:space-x-2">
                    {/* Our Company */}
                    <div>
                        <h2 
                            className="flex items-center justify-between mb-2 space-y-1 font-bold cursor-pointer sm:mb-4"
                            onClick={() => toggleSection("company")}
                        >
                            Our Company
                            <span className="ml-auto md:hidden">
                                <Image 
                                    src={`/images/arrow-${openSections.company ? 'up' : 'down'}.svg`} 
                                    alt="Toggle" 
                                    width={16} 
                                    height={16} 
                                    className="inline-block" 
                                />
                            </span>
                        </h2>
                        <ul className={`space-y-2 text-sm ${openSections.company || !isClient ? 'block' : 'hidden'} md:block`}>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                        </ul>

                        {/* Hire Developers */}
                        <h2 
                            className="flex items-center justify-between pt-2 mb-2 space-y-1 font-bold cursor-pointer sm:mb-4"
                            onClick={() => toggleSection("developers")}
                        >
                            Hire Developers
                            <span className="ml-auto md:hidden">
                                <Image 
                                    src={`/images/arrow-${openSections.developers ? 'up' : 'down'}.svg`} 
                                    alt="Toggle" 
                                    width={16} 
                                    height={16} 
                                    className="inline-block" 
                                />
                            </span>
                        </h2>
                        <ul className={`space-y-2 text-sm ${openSections.developers || !isClient ? 'block' : 'hidden'} md:block`}>
                            <li><a href="#" className="hover:text-gray-400">Hire Designers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Hire QA Testers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Hire iOS Developers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Hire Android Developers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Hire Web Developers</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h2 
                            className="flex items-center justify-between mb-2 space-y-1 font-bold cursor-pointer sm:mb-4"
                            onClick={() => toggleSection("services")}
                        >
                            Our Services
                            <span className="ml-auto md:hidden">
                                <Image 
                                    src={`/images/arrow-${openSections.services ? 'up' : 'down'}.svg`} 
                                    alt="Toggle" 
                                    width={16} 
                                    height={16} 
                                    className="inline-block" 
                                />
                            </span>
                        </h2>
                        <ul className={`space-y-2 text-sm ${openSections.services || !isClient ? 'block' : 'hidden'} md:block`}>
                            <li><a href="#" className="hover:text-gray-400">iOS App Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Android App Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">React Native App Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Web Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Front-End Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">IoT App Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Blockchain Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Custom Software Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">UI/UX Solutions</a></li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h2 
                            className="flex items-center justify-between mb-2 space-y-1 font-bold cursor-pointer sm:mb-4"
                            onClick={() => toggleSection("industries")}
                        >
                            Industries
                            <span className="ml-auto md:hidden">
                                <Image 
                                    src={`/images/arrow-${openSections.industries ? 'up' : 'down'}.svg`} 
                                    alt="Toggle" 
                                    width={16} 
                                    height={16} 
                                    className="inline-block" 
                                />
                            </span>
                        </h2>
                        <ul className={`space-y-2 text-sm ${openSections.industries || !isClient ? 'block' : 'hidden'} md:block`}>
                            <li><a href="#" className="hover:text-gray-400">On-Demand App Development</a></li>
                            <li><a href="#" className="hover:text-gray-400">Healthcare Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">E-commerce Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Social Networking Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Fintech Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Gaming Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Education Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Real Estate Industries</a></li>
                            <li><a href="#" className="hover:text-gray-400">Entertainment Industries</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer bottom section */}
            <span className="block mt-6 text-center md:flex md:justify-center md:space-x-6">
                <p>© 2024 Hexadecimal. All Rights Reserved.</p> 
                <h2 className="block mt-2 text-blue-700 md:inline-block md:mt-0">Policy</h2>
                <h2 className="block mt-2 text-blue-700 md:inline-block md:mt-0">Sitemap</h2>
            </span>
        </footer>
    );
};

export default React.memo(Footer);
