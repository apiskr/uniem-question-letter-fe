import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@/providers/MuiThemeProvider";
import { theme } from "@/providers/MuiThemeProvider";
import { EmotionCacheProvider } from "@/providers/EmotionCacheProvider";
import { texts } from "@/constants/text";
import { EmotionCache } from "@emotion/cache";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, emotionCache, pageProps }: MyAppProps) {
  return (
    <EmotionCacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta title="uniem" name="description" content={texts.headTitle} />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        {/* <meta name="emotion-insertion-point" content="" /> */}
      </Head>
      <MuiThemeProvider>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </EmotionCacheProvider>
  );
}
