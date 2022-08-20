import { Box, Heading, Flex, } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import heroImg from "../../public/images/aboutus/Asset 1.png"

export default function AboutusHeroImg() {
    const { t } = useTranslation("aboutus");
    return (
        <>
            <Flex pos={'relative'} width={'97%'} height={["50vh", "80vh"]} mx={"auto"} borderRadius="0px 0px 15px 15px " overflow={"hidden"} mb={10}>
                <Image src={heroImg} layout="fill" alt={"about hero image "} objectFit="cover" objectPosition={" bottom"} />
                <Box pos={"absolute"} bg="#fa6800" bottom={0} right={0} pr={"5vw"} pl={["10vw", "10vw", "12vw"]} py={[6, 6, 8]} borderRadius={"20px 0 0 0"}>

                    <Heading as={"h1"} fontSize={["3xl", "4xl", "5xl"]} color={"#fff"} fontFamily={"bukrabold"}>
                        {t("bgTitle")}
                    </Heading>

                </Box>
            </Flex>
        </>
    )
}