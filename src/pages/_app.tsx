import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@/providers/MuiThemeProvider";
import { EmotionCacheProvider } from "@/providers/EmotionCacheProvider";
import { texts } from "@/constants/text";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionCacheProvider>
      <Head>
        <title>{texts.headTitle}</title>
      </Head>
      <MuiThemeProvider>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </EmotionCacheProvider>
  );
}
