import Head from "next/head";
import { getPage } from "../lib/api";

import HomeIntro from "../components/ContentElements/Home/HomeIntro/HomeIntro";
import AppOverView from "../components/ContentElements/Home/AppOverview/AppOverView";
import Manifest from "../components/ContentElements/Home/Manifest/Manifest";
import Navigation from "../components/Header/Navigation";
import Banner from "../components/HomePage/Banner";
import ValuePropositions from "../components/HomePage/ValuePropositions";
import GoodCompany from "../components/HomePage/GoodCompany";
import Footer from "../components/Footer/Footer";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 
      <HomeIntro content={pageData?.home?.content} />
      <ValueProposition />
      <AppOverView />
      <Manifest /> */}
      <Navigation />
      <Banner />
      <ValuePropositions />
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
