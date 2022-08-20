
import useTranslation from "next-translate/useTranslation";
import { Box, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import data from "../../locales/ar/home.json"
import Image from "next/image";
import { motion } from 'framer-motion'

export default function MallInNumbers({ currentDir }) {
    const { t } = useTranslation("common");
    const animationKeyframes = keyframes`
        0% {opacity:0; transform : translateY(20px)}
        100% {opacity:1; transform : translateY(0px) }
        `;
    const animation = `${animationKeyframes} 2s ease-in-out  `;

    return (

        //<div className={styles.maxWidth}>
        //     <div className={styles.dflex}>
        //         <div className={styles.dflexCoulmn}>
        //             <Parking width={70} />
        //             <span className={styles.numbers}>{t("parking")}</span>
        //             <span>{t("parkingDescription")}</span>
        //         </div>

        //         <div className={styles.dflexCoulmn}>
        //             <HoursOpen width={70} />
        //             <span className={styles.numbers}>{t("workingHours")}</span>
        //             <span>{t("workingHoursDescription")}</span>
        //         </div>

        //         <div className={styles.dflexCoulmn}>
        //             <Cube width={70} />
        //             <span className={`${styles.numbers} ${styles.posRelative}`}>M<span className={styles.toPowerOf}>2</span> 66.000+</span>
        //             <span>{t("BuildingDescription")}</span>
        //         </div>
        //         <div className={styles.dflexCoulmn}>
        //             <Building width={70} />
        //             <span className={styles.numbers}>{t("branches")}</span>
        //             <span>{t("branchesDescription")}</span>
        //         </div>
        //         <div className={styles.dflexCoulmn}>
        //             <Building width={70} />
        //             <span className={styles.numbers}>{t("Experience")}</span>
        //             <span>{t("ExperienceDescription")}</span>
        //         </div>
        //     </div>
        // </div>
        <>
            <Box backgroundColor={"#F6F4F5"} my={6} py={10}
                as={motion.div}
                animation={animation}>
                <Flex flexDirection={["column", "coulmn", "row"]} gap={"10vw"} mx={"auto"} maxW={"900px"} justifyContent={"center"} alignItems={"center"} color={"#3c2133"}  >
                    {data.MallInNumbers.map(icon => {
                        return (
                            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} fontFamily={"bukrabold"} key={icon.icon}>
                                <Image src={icon.icon} width={"50px"} height={"50px"} />
                                <Heading fontFamily={"bukrabold"} fontSize={"3xl"} w={"max-content"}>{icon.iconNumber}</Heading>
                                <Text>{icon.iconDescription}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </>

    )
}