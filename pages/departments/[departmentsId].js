import {
  Box,
  Accordion,
  Heading,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import shoppingBg from "../../public/images/departments/departmentbg.jpg";
import useTranslation from "next-translate/useTranslation";
import LocationSvg from "../../public/images/Location";
import Rightarrow from "../../public/images/departments/NewsArrows02";
import Leftarrow from "../../public/images/departments/NewsArrows01";

export default function Department({ data }) {
  const { t } = useTranslation("shopping");
  const router = useRouter();
  const { departmentsId } = router.query;
  const [currentDepartment, setCurrentDepartments] = useState(
    data.data[Number(departmentsId) - 1]
  );

  const leftClickHandle = () => {
    if (departmentsId == 1) {
      router.push(`/departments/${9}`);
    } else {
      router.push(`/departments/${Number(departmentsId) - 1}`);
    }
  };
  const rightClickHandle = () => {
    if (departmentsId == 9) {
      router.push(`/departments/${1}`);
    } else {
      router.push(`/departments/${Number(departmentsId) + 1}`);
    }
  };

  useEffect(() => {
    setCurrentDepartments(() => data.data[Number(departmentsId) - 1]);
  }, [router.query]);
  const shoppingCount = Object.keys(data.data).length;

  if (router.asPath == "/departments/0") {
    router.replace("/departments/0");
  }
  return (
    <>
      <Flex pos={"relative"} width={"100%"} height="60vh" dir="rtl">
        <Image
          alt="dapartment image"
          src={shoppingBg}
          layout="fill"
          objectFit="cover"
          objectPosition={" top top "}
        />
        <Box>
          <Flex
            pos={"absolute"}
            dir="rtl"
            top="0"
            left="0"
            right="0"
            bottom="0"
            direction={"column"}
            mx="auto"
            zIndex={10}
            fontFamily={"29"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#fff"}
          >
            <Heading>{t("bgTitle")}</Heading>
            <Text>{t("bgDescription")}</Text>
          </Flex>
        </Box>
      </Flex>

      <Box maxW={"700px"} mx="auto" height="210px">
        <Flex
          dir={"rtl"}
          direction={"column"}
          color={"#3c2133"}
          mx="auto"
          justifyContent={"center"}
          alignItems={"center"}
          pt={10}
        >
          <Heading pb={3}>{currentDepartment.departmentName}</Heading>
          <Text
            as={"p"}
            w={"100%"}
            justifyContent={"center"}
            pb={12}
            textAlign={"center"}
          >
            {currentDepartment.departmentsDescription}
          </Text>
        </Flex>
      </Box>

      <Box h="400px" maxW={"100vw"}>
        <Flex gap={3} justifyContent="center" alignItems={"center"}>
          <Box
            flex="1"
            w={"100%"}
            height="400px"
            pos="relative"
            opacity={"0.5"}
          >
            <Image
              src={
                departmentsId == 1
                  ? data.data[8].img
                  : data.data[Number(departmentsId) - 2].img
              }
              alt="dapartment image"

              layout="fill"
              objectFit="cover"
              objectPosition={"0% 20%"}
            />
          </Box>
          <Box flex="2" w={"100%"} height="400px" pos="relative">
            <Box
              top={"40%"}
              left={"-12.5%"}
              pos="absolute"
              zIndex={10}
              cursor={"pointer"}
              bgColor="#fff"
              px={6}
              py={6}
              opacity="0.5"
              transition="all .5s ease"
              _hover={{ opacity: 1, transition: "all .5s ease" }}
              onClick={leftClickHandle}
            >
              <Leftarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                width="25px"
              />
            </Box>

            <Image
              src={currentDepartment.img}
              layout="fill"
              alt="dapartment image"

              objectFit="cover"
              objectPosition={"0% 20%"}
            />
            <Box
              top={"40%"}
              right={"-12.5%"}
              pos="absolute"
              cursor={"pointer"}
              zIndex={10}
              bgColor="#fff"
              px={6}
              py={6}
              opacity="0.5"
              onClick={rightClickHandle}
              transition="all .5s ease"
              _hover={{ opacity: 1, transition: "all .5s ease" }}
            >
              <Rightarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                width="25px"
              />
            </Box>
          </Box>
          <Box
            flex="1"
            w={"100%"}
            height="400px"
            pos="relative"
            opacity={"0.5"}
          >
            <Image
              src={
                departmentsId == shoppingCount
                  ? data.data[0].img
                  : data.data[Number(departmentsId)].img
              }
              alt="dapartment image"
              layout="fill"
              objectFit="cover"
              objectPosition={"0% 20%"}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        height={"70vh"}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <Box maxW={"700px"} mx="auto" pt={10}>
          <Accordion allowMultiple overflowX={"hidden"}>
            {currentDepartment.shops.map((shop) => {
              const phoneNums = shop.phone;
              return (
                <AccordionItem key={shop.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {shop.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex alignItems={"center"}>
                      <Text
                        as="span"
                        borderRadius={"full"}
                        bgColor={"#f59429"}
                        color="#fff"
                        py="5px"
                        px={"10px"}
                        mr={2}
                      >
                        {" "}
                        {shop.floor}
                      </Text>
                      {/* <Text as="span" borderRadius={"full"} bgColor={"#f59429"} color="#fff" py="5px" px={"10px"} mr={2}> {shop.floor}</Text> */}
                      <Flex mt={"5px"}>
                        <Link href={shop.locationLink} isExternal>
                          <Box display={"inline-flex"} pr={2}>
                            <LocationSvg width="30px" />
                          </Box>
                          <Box display={"inline-flex"}>
                            <LocationSvg width="30px" />
                            <Text as={"span"} pl={2}>
                              {phoneNums}{" "}
                            </Text>
                          </Box>
                        </Link>
                      </Flex>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://vemonser.github.io/AlamerBackend/shopping.json`
  );
  const data = await res.json();
  return { props: { data } };
}
