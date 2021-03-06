import { Helmet } from "react-helmet";
import * as React from "react";

import Header from "#components/Header.react";
import Footer from "#components/Footer.react";

import "#styles/theme.css";

function Page({ children }: WithChildren): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Satire V</title>
        <link rel="preconnect" href="https://platform.twitter.com" />
        <link rel="preconnect" href="https://syndication.twitter.com" />
        <link rel="preconnect" href="https://cdn.syndication.twimg.com" />
        <link rel="preconnect" href="https://pbs.twimg.com" />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/cardinal/cardinal.woff2"
        />

        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/crimson-text/crimson-text-latin-400.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/crimson-text/crimson-text-latin-400italic.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/crimson-text/crimson-text-latin-700.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/crimson-text/crimson-text-latin-700italic.woff2"
        />

        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-300.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-300italic.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-400.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-400italic.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-700.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="/fonts/lato/lato-latin-700italic.woff2"
        />

        {/* <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            href="/fonts/merriweather/merriweather-latin-300.woff2"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            href="/fonts/merriweather/merriweather-latin-300italic.woff2"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            href="/fonts/merriweather/merriweather-latin-700.woff2"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            href="/fonts/merriweather/merriweather-latin-700italic.woff2"
          /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a51c30" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Page;
