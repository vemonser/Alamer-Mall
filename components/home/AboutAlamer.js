import Image from "next/image"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation";
import { Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import data from "../../locales/ar/home.json"

export default function AboutAlamer({ currentDir }) {
    const { t } = useTranslation("common");
    return (
        <>
            <Box fontFamily={"bukrabold"} my={6} py={"5vw"} pos={"relative"} top={"0"} left={0}>

                <Image src={data.patternBg} width="5692" height="2238" objectFit="cover" layout="fill" />
                <Flex maxW={["98vw", "95vw", "85vw"]} justify={"space-between"} align={"center"} mx={"auto"} flexDir={["column", "column", "row"]}>

                    <Flex w={["80%", "80%", "50%"]} order={["0", "0", "1"]} >
                        <Box dir={currentDir} zIndex="5">
                            <Heading fontFamily={"bukrabold"} color="#3c2133">{data.aboutMalltitle}</Heading>
                            {data.aboutAlAmer.map(desc => {
                                return (
                                    <Text pt={[4, 6, 4]} pb={3} fontFamily={"bukrabold"} fontSize={"sm"} color="#3c2133" key={desc.aboutMallDescription}>
                                        {desc.aboutMallDescription}</Text>
                                )
                            })}
                        </Box>
                    </Flex>
                    <Flex w={["100%", "50%", "50%"]} top={"0"} left={"-2vw"} h={"100%"} pos={"relative"} >
                        <Box dispaly="block" w="100%" h="100%">
                            <Image src={data.alAmerCircle} width={926} height={502} layout="responsive" />
                        </Box>
                        <Button pos={"absolute"} left={"40%"} bottom={"0"} borderRadius={"full"} bgColor={"#f37625"} color={"#fff"} px={5} _hover={{ bgColor: "#3c2133" }}>{data.btnReadMore}</Button>
                    </Flex>
                </Flex>
            </Box>


        </>




        // <div className={styles.Background} >
        //     <div className={styles.grayBg}>
        //         <Image src={grayBackground} width={"2000px"} height={"700"} objectFit={"cover"}/>
        //     </div>
        //     <div className={styles.MaxWidth} dir={props.currentDir}>
        //         <div className={styles.dflexTxt}>
        //             <h1>{t("AboutMalltitle")}</h1>
        //             <p>{t("AboutMallDescriptionPartOne")}</p>
        //             <p>{t("AboutMallDescriptionPartTwo")}</p>
        //         </div>
        //         <div className={styles.dflexImg}>
        //             <Image src={AboutAlamerImg} width={"400"} height={"360"} objectFit="cover" />
        //             <Link href={"/"}><span className={styles.Btn}>{t("AboutMallButton")}</span></Link>
        //         </div>
        //     </div>
        // </div>
    )
}