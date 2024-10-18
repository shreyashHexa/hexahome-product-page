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
          {data.title}
          </h1>
          <p className="px-4 pb-6 font-medium md:px-10 md:pb-10">
          {data.description}  </p>
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
