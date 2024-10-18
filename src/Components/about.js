// import Image from "next/image";
// import React from "react";

// const About = ({ data }) => {
//   return (
//     <div className="py-10 text-black bg-white">
//       <div className="grid gap-4 m-4 sm:grid-cols-12">
//         {/* Text Section */}
//         <div className="min-h-[100px] sm:col-span-8">
//           <h1 className="px-4 py-6 text-2xl font-extrabold md:px-10 md:py-10 md:text-3xl">
//             {data.title}
//           </h1>
//           <p className="px-4 pb-6 font-medium md:px-10 md:pb-10">
//             {data.description}
//           </p>
//         </div>
        
//         {/* Image Section */}
//         <div className="min-h-[100px] sm:col-span-4 flex justify-center items-center">
//           <Image
//             src={data.imageUrl} // Use the image URL from the API
//             alt="About HexaHome"
//             width={400} // Specify the width
//             height={500} // Specify the height
//             priority // Add this if the image is critical for the page
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(About);
import Image from "next/image";
import React from "react";

const About = ({ data }) => {
  return (
    <div className="py-10 text-black bg-white">
      <div className="grid gap-4 m-4 sm:grid-cols-12">
        {/* Text Section */}
        <div className="min-h-[100px] sm:col-span-8">
          <h1 className="px-4 py-6 text-2xl font-extrabold md:px-10 md:py-10 md:text-3xl">
          About HexaHome
          </h1>
          <p className="px-4 pb-6 font-medium md:px-10 md:pb-10">
          HexaHome, your one-stop solution for all your real estate needs! Whether you&apos;re looking to buy, sell, rent, or lease properties, HexaHome makes the process seamless and efficient. Our platform connects buyers, sellers, renters, and agents in one place, offering a wide range of real estate options, including properties, projects, PGs, and shared flats. At HexaHome, we empower users by providing direct access to listings from owners, builders, and agents, giving you the flexibility to choose the best fit for your needs. With detailed property information, high-quality images, and an intuitive interface, you can explore, compare, and make informed decisions with ease.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="min-h-[100px] sm:col-span-4 flex justify-center items-center">
          <Image
            src={ '/images/aboutimg.webp'} // Use the image URL from the API
            alt="About HexaHome"
            width={400} // Specify the width
            height={500} // Specify the height
            priority // Add this if the image is critical for the page
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
