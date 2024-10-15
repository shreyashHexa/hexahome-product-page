import dynamic from 'next/dynamic'; 
import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from 'next/head';

const About = dynamic(() => import("../components/About"), { loading: () => <p>Loading About...</p> });
const FeaturesCard = dynamic(() => import("../components/FeaturesCard"), { loading: () => <p>Loading Features...</p> });
const WorkingCard = dynamic(() => import("../components/WorkingCard"), { loading: () => <p>Loading Working Cards...</p> });
const WhyUsCard = dynamic(() => import("../components/WhyUsCard"), { loading: () => <p>Loading Why Us Cards...</p> });
const LinkPage = dynamic(() => import("../components/LinkPage"), { loading: () => <p>Loading Links...</p> });
const Tipspage = dynamic(() => import("../components/tipspage"), { loading: () => <p>Loading Tips...</p> });
const Faq = dynamic(() => import("../components/FaqPage"), { loading: () => <p>Loading FAQs...</p> });
const Testimonials = dynamic(() => import("../components/Testimonials"), { loading: () => <p>Loading Testimonials...</p> });

export default function Home({ aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions, faqs }) {
  return (
    <div className="font-sans">
      <Head>
        <title>{aboutData.title}</title>
        <meta name="description" content={aboutData.description} />
      </Head>
      <Header />
      <Hero />
      <About data={aboutData} />
      <FeaturesCard data={featuresData} />
      <WorkingCard cards={workingCardData} />
      <WhyUsCard data={whyUsCardData} />
      <LinkPage propertyOptions={propertyOptions} />
      <Tipspage />
      <Faq faqs={faqs} />
      <Testimonials />
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
      fetch(`http://localhost:3000/api/links`),
      fetch(`http://localhost:3000/api/faq`),
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
      faqsRes.json(),
    ]);

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
        whyUsCardData,
        propertyOptions,
        faqs,
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
        faqs: [],
      },
    };
  }
}
