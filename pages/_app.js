import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import { useState } from "react";

const stateContext = React.createContext({ state: {}, setState: undefined });

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ madeWithlove: true });
  return (
    <>
      <stateContext.Provider value={{ state, setState }}>
        <Head>
          {/* adding these meta tags to remove default search bar opening on mobile, for full screen app feel. doesn't really work*/}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <Component {...pageProps} />
      </stateContext.Provider>
    </>
  );
}

export default MyApp;
