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
  featuresData,   
  workingCardData, 
  whyUsCardData, 
  propertyOptions, 
  faqs,
  testimonialsData,
  blogs, // Add blogs to props
  error, // Add error to props
}) {
  return (
    <div className="font-sans">
      <Head>
        <title>{ 'HexaHome'}</title>
        <meta name="description" content={'Find your next home with HexaHome.'} />
      </Head>
      <Header />
      <Hero />
      <About />
      <FeaturesCard data={featuresData} />
      <WorkingCard cards={workingCardData} />
      <WhyUsCard data={whyUsCardData} />
      <LinkPage propertyOptions={propertyOptions} />
      <Tipspage />
      <Faq faqs={faqs} />
      <Testimonials testimonials={testimonialsData} /> {/* Pass testimonials data */}
      <Blogpage blogs={blogs} /> {/* Pass blogs data */}
      <Connectus />
      <Footer />
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const [featuresRes, workingCardRes, whyUsCardRes, propertyOptionsRes, faqsRes, testimonialsRes, blogsRes] = await Promise.all([
      fetch(`http://localhost:3000/api/FeaturesCardData`),
      fetch(`http://localhost:3000/api/workingcardata`),
      fetch(`http://localhost:3000/api/whyusdata`),
      fetch(`http://localhost:3000/api/links`),
      fetch(`http://localhost:3000/api/faq`),
      fetch(`http://localhost:3000/api/testimonials`), // Fetch testimonials data
      fetch(`http://localhost:3000/api/blogpagedata`) // Fetch blogs data
    ]);

    if (
      !featuresRes.ok || 
      !workingCardRes.ok || 
      !whyUsCardRes.ok || 
      !propertyOptionsRes.ok || 
      !faqsRes.ok || 
      !testimonialsRes.ok || 
      !blogsRes.ok // Check for blogs response
    ) {
      throw new Error('Failed to fetch one or more data sources');
    }

    const [featuresData, workingCardData, whyUsCardData, propertyOptions, faqs, testimonialsData, blogs] = await Promise.all([
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
        featuresData,
        workingCardData,
        whyUsCardData,
        propertyOptions,
        faqs,
        testimonialsData, // Return testimonials data
        blogs, // Return blogs data
        error: null, // Reset error to null if data fetching is successful
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuresData: [],
        workingCardData: [],
        whyUsCardData: [],
        propertyOptions: [],
        faqs: [],
        testimonialsData: [],
        blogs: [],
        error: error.message, // Pass error message to props
      },
    };
  }
}
