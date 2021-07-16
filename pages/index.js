import Head from "next/head";
import { getPage } from "../lib/api";
import Banner from "../components/HomePage/Banner";
import ValuePropositions from "../components/HomePage/ValuePropositions";
import GoodCompany from "../components/HomePage/GoodCompany";
import Showcase from "../components/HomePage/Showcase";
import AllTab from "../components/HomePage/Tabs";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <ValuePropositions />
      <Showcase />
      <GoodCompany />
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }) {
  const pageData = await getPage("home", locale, defaultLocale);

  return {
    props: { pageData },
  };
}
