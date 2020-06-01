import Head from "next/head";

import { Footer, Nav } from "components/organisms";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Faux</title>
      <meta name="description" content="Faux marketing site" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </>
);
