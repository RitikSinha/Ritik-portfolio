import Head from "next/head";
import Image from "next/image";
import { TabsRender, About, Nav, Hero, Footer } from "../components";
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
        <TabsRender />
        <Footer />
      </main>
    </div>
  );
}
