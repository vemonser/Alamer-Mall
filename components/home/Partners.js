import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
import mcArther from "../../public/images/Mc-new-logo-s.webp";
import {
  Box,
  Flex,
  Heading,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";

import { useState } from "react";
import partener from "../../ourPartners.json";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Partners({ currentDir }) {
  const { t } = useTranslation("home");
  const [currentPartner, setCurrentPartner] = useState(0);
  const ref = useRef(null);

  const partenerData = partener.data[currentPartner];
  const partenerCount = Object.keys(partener.data).length - 1;
  const { inViewport } = useInViewport(ref);

  const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
      return shouldForwardProp(prop) || prop === "transition";
    },
  });

  return (
    <Flex
      maxW={["80vw", "80vw", "85vw"]}
      pb={"8%"}
      dir={currentDir}
      mx="auto"
      align={["start", "center", "center"]}
      justify={"space-between"}
      flexDir={["column", "row", "row"]}
    >
      <Heading
        fontFamily={"bukrabold"}
        pos={"relative"}
        color={" #3c2133"}
        _after={{
          position: "absolute",
          width: "40%",
          height: "8px",
          content: `""`,
          backgroundColor: "#fa6800",
          borderRadius: "20px",
          right: "0",
          bottom: "-20px",
        }}
      >
        {t("ourPartners")}
      </Heading>
      <Flex
        w={["100%", "100%", "60%"]}
        h={"90px"}
        pt={{ base: "30px" }}
        align={"center"}
      >
        <Flex
          w={"100%"}
          h={"100px"}
          justify={"left"}
          flexDir={["column", "row", "row"]}
          alignItems="center"
          gap={"10%"}
        >
          {partener.data.map((logo) => {
            return (
              <>
                <Box w={"20%"} as="flex" gap={10}>
                  <Box
                    display={"block"}
                    top={0}
                    as={motion.div}
                    opacity="0.5"
                    filter="grayscale(100%)"
                    transition="all 500ms ease"
                    _hover={{ filter: "grayscale(0%)" ,opacity:"1"}}
                  >
                    <a
                      target="_blank"
                      href={logo.link}
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={logo.img}
                        width={300}
                        height={160}
                        layout="responsive"
                      />
                    </a>
                  </Box>
                </Box>
              </>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
