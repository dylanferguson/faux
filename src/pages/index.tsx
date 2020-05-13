import Head from "next/head";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700;900&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
      <main></main>

      <footer></footer>
    </div>
  );
}
