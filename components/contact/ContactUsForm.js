import { Box, Button, Heading, Textarea, Text, Flex, Input } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import pattern from "../../public/images/aboutus/centerpattern.png"
export default function ContactUsForm({ currentDir }) {
    let [value, setValue] = useState('')
    const { t } = useTranslation("home");

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    return (
        <Box w="100%" h={"550px"} pos="relative" top={"-120px"} mb={"-120px"}>
            <Image src={pattern} width={5680} height={2998} layout="fill" />

            <Box maxW={"70vw"} dir={currentDir} mx="auto" mb={"-120px"} pt={"10%"}>
                <Heading color="#3c2133" fontSize={"2xl"} fontFamily={"bukrabold"} py={6}>{t("leaveMessage")}</Heading>
                <Formik
                    initialValues={{
                        name: '',
                        title: '',
                        email: '',
                        message: ''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Flex gap={3}>
                            <Flex  flex="1">
                                <Text htmlFor="name"> </Text>
                                <Input border={"1px solid #cecece"}
                                    id="name" size='sm' borderRadius="md"
                                    name="name" placeholder={t("name")} />
                            </Flex>
                            <Flex  flex="1">
                                <Text htmlFor="email"></Text>
                                <Input
                                    border={"1px solid #cecece"}
                                    borderRadius="md"
                                    id="email"
                                    name="email"
                                    placeholder={t("email")}
                                    type="email" size='sm'
                                />
                            </Flex>
                            <Flex  flex="1">
                                <Text htmlFor="title"> </Text>
                                <Input border={"1px solid #cecece"} borderRadius="md"
                                    id="title" name="title" placeholder={t("subject")} size='sm'
                                />
                            </Flex>
                        </Flex>
                        <Box py={3} >
                            <Textarea borderRadius="md"
                                value={value}
                                onChange={handleInputChange}
                                placeholder={t("message")}
                                rows="8"
                                size='sm'
                            />
                        </Box>
                        <Flex justify={"flex-end"} >
                        <Button borderRadius="md" bgColor="#fa6800" color="#fff"  type="submit">{t("sendMessage")}</Button>
                        </Flex>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}