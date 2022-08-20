import { Flex, Button, HStack, Box,  } from '@chakra-ui/react';
 import data from '../../locales/ar/home.json';
import Image from 'next/image';
import Link from "next/link"
import Facebook from "../../public/images/Facebook"
import Twitter from "../../public/images/Twitter"
import Instagram from "../../public/images/Instagram"
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react"
import textHover from "../../public/images/departments/logoTextOnly.svg"
import { motion } from 'framer-motion';

export default function Header({ currentDir }) {


  const [isopen, setIsOpen] = useState(false)
  const toggleOpen = () => { setIsOpen(!isopen) }

  const { locales, locale, pathname, query, asPath, router } = useRouter();

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [isHoverd, setIsHoverd] = useState(false)
  const toggleHoverd = () => { setIsHoverd(!isHoverd) }


  const [isLink, setIsLink] = useState(false)
  const toggleLink = () => { setIsLink(!isLink) }


  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    setisFacebook(currentHeightBgColor ? "#3c21336b" : "#fff")
    setisTwitter(currentHeightBgColor ? "#3c21336b" : "#fff")
    setisInstagram(currentHeightBgColor ? "#3c21336b" : "#fff")
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const currentHeightBgColor = clientWindowHeight >= 280 ? true : false;
  const percent = currentDir === "rtl" ? "63%" : "33%";
  const bgChecking = currentHeightBgColor ? "#3c2133" : "#fff";
  const langCheckingAr = currentDir === 'rtl' ? "#f37625" : bgChecking;
  const langCheckingEn = currentDir === 'ltr' ? "#f37625" : bgChecking;

  const [isFacebook, setisFacebook] = useState("#fff");
  const [isTwitter, setisTwitter] = useState("#fff");
  const [isInstagram, setisInstagram] = useState("#fff");


  const hoveringLogoTxt = {
    hidden: { opacity: 0, x: 0, y: 20 },
    shown: { opacity: 1, x: 60 },
    logoMove: { x: -20 },
    logoStatic: { x: 0 }
  }


  const hamMenu = {
    color: { backgroundColor: "#fff" },
    setcolor: { backgroundColor: "#3c2133" },
    initialtop: { top: 0 },
    opentop: { rotate: "45deg" },
    initialMid: { top: "40%", opacity: 1 },
    openMid: { top: "40%", opacity: 0 },
    initialbottom: { bottom: 0 },
    openbottom: { rotate: "-45deg" }
  }

  return (
    <Box dir={currentDir} pos="fixed"
      zIndex="20"
      w="100%"
      bgColor={currentHeightBgColor ? "#fff" : "transparent"} transition={"all 500ms ease"} >
      <Flex
        maxW={"1250px"}
        mx="auto"
        h="80px"
        px="6"
        py="5"
        align="center"
        justify={"space-between"}
      >
        <Flex justify={"space-between"} gap={"5%"}   >
          <Box as={motion.div} position={"relative"} w="100%" h="80px" onMouseEnter={toggleHoverd} onMouseLeave={toggleHoverd} initial={false}
            animate={isHoverd ? "hoverd" : "notHoverd"}>
            <Box as={motion.div} pos={"relative"} top="0px" w={"80px"} left=" 0">
              <Box as={motion.div} initial={false} zIndex="10" pos={"absolute"} w={"60px"} variants={{
                notHoverd: { x: 0 },
                hoverd: { x: -40 }
              }}>
                <Image src={data.navbarImg} height={"125"} width={"90"} layout='responsive' />
              </Box>
              <Box as={motion.div} pos={"absolute"} w={"100px"} initial={false} variants={{
                notHoverd: { x: 100, opacity: 0, y: 25 },
                hoverd: { x: 70, opacity: 1, y: 25 }
              }} >
                <Image src={textHover} layout='responsive' />
              </Box>
            </Box>
          </Box>
          <Flex justify={"space-between"} display={{ base: "none", md: "none", lg: "flex", xl: 'Flex' }} >
            <HStack as={motion.nav} transition={"all 500ms ease"} color={currentHeightBgColor ? "#3c2133" : "#fff"} onMouseEnter={toggleLink}  >
              {data.navbarLinks.map((item, i) => (
                <Link key={i} href={item.route}>
                  <Button bgColor={"transparent"} pos={"relative"} _hover={{ background: "transparent" }}   >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </HStack>
          </Flex>
        </Flex>
        <Flex align={"center"} gap={5} >
          <Flex pos="relative" gap={8} justify="center" display={{ base: "none", md: "none", lg: "flex", xl: 'Flex' }}>

            <Box _after={{ position: "absolute", width: "2px", height: "20px", content: `""`, backgroundColor: "#cecece", borderRadius: "20px", right: percent, bottom: "0px" }}>
            </Box>
            <Box fontSize={"sm"} color={langCheckingAr} fontFamily={"bukrabold"}>
              <Link
                key={"ar"} href={{ pathname, query }}
                as={asPath}
                locale={"ar"}>
                AR
              </Link>
            </Box>
            <Box fontSize={"sm"} color={langCheckingEn} fontFamily={"bukrabold"}>
              <Link
                key={"en"} href={{ pathname, query }}
                as={asPath}
                locale={"en"}>
                EN
              </Link>
            </Box>
          </Flex>
          <Flex zIndex="20" gap={2} align={"center"} display={{ base: "none", md: "none", lg: "flex", xl: 'Flex' }}>
            <Link href="https://www.facebook.com" >
              <Box onMouseEnter={() => setisFacebook(() => "#fa6800")} onMouseLeave={() => setisFacebook(() => currentHeightBgColor ? "#3c21336b" : "#fff")} cursor="pointer" >
                <Facebook width={30} height={30} colorSvg={isFacebook} />
              </Box>
            </Link>
            <Link href="https://www.twitter.com">
              <Box onMouseEnter={() => setisTwitter(() => "#fa6800")} onMouseLeave={() => setisTwitter(() => currentHeightBgColor ? "#3c21336b" : "#fff")} cursor="pointer" >
                <Twitter width={30} height={30} colorSvg={isTwitter} />
              </Box>
            </Link>
            <Link href="https://www.instagram.com">
              <Box onMouseEnter={() => setisInstagram(() => "#fa6800")} onMouseLeave={() => setisInstagram(() => currentHeightBgColor ? "#3c21336b" : "#fff")} cursor="pointer" >
                <Instagram width={30} height={30} colorSvg={isInstagram} />
              </Box>
            </Link>
          </Flex>
        </Flex>
        <Box display={{ base: "block", lg: "none" }} zIndex="6">
          <Box as={motion.div} pos="relative" cursor={"pointer"} w="30px" h="15px" onClick={toggleOpen} initial={false}
            animate={isopen ? "open" : "closed"}>

            <Box as={motion.span} pos="absolute" w="30px" h="2px" bgColor={"#fff"} variants={{
              closed: { top: 0 },
              open: { rotate: "45deg", top: "50%" }
            }}
            ></Box>
            <Box as={motion.span} pos="absolute" w="30px" h="2px" bgColor={"#fff"} variants={{
              closed: { top: "46%", opacity: 1 },
              open: { opacity: 0 }
            }}     ></Box>
            <Box as={motion.span} pos="absolute" w="30px" h="2px" bgColor={"#fff"} bottom="0"
              variants={{
                closed: { bottom: 0 },
                open: { rotate: "-45deg", bottom: "40%" }
              }}  ></Box>
          </Box>
        </Box>
      </Flex >
      {
        isopen && <Flex as={motion.div} variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }, backgroundColor: "#3c2133", left: "0"

          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }, backgroundColor: "transparent",
          }
        }
        }
          animate={isopen ? "open" : "closed"} display={"flex"} gap={"5%"} top="0%" pos={"fixed"} left="-200px" h={"100vh"} w={"100vw"} zIndex={5} pt={"20%"} fontFamily={"bukrabold"} align={"center"} flexDir={"column"}>
          {data.navbarLinks.map((item, i) => (
            <Link key={i} href={item.route}>


              <Button pos={"relative"} color={"#fff"} outline="none" bgColor={"transparent"} _focus={{ outline: "none", background: "transparent", border: "none" }} _after={{ position: "absolute", width: "80%", height: "2px", content: `""`, backgroundColor: "#f37625", borderRadius: "20px", bottom: "-5px", left: "10%" }} transition="all 1s ease" transformOrigin={'left'} overflow="hidden" _hover={{ overflow: "visible", background: "transparent", border: "none" }}
              > {item.name} </Button>
            </Link>
          ))}
          <Box fontSize={"sm"} color={currentDir === 'rtl' ? "#f37625" : "#fff"} fontFamily={"bukrabold"}>
            <Link
              key={"ar"} href={{ pathname, query }}
              as={asPath}
              locale={"ar"}>
              AR
            </Link>
          </Box>
          <Box fontSize={"sm"} color={currentDir === 'ltr' ? "#f37625" : "#fff"} fontFamily={"bukrabold"}>
            <Link
              key={"en"} href={{ pathname, query }}
              as={asPath}
              locale={"en"}>
              EN
            </Link>
          </Box>
        </Flex>
      }
    </Box >

  )
}
