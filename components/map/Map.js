import Image from 'next/image'

import mapFloor0 from "../../public/images/Al Amer Mall - Merch Mix - 220411-1-01.jpg"

import useTranslation from "next-translate/useTranslation";
import {
    Box, Button, Flex, Heading, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

 import { useState } from 'react';

import data from "../../locales/ar/home.json"

export default function Map({ currentDir }) {
    const [currentMap, setCurrentMap] = useState(mapFloor0);
    const { t } = useTranslation("home");

    // const ={ }

    return (
        <>
            <Box w={"90vw"} mx="auto" p={8} pos="relative"  >
                <Flex flexDir={"column"} borderRadius="30px" overflow={"hidden"} zIndex="20" boxShadow='lg' >
                    <Box w={"60%"} display="block" >
                        <Image src={currentMap} layout="responsive" />
                    </Box>
                </Flex>
                <Box pos="absolute" right={"10%"} top={10}>
                    <Heading as={"h3"} dir="rtl" color="#fa6800" pb={2} fontSize="lg">{data.mapkeyTitle}</Heading>
                    <Flex flexDir={"column"} bg="#fa6800" p={"5px 5px 20px 5px"} borderRadius="5px" fontSize="smaller">
                        {data.colorsKey.map(item => {
                            return (
                                <Flex align={"center"} justify={"center"} dir={currentDir} key={item.id} >
                                    <Box as='p' borderRadius="full" w="50px" pr={2} color="#fff" fontFamily={"bukrabold"}>
                                        {item.floor}
                                    </Box>
                                    <Box as="p" bg={"#fff"} py={1} px={6}  >
                                        {item.storeName}
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Box>
                <Box pos="absolute" right={"10%"} bottom={10}>
                    <Heading as={"h3"} dir="rtl" color="#fa6800" pb={2} fontSize="lg">{data.colorskeyTitle}</Heading>
                    <Flex flexDir={"column"} bg="#fa6800" p={"5px 5px 20px 5px"} borderRadius="5px" fontSize="smaller">
                        {data.mapKeyDesc.map(item => {
                            return (
                                <Flex align={"center"} dir={currentDir} key={item.id}>

                                    <Box as='p' bg={item.color} w={4} h={4} borderRadius="full" mx={4}>

                                    </Box>
                                    <Box as="p" bg={"#fff"} py={1} px={6}>
                                        {item.colorDesc}
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Box>
            </Box>
            <Flex w={"80vw"} mx="auto" gap={"10px"} pb={40}>
                <Button flex="1" boxShadow='lg' bg={"#fff"} onClick={() => setCurrentMap(mapFloor0)}>{t("f0")}</Button>
                <Button flex="1" boxShadow='lg' bg={"#fff"} onClick={() => setCurrentMap(mapFloor1)}>{t("f1")}</Button>
                <Button flex="1" boxShadow='lg' bg={"#fff"} onClick={() => setCurrentMap(mapFloor2)}>{t("f2")}</Button>
                <Button flex="1" boxShadow='lg' bg={"#fff"} onClick={() => setCurrentMap(mapFloor3)}>{t("f3")}</Button>
            </ Flex>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </>)
}