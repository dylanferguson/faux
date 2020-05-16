import Head from "next/head";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <main className="flex-1"></main>
        <Footer />
      </div>
    </>
  );
}
