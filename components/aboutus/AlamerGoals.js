import { Box, Heading, Container, keyframes } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import AlamerGoalImg from "../../public/images/aboutus/Untitled-3-02.png"
import logo from "../../public/images/aboutus/logoColoredCenterWithText.svg"

import { motion } from 'framer-motion';


export default function AlamerGoals({ currentDir }) {

    const { t } = useTranslation("aboutus");
    return (
        <>
            <Box pos={"relative"} w="100%" height={["30vw", "35vw", "48vw"]} top="0" right="0" mx={"auto"} pt={10} >
                <Box maxW={"800px"} mx="auto" dir={currentDir} >
                    <Heading as="h1" fontFamily={"bukrabold"} mx={4} pos={"relative"} color="#fff" zIndex="10" pt={10} _after={{ position: "absolute", width: ["20%", "10%"], height: "7px", content: `""`, backgroundColor: "#fa6800", borderRadius: "20px", right: "0", bottom: "-25px" }}>
                        {t("AlamerGoals")}
                    </Heading>
                </Box>
                <Box pos={"absolute"} top="0" right="0">

                    <Image src={AlamerGoalImg} alt="our goals image"/>
                </Box>
                <Box as={motion.div} pos={"absolute"} w="20%" height={"20%"} bottom={["-20%", "-10%", "20%", "20%"]} right={["39%"]} whileHover={{ opacity: [1, 0,  1], transition: " all 500ms ease  " }}   >
                    <Image src={logo} alt="logo image" layout="responsive" />
                </Box>
            </Box>

        </>
    )
}
