import '../styles/globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { LazyMotion, domAnimation } from 'framer-motion';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/avatar.png" type="image/x-icon" />

        <title>{`Chaz Hampton's Portfolio`}</title>

        <meta name="title" content="Chaz Hampton's Portfolio" />
        <meta name="description" content="Chaz Hampton's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chaz Hampton's Portfolio" />
        <meta property="og:description" content="Chaz Hampton's Portfolio" />
        <meta property="og:image" content="/avatar.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Chaz Hampton's" />
        <meta
          property="twitter:description"
          content="Chaz Hampton's Portfolio"
        />
        <meta property="twitter:image" content="/avatar.png" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}

export default MyApp;
