import Image from "next/image";

const About = ({ data }) => {
  return (
    <div className="py-10">
      <div className='grid gap-4 m-4 sm:grid-cols-12'>
        {/* Text Section */}
        <div className='min-h-[100px] sm:col-span-8'>
          <h1 className='px-10 py-10 text-3xl font-extrabold'>{data.title}</h1>
          <p className='px-10 pb-10 font-medium'>
            {data.description}
          </p>
        </div>
        
        {/* Image Section */}
        <div className='min-h-[100px] sm:col-span-4'>
          <Image
            src={data.imageUrl} // Use the image URL from the API
            alt="About HexaHome"
            layout="intrinsic"
            width={400}
            height={500}
            className="px-10 py-10 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}; 

export default About;
