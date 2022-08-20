import Head from "next/head";

import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Hero from "../components/home/Hero";
import MallInNumbers from "../components/home/MallInNumbers";
import AboutAlamer from "../components/home/AboutAlamer";
import Department from "../components/home/Department";
import Partners from "../components/home/Partners";
import OurNew from "../components/home/OurNew";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";
export default function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const currentDir = locale === "ar" ? "rtl" : "ltr";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios("https://vemonser.github.io/AlamerBackend/aboutus.json").then(
      (res) => {
        setData();
      }
    );
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Head>
            <title>AlAmer Mall</title>
            <meta name="description" content="Everything Is Possible" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Hero />
          <MallInNumbers />
          <AboutAlamer currentDir={currentDir} />
          <Department currentDir={currentDir} />
          <Partners currentDir={currentDir} />
          <OurNew currentDir={currentDir} />
        </>
      )}
    </>
  );
}
