import { Box, Container, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "../locales/ar/home.json";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0) }
   50% { transform: scale(2) rotate(360deg) }
   100% { transform: scale(1) rotate(0)  }
`;

const animation = `${animationKeyframes} 2s ease infinite`;

export default function LoadingScreen() {
  return (
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as={motion.div}
        animation={animation}
        padding="2"
        width="12"
        height="12"
        display="flex"
      >
        <Image src={data.navbarImg} layout="fill" />
      </Box>
    </Container>
  );
}
