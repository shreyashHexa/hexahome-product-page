import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Card from "../components/FeaturesCard";
import Workingcard from "../Components/workingCard";

export default function Home({ aboutData, featuresData }) {
  return (
    <div className="font-sans"> {/* Use font-sans for Inter font */}
      <Header />
      <Hero />
      <About data={aboutData} />
      <Card data={featuresData} /> {/* Pass the features data to the Card component */}
      <Workingcard/>
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const aboutRes = await fetch(`http://localhost:3000/api/data`);
    const featuresRes = await fetch(`http://localhost:3000/api/FeaturesCardData`); // Fetch features data

    if (!aboutRes.ok || !featuresRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const aboutData = await aboutRes.json();
    const featuresData = await featuresRes.json(); // Get features data

    return {
      props: {
        aboutData, // Passing data to the About component
        featuresData, // Passing features data to the Card component
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        aboutData: { title: 'Error', description: 'Failed to load data.' }, // Fallback data for About
        featuresData: [], // Fallback empty array for Features
      },
    };
  }
}
     