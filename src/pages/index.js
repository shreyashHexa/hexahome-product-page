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
  error,
}) {
  return (
    <div className="font-sans">
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
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
    </div>
  );
}

// Fetching data server-side
export async function getServerSideProps() {
  try {
    const [aboutRes, featuresRes, workingCardRes, whyUsCardRes, propertyOptionsRes, faqsRes, testimonialsRes, blogsRes] = await Promise.all([
      fetch(`http://localhost:3000/api/data`).catch(err => null),
      fetch(`http://localhost:3000/api/FeaturesCardData`).catch(err => null),
      fetch(`http://localhost:3000/api/workingcardata`).catch(err => null),
      fetch(`http://localhost:3000/api/whyusdata`).catch(err => null),
      fetch(`http://localhost:3000/api/links`).catch(err => null),
      fetch(`http://localhost:3000/api/faq`).catch(err => null),
      fetch(`http://localhost:3000/api/testimonials`).catch(err => null),
      fetch(`http://localhost:3000/api/blogpagedata`).catch(err => null)
    ]);

    // Handle individual responses and fallback to default if the fetch fails
    const aboutData = aboutRes && aboutRes.ok ? await aboutRes.json() : { title: 'About', description: 'About data is unavailable.' };
    const featuresData = featuresRes && featuresRes.ok ? await featuresRes.json() : [];
    const workingCardData = workingCardRes && workingCardRes.ok ? await workingCardRes.json() : [];
    const whyUsCardData = whyUsCardRes && whyUsCardRes.ok ? await whyUsCardRes.json() : [];
    const propertyOptions = propertyOptionsRes && propertyOptionsRes.ok ? await propertyOptionsRes.json() : [];
    const faqs = faqsRes && faqsRes.ok ? await faqsRes.json() : [];
    const testimonialsData = testimonialsRes && testimonialsRes.ok ? await testimonialsRes.json() : [];
    const blogs = blogsRes && blogsRes.ok ? await blogsRes.json() : [];

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
        error: null, 
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
        testimonialsData: [],
        blogs: [],
        error: error.message,
      },
    };
  }
}
