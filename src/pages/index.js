// pages/index.js

import dynamic from 'next/dynamic'; 
import Header from "../Components/header";
import Hero from "../Components/hero";
import Head from 'next/head';

// Dynamic imports with proper casing
const About = dynamic(() => import("../Components/about"), { loading: () => <p>Loading About...</p> });
const FeaturesCard = dynamic(() => import("../Components/featuresCard"), { loading: () => <p>Loading Features...</p> });
const WorkingCard = dynamic(() => import("../Components/workingCard"), { loading: () => <p>Loading Working Cards...</p> });
const WhyUsCard = dynamic(() => import("../Components/whyusCard"), { loading: () => <p>Loading Why Us Cards...</p> });
const LinkPage = dynamic(() => import("../Components/linkpage"), { loading: () => <p>Loading Links...</p> });
const Tipspage = dynamic(() => import("../Components/tipspage"), { loading: () => <p>Loading Tips...</p> });
const Faq = dynamic(() => import("../Components/FaqPage"), { loading: () => <p>Loading FAQs...</p> });
const Testimonials = dynamic(() => import("../Components/testimonials"), { loading: () => <p>Loading Testimonials...</p> });
const Blogpage = dynamic(() => import("../Components/blogpage"), { loading: () => <p>Loading blog page...</p> });
const Connectus = dynamic(() => import("../Components/connectus"), { loading: () => <p>Loading connectus page...</p> });
const Footer = dynamic(() => import("../Components/footer"), { loading: () => <p>Loading footer page...</p> });

export default function Home({ 
  aboutData, 
  featuresData,   
  workingCardData, 
  whyUsCardData, 
  propertyOptions, 
  faqs,
  testimonialsData,
  blogs,
}) {
  return (
    <div className="font-gilroy">
    <Head>
      <title>{'HexaHome'}</title>
      <meta name="description" content={aboutData.description || 'Find your next home with HexaHome.'} />
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
    <Testimonials testimonials={testimonialsData} />
    <Blogpage blogs={blogs} />
    <Connectus />
    <Footer />
  </div>
  
  );
}

// Fetching data at build time
export async function getStaticProps() {
  const API_URL = process.env.API_URL || 'http://localhost:3000';

  try {
    const [aboutRes, featuresRes, workingCardRes, whyUsCardRes, propertyOptionsRes, faqsRes, testimonialsRes, blogsRes] = await Promise.all([
      fetch(`${API_URL}/api/data`),
      fetch(`${API_URL}/api/FeaturesCardData`),
      fetch(`${API_URL}/api/workingcardata`),
      fetch(`${API_URL}/api/whyusdata`),
      fetch(`${API_URL}/api/links`),
      fetch(`${API_URL}/api/faq`),
      fetch(`${API_URL}/api/testimonials`),
      fetch(`${API_URL}/api/blogpagedata`)
    ]);

    // Check responses
    if (
      !aboutRes.ok || 
      !featuresRes.ok || 
      !workingCardRes.ok || 
      !whyUsCardRes.ok || 
      !propertyOptionsRes.ok || 
      !faqsRes.ok || 
      !testimonialsRes.ok || 
      !blogsRes.ok
    ) {
      throw new Error('Failed to fetch one or more data sources');
    }

    const [aboutData, featuresData, workingCardData, whyUsCardData, propertyOptions, faqs, testimonialsData, blogs] = await Promise.all([
      aboutRes.json(),
      featuresRes.json(),
      workingCardRes.json(),
      whyUsCardRes.json(),
      propertyOptionsRes.json(),
      faqsRes.json(),
      testimonialsRes.json(),
      blogsRes.json()
    ]);

    return {
      props: {
        aboutData,
        featuresData,
        workingCardData,
        whyUsCardData,
        propertyOptions,
        faqs,
        testimonialsData,
        blogs,
      },
      revalidate: 60, // Optional: Regenerate the page every 60 seconds
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
        testimonialsData: [],
        blogs: [],
      },
    };
  }
}
