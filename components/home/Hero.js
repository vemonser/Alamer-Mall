import Image from "next/image"
import { Box, Heading } from "@chakra-ui/react";

import heroImg from "../../public/images/hero img.jpg"
export default function Hero() {
    return (<Box w={["100%", "100%", "100%"]} h={"100vh"} pos={["relative"]} top={"0px"}>

        <Image src={heroImg} width={"1923px"} objectFit={"cover"} objectPosition={"right center"} height={"1044px"} layout="fill" />
    </Box>
    )





}
