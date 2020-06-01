import "./tailwind.css";

import { useEffect } from "react";
import Router from "next/router";
import { AppProps } from "next/app";
import * as analytics from "lib/analytics";

import { Layout } from "components/organisms/Layout";

type ReportWebVitalsParams = {
  id: string;
  name: string;
  label: string;
  value: number;
};

/**
 * Relay Web Vitals to GA
 * Ref:
 *  - https://nextjs.org/docs/advanced-features/measuring-performance
 *  - https://web.dev/vitals/
 */
export const reportWebVitals = ({
  id,
  name,
  label,
  value,
}: ReportWebVitalsParams) => {
  analytics.event({
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    action: name,
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
};

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
