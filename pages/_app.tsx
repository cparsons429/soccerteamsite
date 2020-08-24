import wrapper from "redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import "styles/globals.css";

import { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";


const WrappedApp: React.FC<AppProps> = props => {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <link rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png" />
        <link rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png" />
        <link rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png" />
        <link rel="manifest"
            href="/favicon/site.webmanifest" />
        <link rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#457b9d" />
        <link rel="shortcut icon"
            href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor"
            content="#457b9d" />
        <meta name="msapplication-config"
            content="/favicon/browserconfig.xml" />
        <meta name="theme-color"
            content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

const defaultWrapper = wrapper.withRedux(WrappedApp);

export default defaultWrapper;
