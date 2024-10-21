import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component ClassName="px-4" {...pageProps} />;
}

export default MyApp;
