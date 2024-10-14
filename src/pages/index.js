import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturesCard from "../components/FeaturesCard";
import WorkingCard from "../components/WorkingCard";
import WhyUsCard from "../components/WhyUsCard";
import LinkPage from "../components/LinkPage";
import Tipspage from "../components/tipspage";
import Faq from "../components/FaqPage"; // Ensure correct import

export default function Home({ aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions, faqs }) {
  return (
    <div className="font-sans"> {/* Ensure Inter font is applied */}
      <Header />
      <Hero />
      <About data={aboutData} />
      <FeaturesCard data={featuresData} />
      <WorkingCard cards={workingCardData} />
      <WhyUsCard data={whyUsCardData} />
      <LinkPage propertyOptions={propertyOptions} /> {/* Passing property options */}
      <Tipspage />
      <Faq faqs={faqs} /> {/* Pass the FAQ data as props */}
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const [aboutRes, featuresRes, workingCardRes, whyUsCardRes, propertyOptionsRes, faqsRes] = await Promise.all([
      fetch(`http://localhost:3000/api/data`),
      fetch(`http://localhost:3000/api/FeaturesCardData`),
      fetch(`http://localhost:3000/api/workingcardata`),
      fetch(`http://localhost:3000/api/whyusdata`),
      fetch(`http://localhost:3000/api/links`), // Fetching property options
      fetch(`http://localhost:3000/api/faq`), // Fetching FAQ data
    ]);

    if (!aboutRes.ok || !featuresRes.ok || !workingCardRes.ok || !whyUsCardRes.ok || !propertyOptionsRes.ok || !faqsRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const [aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions, faqs] = await Promise.all([
      aboutRes.json(),
      featuresRes.json(),
      workingCardRes.json(),
      whyUsCardRes.json(),
      propertyOptionsRes.json(),
      faqsRes.json(), // Parse FAQ data
    ]);

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
        whyUsCardData,
        propertyOptions,
        faqs, // Pass the FAQ data to the props
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
        faqs: [], // Pass an empty array for FAQs on error
      },
    };
  }
}
