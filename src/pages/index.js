import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturesCard from "../components/FeaturesCard";
import WorkingCard from "../components/Workingcard";
import WhyUsCard from "../components/WhyUsCard"; // Corrected case for WhyUsCard
import Linkpage from "../Components/linkpage";

export default function Home({ aboutData, featuresData, workingCardData, whyUsCardData }) {
  return (
    <div className="font-sans"> {/* Use font-sans for Inter font */}
      <Header />
      <Hero />
      <About data={aboutData} />
      <FeaturesCard data={featuresData} /> {/* Ensure correct component name */}
      <WorkingCard cards={workingCardData} /> {/* Ensure correct component name */}
      <WhyUsCard data={whyUsCardData} /> {/* Corrected prop name */}
      <Linkpage/>
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const aboutRes = await fetch(`http://localhost:3000/api/data`);
    const featuresRes = await fetch(`http://localhost:3000/api/FeaturesCardData`);
    const workingCardRes = await fetch(`http://localhost:3000/api/workingcardata`);
    const whyUsCardRes = await fetch(`http://localhost:3000/api/whyusdata`); // Corrected API route name for Why Us data
    
    if (!aboutRes.ok || !featuresRes.ok || !workingCardRes.ok || !whyUsCardRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const aboutData = await aboutRes.json();
    const featuresData = await featuresRes.json();
    const workingCardData = await workingCardRes.json();
    const whyUsCardData = await whyUsCardRes.json(); // Corrected prop name

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
        whyUsCardData, // Corrected prop name
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        aboutData: { title: 'Error', description: 'Failed to load data.' },
        featuresData: [],
        workingCardData: [],
        whyUsCardData: [], // Corrected prop name and fallback
      },
    };
  }
}
