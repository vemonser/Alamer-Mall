import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import imgFullWidth from "../../public/images/aboutus/Asset 2.png"
import imgCircles from "../../public/images/aboutus/Untitled-3-04.png"
import AboutLogo from "../../public/images/aboutus/Untitled-3-05.png"


export default function Founder({ currentDir }) {
    const { t } = useTranslation("aboutus");

    return (
        <>
            {/* <Box dir={currentDir} mx={"auto"} maxW="800px">
                <Heading as="h1" fontFamily={"bukrabold"} pos={"relative"} color="#3c2133" zIndex="10" pt={10} _after={{ position: "absolute", width: ["20%", "10%"], height: "7px", content: `""`, backgroundColor: "#fa6800", borderRadius: "20px", right: "0", bottom: "-25px" }}>
                    {t("Founder")}
                </Heading>
                <Text py={14}>
                    {t("FounderDescription")}
                </Text>
            </Box> */}
            <Box pos={"relative"} w={"100%"}  mb={"-7"} _after={{ position: "absolute", width: "50%", height: "15px", content: `""`, backgroundColor: "#fa6800", borderRadius: "20px 0 0 20px", right: "0", bottom: "-15px" }}>
                <Image src={imgFullWidth} objectFit="cover" layout="responsive" />
            </Box>
            <Box overflow={"hidden"} w={"100%"} dir={currentDir}>
                <Heading as="h1" maxW={"80vw"} mx={"auto"} fontFamily={"bukrabold"} pos={"relative"} top={"10vw"} color="#3c2133" zIndex="10" _after={{ position: "absolute", width: ["20%", "8%"], height: "7px", content: `""`, backgroundColor: "#fa6800", borderRadius: "20px", right: "0", bottom: "-25px" }}>
                    {t("ourjourney")}
                </Heading>
                <Image src={imgCircles} layout="responsive" />
            </Box>
            <Box w={"100%"}  dir={currentDir} display="block" >
                <Heading as="h1" maxW={"80vw"} mx={"auto"} fontFamily={"bukrabold"} pos={"relative"} top={"10vw"} color="#3c2133" zIndex="10" _after={{ position: "absolute", width: ["20%", "8%"], height: "7px", content: `""`, backgroundColor: "#fa6800", borderRadius: "20px", right: "0", bottom: "-25px" }}>
                    {t("logoTitle")}
                </Heading>
                <Image src={AboutLogo} layout="responsive"   />
            </Box>
        </>
    )
}


