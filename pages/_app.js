import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { AppWrapper } from "../components/context";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ madeWithlove: true });
  return (
    <>
      <Head>
        {/* adding these meta tags to remove default search bar opening on mobile, for full screen app feel. doesn't really work*/}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
