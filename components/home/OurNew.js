import useTranslation from "next-translate/useTranslation";
import data from "../../news.json";
import Image from "next/image";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Rightarrow from "../../public/images/departments/NewsArrows02";
import Leftarrow from "../../public/images/departments/NewsArrows01";
export default function OurNew({ currentDir }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1 },
  });

  const { t } = useTranslation("home");

  // const [currenNew, setCurrenNew] = useState(0);

  // const newData = data.data[currenNew];
  // const newCount = Object.keys(data.data).length - 1;

  //   const leftClickHandle = () => {
  //     if (currenNew === 0) {
  //       setCurrenNew(newCount);
  //     } else {
  //       setCurrenNew(currenNew - 1);
  //     }
  //   };
  //   const rightClickHandle = () => {
  //     if (currenNew === newCount) {
  //       setCurrenNew(0);
  //     } else {
  //       setCurrenNew(currenNew + 1);
  //     }
  //   };
  //   const moreThanThree = (() => {
  //     if (newCount > 2) {
  //       return (
  //         <>
  //           <Box
  //             top={"150%"}
  //             left={"-10%"}
  //             pos="absolute"
  //             zIndex={10}
  //             cursor={"pointer"}
  //             bgColor="#fff"
  //             px={6}
  //             py={6}
  //             opacity="0.5"
  //             onClick={leftClickHandle}
  //           >
  //             <Image src={leftArrow} />
  //           </Box>
  //           <Box
  //             top={"150%"}
  //             right={"-10%"}
  //             pos="absolute"
  //             cursor={"pointer"}
  //             zIndex={10}
  //             bgColor="#fff"
  //             px={6}
  //             py={6}
  //             opacity="0.5"
  //             onClick={rightClickHandle}
  //           >
  //             <Image src={rightArrow} />
  //           </Box>
  //         </>
  //       );
  //     } else {
  //       return <></>;
  //     }
  //   })();

  return (
    <Box bgColor={" #422639"} py={2} pb={20}>
      <Box pos={"relative"} maxW={"85vw"} mx={"auto"} dir={currentDir} py={5}>
        <Heading
          pos={"relative"}
          color={"#fff"}
          fontFamily={"bukrabold"}
          _after={{
            position: "absolute",
            width: "40px",
            height: "5px",
            content: `""`,
            backgroundColor: "#fa6800",
            borderRadius: "20px",
            right: "0",
            bottom: "-20px",
          }}
        >
          {t("ourNew")}
        </Heading>
        <Text py={8} color={"#fff"} fontSize={"sm"}>
          {t("ourNewDescription")}
        </Text>
      </Box>
      <Box pos={"relative"}>
        <Box
          ref={sliderRef}
          className="keen-slider"
          maxW={"85vw"}
          mx="auto"
          dir={currentDir}
        >
          {data.data.map((news) => {
            return (
              <Box pos={"relative"}  key={news.id}>
                <Box 
                
                  className={`keen-slider__slide number-slide${news.id}`}
                  pt={"20px"}
                >
                  <Box
                    display={"block"}
                    width={"100%"}
                    borderRadius="15px"
                    overflow={"hidden"}
                  >
                    <Image
                    alt="our new image"
                      src={news.img}
                      width={"4031"}
                      height={"3024"}
                      layout={"responsive"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Box color={"#fff"} pos="relative">
                    <Heading fontSize={"x-large"} py={6}>
                      {news.title}
                    </Heading>
                    <Text fontSize={"smaller"} textAlign="justify">
                      {news.desc}
                    </Text>
                  </Box>
                  <Text
                    pos={"absolute"}
                    align={"left"}
                    top={"-0px"}
                    borderRadius={"full"}
                    zIndex={"5"}
                    bgColor={"#f59329"}
                    py={3}
                    px={5}
                    left={"20px"}
                    color={"#fff"}
                    fontSize={"sm"}
                    w={"120px"}
                    lineHeight={1}
                  >
                    {news.date}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>

        {loaded && instanceRef.current && (
          <Flex>
            <Box
              pos={"absolute"}
              top="30%"
              right={"3%"}
              cursor="pointer"
              transition="all .5s ease"
              opacity={"0.5"}
              _hover={{ opacity: 1, transition: "all .5s ease" }}
            >
              <Rightarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                width="25px"
              />
            </Box>
            <Box
              pos={"absolute"}
              top="30%"
              left={"3%"}
              cursor="pointer"
              transition="all .5s ease"
              opacity={"0.5"}
              _hover={{ opacity: 1, transition: "all .5s ease" }}
            >
              <Leftarrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                width="25px"
              />
            </Box>
          </Flex>
        )}
      </Box>

      {/* <Flex
        maxW={"80vw"}
        pos={"relative"}
        mx={"auto"}
        align={"start"}
        dir={currentDir}
        gap={6}
        h={"500px"}
        overflowX={"hidden"}
      >
        {newCount > 2
          ? data.data.map((news) => {
              return (
                <>
                  <Flex w={"400px"} mx={"auto"}>
                    <Flex
                      flexDir={"column"}
                      key={news.id}
                      w={"350px"}
                      flexBasis={"100%"}
                      mb={12}
                    >
                      <Box
                        pos={"relative"}
                        top={"20px"}
                        overflow={"visible"}
                        h={"450px"}
                      >
                        <Box
                          pos={"relative"}
                          width={"100%"}
                          h={"200px"}
                          borderRadius={"10px"}
                        >
                          <Image
                            src={news.img}
                            width={"4031"}
                            height={"3024"}
                            layout={"fill"}
                            objectFit={"cover"}
                          />
                        </Box>
                        <Heading
                          color={"#fff"}
                          fontFamily={"bukrabold"}
                          fontSize={"lg"}
                          w={"50%"}
                          py={5}
                        >
                          {news.title}
                        </Heading>
                        <Text
                          color={"#fff"}
                          fontSize={"sm"}
                          w={"90%"}
                          lineHeight={1}
                        >
                          {news.desc}
                        </Text>
                        <Text
                          pos={"absolute"}
                          align={"left"}
                          top={"-20px"}
                          borderRadius={"full"}
                          zIndex={"5"}
                          bgColor={"#f8b932"}
                          py={3}
                          px={5}
                          left={"20px"}
                          color={"#fff"}
                          fontSize={"sm"}
                          w={"120px"}
                          lineHeight={1}
                        >
                          {news.date}
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </>
              );
            })
          : data.data.map((news) => {
              return (
                <>
                  <Flex maxW={"80vw"}>
                    <Flex flexDir={"column"} key={news.id} h={"500px"}>
                      <Box pos={"relative"}>
                        <Box
                          top={"20px"}
                          h={"200px"}
                          pos={"relative"}
                          width={"100%"}
                          borderRadius={"10px"}
                          overflow={"hidden"}
                        >
                          <Image
                            src={news.img}
                            width={"4031"}
                            height={"3024"}
                            layout={"fill"}
                            objectFit={"cover"}
                          />
                        </Box>
                        <Heading
                          color={"#fff"}
                          fontFamily={"bukrabold"}
                          fontSize={"lg"}
                          w={"50%"}
                          pt={10}
                          pb={5}
                        >
                          {news.title}
                        </Heading>
                        <Text
                          color={"#fff"}
                          fontSize={"sm"}
                          w={"90%"}
                          lineHeight={1}
                        >
                          {news.desc}
                        </Text>
                        <Text
                          pos={"absolute"}
                          align={"left"}
                          top={"-0px"}
                          borderRadius={"full"}
                          zIndex={"5"}
                          bgColor={"#f8b932"}
                          py={3}
                          px={5}
                          left={"20px"}
                          color={"#fff"}
                          fontSize={"sm"}
                          w={"120px"}
                          lineHeight={1}
                        >
                          {news.date}
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </>
              );
            })}
      </Flex> */}
    </Box>
  );
}

{
  /*      <div className={styles.background}>     
        <div className={styles.MaxWidth}  dir={props.currentDir}>
                <h1 className={styles.sectionTitle}>{t("ourNew")}</h1>
                <span className={styles.sectionDescription}>{t("ourNewDescription")}</span>
            <div className={styles.dflex}>
                {data && data.map((card) => {
                     return (
                        < div className={styles.CardContainer} key={card.id}>
                                < div className={styles.imageContainer}>
                                    <Image src={`${card.CardImage}`} className={styles.img} layout={"fill"} objectFit={"cover"}/>
                                    <span className={styles.date}>{card.CardDate}</span>
                                </div>
                                <div className={styles.cardDescription}>
                                    <h2>{card.CardTitle}</h2>
                                    <p>{card.CardDescriptionP1}</p>
                                    <p>{card.CardDescriptionP2}</p>
                                </div>
                        </div>
                    )
                })}
            </div >
                </div>
        </div >*/
}
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
