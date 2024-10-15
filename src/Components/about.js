import Image from "next/image";
import React from "react";

const About = ({ data }) => {
  return (
    <div className="py-10">
      <div className="grid gap-4 m-4 sm:grid-cols-12">
        {/* Text Section */}
        <div className="min-h-[100px] sm:col-span-8">
          <h1 className="px-10 py-10 text-3xl font-extrabold">{data.title}</h1>
          <p className="px-10 pb-10 font-medium">
            {data.description}
          </p>
        </div>
        
        {/* Image Section */}
        <div className="min-h-[100px] sm:col-span-4">
          <Image
            src={data.imageUrl} // Use the image URL from the API
            alt="About HexaHome"
            width={400} // Specify the width
            height={500} // Specify the height
            priority // Add this if the image is critical for the page
            className="px-10 py-10 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}; 

export default React.memo(About);
