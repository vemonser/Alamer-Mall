import useTranslation from "next-translate/useTranslation";
import AboutusHeroImg from "../../components/aboutus/AboutusHeroImg";
import AboutusBrief from "../../components/aboutus/AboutusBrief";
import { useRouter } from "next/router";
import AlamerGoals from "../../components/aboutus/AlamerGoals";
import Founder from "../../components/aboutus/Founder";
import { useEffect, useState } from "react";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import LoadingScreen from "../../components/LoadingScreen";
export default function About() {
  const { locale } = useRouter();
  const currentDir = locale === "ar" ? "rtl" : "ltr";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, [ ]);
  async function getData() {
    await axios("https://vemonser.github.io/AlamerBackend/aboutus.json").then(
      (res) => {
        setData();
      }
    );
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>

          <AboutusHeroImg currentDir={currentDir} />
          <AboutusBrief currentDir={currentDir} />
          <AlamerGoals currentDir={currentDir} />
          <Founder currentDir={currentDir} />
  
        </>
      )}
    </>
  );
}
