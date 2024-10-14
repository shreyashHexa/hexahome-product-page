import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturesCard from "../components/FeaturesCard";
import WorkingCard from "../components/Workingcard";
import WhyUsCard from "../components/WhyUsCard";
import LinkPage from "../components/LinkPage";

export default function Home({ aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions }) {
  return (
    <div className="font-sans"> {/* Ensure Inter font is applied */}
      <Header />
      <Hero />
      <About data={aboutData} />
      <FeaturesCard data={featuresData} />
      <WorkingCard cards={workingCardData} />
      <WhyUsCard data={whyUsCardData} />
      <LinkPage propertyOptions={propertyOptions} /> {/* Passing property options */}
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const [aboutRes, featuresRes, workingCardRes, whyUsCardRes, propertyOptionsRes] = await Promise.all([
      fetch(`http://localhost:3000/api/data`),
      fetch(`http://localhost:3000/api/FeaturesCardData`),
      fetch(`http://localhost:3000/api/workingcardata`),
      fetch(`http://localhost:3000/api/whyusdata`),
      fetch(`http://localhost:3000/api/links`), // Fetching property options
    ]);

    if (!aboutRes.ok || !featuresRes.ok || !workingCardRes.ok || !whyUsCardRes.ok || !propertyOptionsRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const [aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions] = await Promise.all([
      aboutRes.json(),
      featuresRes.json(),
      workingCardRes.json(),
      whyUsCardRes.json(),
      propertyOptionsRes.json(),
    ]);

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
        whyUsCardData,
        propertyOptions,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        aboutData: { title: 'Error', description: 'Failed to load data.' },
        featuresData: [],
        workingCardData: [],
        whyUsCardData: [],
        propertyOptions: [],
      },
    };
  }
}
