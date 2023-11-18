import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>sunflower🌻</title>
        <link rel="icon" href="/img/favicon.jpg" />
        <meta name="keywords" content="sunflower" />
      </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
