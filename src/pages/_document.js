import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Import Glory font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Glory:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased font-">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
