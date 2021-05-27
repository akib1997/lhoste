import Head from "next/head";
import { getPage } from "../lib/api";
import Navigation from "../components/Header/Navigation";
import Banner from "../components/HomePage/Banner";
import ValuePropositions from "../components/HomePage/ValuePropositions";
import GoodCompany from "../components/HomePage/GoodCompany";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/HomePage/Showcase";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Banner />
      <ValuePropositions />
      <Showcase />
      <GoodCompany />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }) {
  const pageData = await getPage("home", locale, defaultLocale);

  return {
    props: { pageData },
  };
}
