import Head from "next/head";
import Image from "next/image";
import { Work, About, Nav, Hero } from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ritik&prime;s Portfolio</title>
        <meta name="description" content="Frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white ">
        <Nav />
        <Hero />
        <About />
        <Work />
      </main>
    </div>
  );
}
