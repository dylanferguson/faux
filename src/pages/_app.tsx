import React from "react";
import App from "next/app";
import "./tailwind.css";

import { Layout } from "components/Layout";

// TODO: Relay to analytics provider
// https://nextjs.org/docs/advanced-features/measuring-performance
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === "production") {
    console.log(metric);
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
