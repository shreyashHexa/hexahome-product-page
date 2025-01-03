import Image from "next/image";
import React, { useEffect, useState } from 'react';

const Blogpage = ({ blogs }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='grid gap-3 px-4 pt-8 pb-16 text-black bg-white md:px-16 md:pt-16'>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-tblue text-lg md:text-xl bg-gradient-to-r from-[#D8E3FF] to-white border-black px-2 py-1 md:py-2 w-[140px] rounded-[90px]">Our Blogs</h3>
        {!isMobile && ( // Hide top button on mobile
          <button className="mt-4 md:mt-0 ml-auto pt-1 pb-2 pl-4 pr-4 text-white w-[160px] h-[40px] bg-tblue rounded-lg md:w-[205px] md:h-[50px] md:pt-4 md:pb-4 md:pl-5 md:pr-5 hover:bg-blue-600 transition duration-200">
            Checkout More Blogs
          </button>
        )}
      </div>
      <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl">Gather Insights from our R&D team.</h2>
      <p className="mt-2 text-base md:text-lg">
        We spend a lot of time analyzing the mobile app development industry, so that you don&lsquo;t have to. Click the white papers below for an executive summary on trends, mistakes, projections, and data from the mobile app world.
      </p>
      
      <div className='grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3'>
        {blogs.map(blog => (
          <a key={blog.id} href={blog.link} className="block p-4 transition-shadow duration-200 border rounded-lg hover:shadow-lg">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              className="object-cover rounded-t-lg" 
              width={362}
              height={166}
              priority // Important for critical images
              style={{ 
                borderRadius: '12px 12px 0 0', // Fix corner radius for top
                opacity: 1
              }} 
            />
            <h2 className="mt-2 text-lg md:text-xl">{blog.title}</h2>
            <p className="mt-1 text-sm md:text-base">{blog.description}</p>
            <span className="inline-flex items-center mt-2 text-blue-500">
              Learn More <span className="ml-1">→</span>
            </span>
          </a>
        ))}
      </div> 

      {isMobile && ( // Show bottom button only on mobile
        <div className="flex justify-center mt-4 md:hidden">
          <button className="pt-2 pb-2 pl-4 pr-4 text-white w-[160px] h-[40px] bg-tblue rounded-lg hover:bg-blue-600 transition duration-200">
            More Blogs
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogpage;
