import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import LocationSvg from "../../public/images/Location";
import data from "../../locales/ar/home.json";
export default function IconBoxes({ currentDir }) {
  const { t } = useTranslation("home");
  const [workingHours, setWorkingHours] = useState(false);
  const [location, setLocation] = useState(false);
  const [phone, setPhone] = useState(false);
  const [clicked, setClicked] = useState();

  function toggle() {
    setWorkingHours(() => !workingHours);
  }
  const targetData = data.cards;
  return (
    <Box dir={currentDir}>
      <Flex
        color="#3c2133"
        fontFamily={"bukrabold"}
        align="center"
        justify="center"
        gap={5}
        pos="relative"
        top="-30px"
        w={"70vw"}
        mx="auto"
      >
        {data.cards.map((item, idx) => {
          return (
            <Flex
              key={item.id}
              boxShadow="md"
              borderRadius={"lg"}
              py={5}
              zIndex={2}
              px={20}
              gap={3}
              bg="#fff"
              flexDir={"column"}
              align="center"
              justify="center"
              flex="1"
              cursor="pointer"
            >
              <Flex
                flexDir={"column"}
                align="center"
                justify="center"
                name={item.id}
                onClick={() => setClicked(item.id)}
              >
                {clicked !== item.id ? (
                  <>
                    <LocationSvg width="50px" height="50px" />
                    <Heading fontSize={"large"} fontFamily={"bukrabold"}>
                      {item.title}
                    </Heading>
                  </>
                ) : (
                  <>
                    <Text>{item.desc}</Text>
                  </>
                )}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
