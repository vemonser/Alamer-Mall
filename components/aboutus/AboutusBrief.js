import { Box, Heading,  Text } from "@chakra-ui/react";

import useTranslation from "next-translate/useTranslation";

import { useEffect } from "react";
import arDataFile from "../../locales/ar/aboutus.json";
import enDataFile from "../../locales/en/aboutus.json";

export default function AboutusBrief({ currentDir }) {
  const { t } = useTranslation("aboutus");
  // const currentfile = currentDir === "rtl" ? arDataFile.BriefDescription : enDataFile.BriefDescription;
  // for (let i = 0; i < { currentfile}; i++) {
  //     const element = array[i];
  // }
  return (
    <>
      <Box
        pos={"relative"}
        height={"max-content"}
        top="0"
        right={"0"}
        mb={10}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y", backgroundSize:"100%",height:"max-content"
        }}
      >
        {/* <Image src={bgPattern} layout="fill" /> */}
        <Box
          dir={currentDir}
          color="#3c2133"
          maxW={["300px", "500px", "800px"]}
          mx="auto"
          py={"50px"}
        >
          <Heading
            as="h1"
            fontFamily={"bukrabold"}
            mx={4}
            pos={"relative"}
            _after={{
              position: "absolute",
              width: ["20%", "10%"],
              height: "10px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: "0",
              bottom: "-30px",
            }}
          >
            {t("BriefTitle")}
          </Heading>
          <Heading
            fontSize={["2xl", "2xl", "2xl", "x-large"]}
            mx={4}
            fontFamily={"bukrabold"}
            pt="70px"
            pb={2}
          >
            {t("Brief")}
          </Heading>
          <Text fontSize={["md", "md"]} fontFamily={"bukralight"} mx={4}>
            {arDataFile.BriefDescription.map((data) => {
              return <Text py={1} key={data.id}>{data.desc}</Text>;
            })}
          </Text>
        </Box>
      </Box>
    </>
  );
}
