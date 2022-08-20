import Footerlogo from "../../public/images/departments/Footerlogo"
import Instagram from "../../public/images/Instagram"
import Twitter from "../../public/images/Twitter"
import Snapchat from "../../public/images/departments/Snapchat"
import Facebook from "../../public/images/Facebook"
import Tiktok from "../../public/images/departments/Tiktok"
import TiktokImg from "../../public/images/departments/tiktok.svg"
import data from '../../locales/ar/home.json';
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion"
import useTranslation from "next-translate/useTranslation";
import Link from "next/link"
import Image from "next/image"





export default function Footer({ currentDir }) {
    const { t } = useTranslation("home");
    return (

        <Box dir={currentDir} bgColor={"#422639"} height="300px" pt="70px" justifyContent={"space-between"} pb={10} >
            <Flex maxW={"82vw"} mx="auto" justify={"space-between"} pos={"relative"} _after={{ position: "absolute", width: "100%", height: "1px", content: `""`, backgroundColor: "#cecece", borderRadius: "20px", right: "0%", bottom: "-100px" }}  >
                <Flex justify={"space-between"} display={{ base: "none", md: "none", lg: "flex", xl: 'Flex' }}>
                    <HStack as={motion.footer} transition={"all 500ms ease"} color={"#fff"} flexWrap="wrap" w="30vw" >
                        {data.navbarLinks.map((item, i) => (
                            <Link key={i} href={item.route} >
                                <Button fontSize="md" bgColor={"transparent"} pos={"relative"} pl={currentDir === "rtl" ? "80px" : "0"} pr={currentDir === "ltr" ? "50px" : "0"} _hover={{ background: "transparent" }}   >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </HStack>
                </Flex>
                <Flex h={"30px"} align={"center"} pt="10px" flexDir={"column"} >
                    <Flex w={"150px"}>
                        <Footerlogo />
                    </Flex>
                    <Flex pt={10}>
                        <Box width={"40px"}>
                            <Image src={TiktokImg} width={"218"} height={"218"} layout={"responsive"} />
                        </Box>
                        <Box w="40px" h="40px" border="1px solid #cecece" borderRadius={"lg"}>
                            <Facebook width="40px" height="40px" colorSvg="#fff" />
                        </Box>
                        <Box w="40px" h="40px" border="1px solid #cecece" borderRadius={"lg"}>
                            <Instagram width="40px" height="40px" colorSvg="#fff" />
                        </Box>
                        <Box w="40px" h="40px" border="1px solid #cecece" borderRadius={"lg"}>
                            <Twitter width="40px" height="40px" colorSvg="#fff" />
                        </Box>
                        <Flex w="40px" h="40px" border="1px solid #cecece" borderRadius={"lg"} align={"center"} justify="center">
                            <Snapchat width={"20px"} height={"20px"} fillcolor={"#fff"} fill="#fff" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
        // <div className={styles.background}>
        //     <div className={styles.MaxWidth} dir={props.currentDir}>
        //         <div className={styles.dFlex}>
        //             <div className={styles.LinksSideFlex}>
        //                 <div className={styles.LinksContainer}>
        //                     <div className={styles.Linksp1}>
        //                         <Link className={styles.link} href={"/"}>{t("home")}</Link>
        //                         <Link className={styles.link} href={"/"}>{t("department")}</Link>
        //                         <Link className={styles.link} href={"/"}>{t("whoWeAre")}</Link>
        //                     </div>
        //                     <div className={styles.Linksp2}>
        //                         <Link className={styles.link} href={"/"}>{t("insideMaps")}</Link>
        //                         <Link className={styles.link} href={"/"}>{t("contact")}</Link>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className={styles.SocialSideFlex}>
        //                 <div className={styles.Logo}>
        //                     <SvgSiteLogo className={styles.svg} width="200px" height="75px" /></div>
        //                 <div className={styles.SocialIcons}>
        //                     <Instagram width="3vw" height="6vh" />
        //                     <Twitter width="3vw" height="6vh" />
        //                     <Facebook width="3vw" height="6vh" />
        //                     <Snapshat width="3vw" height="6vh" />
        //                     <Snapshat width="3vw" height="6vh" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <p className={styles.copyRight}> {t("footer")}</p>
        // </div>
    )
}