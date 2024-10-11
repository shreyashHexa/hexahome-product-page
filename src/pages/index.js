import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/FeaturesCard";
import Workingcard from "../components/Workingcard";
import WhyUsCard from "../components/whyusCard"; // Import the new component

export default function Home({ aboutData, featuresData, workingCardData, whyUsCardData }) {
  return (
    <div className="font-sans"> {/* Use font-sans for Inter font */}
      <Header />
      <Hero />
      <About data={aboutData} />
      <Card data={featuresData} />
      <Workingcard cards={workingCardData} />
    {/* Pass data to WhyUsCard */}
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const aboutRes = await fetch(`http://localhost:3000/api/data`);
    const featuresRes = await fetch(`http://localhost:3000/api/FeaturesCardData`);
    const workingCardRes = await fetch(`http://localhost:3000/api/workingcardata`);
   
    if (!aboutRes.ok || !featuresRes.ok || !workingCardRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const aboutData = await aboutRes.json();
    const featuresData = await featuresRes.json();
    const workingCardData = await workingCardRes.json();
    

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
       // Passing WhyUsCard data to props
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        aboutData: { title: 'Error', description: 'Failed to load data.' },
        featuresData: [],
        workingCardData: [],
       
      },
    };
  }
}
