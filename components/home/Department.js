import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import data from "../../departments.json";
// import { motion, useInView, useAnimation } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export function FlexBig({ linkSrc, src, heading, text }) {
  return (
    <Link href={linkSrc}>
      <Flex
        as={motion.div}
        h={["200px", "250px", "250px"]}
        w={{ base: "100%", md: "auto", xl: "auto" }}
        pos={"relative"}
        transition="all 500ms linear"
        cursor="pointer"
        flex={{ md: "4 1 39%", xl: "4 1 39%" }}
        _hover={{ flex: ["1 1", "6 1 64%", "6 1 64%"], opacity: 1 }}
      >
        <Image src={src} layout={"fill"} objectFit={"cover"} />
        <Flex
          as={motion.div}
          pos={"absolute"}
          zIndex={5}
          justify={"center"}
          align={"center"}
          opacity={{ base: "1", md: 0, xl: 0 }}
          bottom={0}
          left={0}
          w={"100%"}
          h={{ base: "25%", md: "100%", xl: "100%" }}
          bgColor={{ base: "#fa6800dd", md: "#f8b932af", xl: "#f8b932af" }}
          transition={"all .8 ease"}
          _hover={{ opacity: 1 }}
          transitionDelay=".2s "
          flexDir={"column"}
        >
          <Heading
            fontFamily={"bukrabold"}
            color={"#fff"}
            fontSize={["md", "large", "2xl"]}
            align="center"
          >
            {heading}
          </Heading>
          <Text
            fontFamily={"bukrabold"}
            display={{ base: "none", md: "block", xl: "block" }}
            pt={5}
            lineHeight={1}
            color={"#fff"}
            w={"70%"}
            fontSize={["sm", "sm", "md"]}
            align="center"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
export function FlexSmall({ linkSrc, src, heading, text }) {
  return (
    <Link href={linkSrc}>
      <Flex
        as={motion.div}
        h={["200px", "250px", "250px"]}
        w={{ base: "100%", md: "auto", xl: "auto" }}
        pos={"relative"}
        transition="all 500ms linear"
        flex={{ md: "4 1 34%", xl: "2 1 34%" }}
        cursor="pointer"
        _hover={{ flex: ["1 1", "4 1 59%", "4 1 59%"], opacity: 1 }}
      >
        <Image src={src} layout={"fill"} objectFit={"cover"} />
        <Flex
          as={motion.div}
          pos={"absolute"}
          zIndex={5}
          justify={"center"}
          align={"center"}
          opacity={{ base: "1", md: 0, xl: 0 }}
          bottom={0}
          left={0}
          w={"100%"}
          h={{ base: "25%", md: "100%", xl: "100%" }}
          bgColor={{ base: "#fa6800dd", md: "#f8b932af", xl: "#f8b932af" }}
          transition={"all .8 ease"}
          _hover={{ opacity: 1 }}
          transitionDelay=".2s "
          flexDir={"column"}
        >
          <Heading
            fontFamily={"bukrabold"}
            color={"#fff"}
            fontSize={["md", "large", "2xl"]}
            align="center"
          >
            {heading}
          </Heading>
          <Text
            fontFamily={"bukrabold"}
            display={{ base: "none", md: "block", xl: "block" }}
            pt={5}
            lineHeight={1}
            color={"#fff"}
            fontSize={["sm", "sm", "md"]}
            w={"70%"}
            align="center"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default function Department({ currentDir }) {
  const ref = useRef(null);
  const { t } = useTranslation("home");
  const { inViewport } = useInViewport(ref);
  const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
      return shouldForwardProp(prop) || prop === "transition";
    },
  });

  const rows = [];

  for (let i = 0; i < data.data.length; i++) {
    let currentI = data.data[i];
    if (i === 0) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexSmall
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/4"}
          />
        </Link>
      );
    } else if (i === 1) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexBig
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/1"}
          ></FlexBig>
        </Link>
      );
    } else if (i === 2) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexBig
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/9"}
          />
        </Link>
      );
    } else if (i === 3) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexSmall
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/7"}
          />
        </Link>
      );
    } else if (i === 4) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexSmall
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/6"}
          />
        </Link>
      );
    } else if (i === 5) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexBig
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/3"}
          />
        </Link>
      );
    } else if (i === 5) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexBig
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/8"}
          />
        </Link>
      );
    } else if (i === 6) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexSmall
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/5"}
          />
        </Link>
      );
    } else if (i === 7) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexSmall
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/2"}
          />
        </Link>
      );
    } else if (i === 8) {
      rows.push(
        <Link href={`departments/${currentI.id}`}>
          <FlexBig
            key={i}
            src={currentI.img}
            heading={currentI.name}
            text={currentI.desc}
            linkSrc={"departments/2"}
          />
        </Link>
      );
    }
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledDiv
        key={inViewport}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        <Box maxW={["80vw", "80vw", "85vw"]} mx={"auto"} dir={currentDir}>
          <Heading
            fontFamily={"bukrabold"}
            color={"#3c2133"}
            pt={14}
            pos={"relative"}
            _after={{
              position: "absolute",
              width: ["20%", "10%"],
              height: "8px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: "0",
              bottom: "-20px",
            }}
          >
            {t("departments")}
          </Heading>
          <Text fontFamily={"bukralight"} color={"#3c2133"} py={10}>
            {t("departmentsDescription")}
          </Text>
        </Box>
        <Flex
          flexDir={["column", "row", "row"]}
          pb={10}
          gap={"15px"}
          w={"96vw"}
          h={["150vh", "max-content", "max-content"]}
          mx={"auto"}
          overflow={"hidden"}
          dir={currentDir}
          flexWrap={"wrap"}
        >
          {rows}
        </Flex>
      </StyledDiv>
    </AnimatePresence>
  );
}

//    { base: "1 1", md: "6 1 64%", xl: "6 1 64%" }  whileHover={{ flex: , transition: ".8 ease" }}
//    { base: "1 1", md: "4 1 60%", xl: "4 1 59%" }  whileHover={{ flex: , transition: ".8 ease" }}
