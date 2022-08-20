import {
    Box, Center, Accordion, Heading, AccordionItem, keyframes,
    AccordionButton, AccordionPanel, AccordionIcon, Text, Link, Flex, Button,
    HStack, layout
} from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import LocationSvg from "../../public/images/Location"
import shopping from "../../shopping.json"
import shoppingBg from "../../public/images/departments/departmentbg.jpg"
import rightArrow from "../../public/images/departments/rightarrow.svg"
import leftArrow from "../../public/images/departments/leftarrow.svg"
import { useState } from "react";
// TODO 
// نغير الصورة من انها تتحط من هنا ونخليها تتحط من الباك
// نحط الخط العربي
export default function Collapse() {
    const [currentDepartment, setCurrentDepartments] = useState(0);
    const { t } = useTranslation("shopping");
    const shoppingData = shopping.data[currentDepartment];
    const shoppingCount = Object.keys(shopping.data).length - 1;

    const leftClickHandle = () => {
        if (currentDepartment === 0) {
            setCurrentDepartments(shoppingCount)
        } else {
            setCurrentDepartments(currentDepartment - 1)
        }
    }
    const rightClickHandle = () => {
        if (currentDepartment === shoppingCount) {
            setCurrentDepartments(0)
        } else {
            setCurrentDepartments(currentDepartment + 1)
        }
    }



    return (
        <>
            {/* */}
            <Flex pos={'relative'} width={'100%'} height="75vh"  >
                <Image src={shoppingBg} layout="fill" objectFit="cover" objectPosition={" top top "} />
                <Box >
                    <Flex pos={"absolute"} dir="rtl"
                        top="0" left="0" right="0" bottom="0" direction={"column"} mx="auto"
                        zIndex={10} fontFamily={"29"}
                        alignItems={"center"} justifyContent={"center"} color={"#fff"}   >
                        <Heading>
                            {t("bgTitle")}
                        </Heading>
                        <Text >
                            {t("bgDescription")}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            
            <Box maxW={"700px"} mx="auto" height="210px"  
                >
                <Flex dir={"rtl"} direction={"column"} color={"#3c2133"} mx="auto" justifyContent={"center"} alignItems={"center"} pt={10} >
                    <Heading pb={3}>
                        {shopping.data[currentDepartment].departmentName}
                    </Heading>
                    <Text as={"p"} w={"100%"} justifyContent={"center"} pb={12} textAlign={"center"}>
                        {shopping.data[currentDepartment].departmentsDescription}
                    </Text>
                </Flex>
            </Box>

            <Box h="400px" maxW={"100vw"} >
                <Flex gap={3} justifyContent="center" alignItems={"center"}  >
                    <Box flex="1" w={"100%"} height="400px" pos="relative" opacity={"0.5"} >
                        <Image src={currentDepartment === 0 ? shopping.data[shoppingCount].img : shopping.data[currentDepartment - 1].img} layout="fill" objectFit="cover" objectPosition={"0% 20%"} />
                    </Box>
                    <Box flex="2" w={"100%"} height="400px" pos="relative"   >
                        <Box  top={"40%"} left={"-10%"} pos="absolute" zIndex={10} cursor={"pointer"} bgColor="#fff" px={6} py={6} opacity="0.5" onClick={leftClickHandle}>
                            <Image src={leftArrow} />
                        </Box>

                        <Image src={shopping.data[currentDepartment].img} layout="fill" objectFit="cover" objectPosition={"0% 20%"} />
                        <Box top={"40%"} right={"-10%"} pos="absolute" cursor={"pointer"} zIndex={10} bgColor="#fff" px={6} py={6} opacity="0.5" onClick={rightClickHandle}>
                            <Image src={rightArrow} />
                        </Box>
                    </Box>
                    <Box flex="1" w={"100%"} height="400px" pos="relative" opacity={"0.5"} >
                        <Image src={currentDepartment === shoppingCount ? shopping.data[0].img : shopping.data[currentDepartment + 1].img} layout="fill" objectFit="cover" objectPosition={"0% 20%"} />
                    </Box>
                </Flex>

            </Box>





            <Box dir="rtl" bg={"#f59429"} px={5} py={3} color="#ffff" mt={10} mx="auto" maxW={"700px"}>
                <Text fontSize={"lg"} fontWeight={"extrabold"}>
                    {t("shopIndex")}
                </Text>
            </Box>
            <Box maxW={"700px"} mx="auto" >
                <Text dir="rtl" as={"p"} fontSize={"md"} py={5}   >
                    {t("shopDescription")}

                </Text>
            </Box>
            <Box maxW={"700px"} mx="auto">

                <Accordion allowMultiple overflowX={"hidden"}>
                    {
                        shoppingData.shops.map(shop => {
                            const phoneNums = shop.phone;
                            return (
                                <AccordionItem key={shop.id}>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                {shop.name}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Flex alignItems={"center"}>
                                            <Text as="span" borderRadius={"full"} bgColor={"#f59429"} color="#fff" py="5px" px={"10px"} mr={2}> {shop.floor}</Text>
                                            {/* <Text as="span" borderRadius={"full"} bgColor={"#f59429"} color="#fff" py="5px" px={"10px"} mr={2}> {shop.floor}</Text> */}
                                            <Flex mt={"5px"}  >
                                                <Link href={shop.locationLink} isExternal >
                                                    <Box display={"inline-flex"} pr={2}><LocationSvg width="30px" /></Box>
                                                    <Box display={"inline-flex"}><LocationSvg width="30px" /><Text as={"span"} pl={2}>{phoneNums} </Text></Box>
                                                </Link>
                                            </Flex>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>)
                        })
                    }
                </Accordion>

            </Box>
        </>
    )

}
