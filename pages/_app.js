import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import store from "store";

import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const { session } = pageProps;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
