import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter,  } from 'next/router'
import Header from '../components/layout/Header'
// import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/Footer';
import Newslatter from "../components/home/Newslatter"
import { useState,useEffect } from 'react';

function MyApp({ Component, pageProps }) {
 
  const { locale } = useRouter()

  const currentDir = locale === 'ar' ? 'rtl' : 'ltr'
 
  return (
    <>

          <ChakraProvider>
            <Header currentDir={currentDir} />
            <Component currentDir={currentDir} {...pageProps} />
            <Newslatter currentDir={currentDir} />
            <Footer currentDir={currentDir} />
          </ChakraProvider>

    </>
  )
}

export default MyApp


{/*
  <Navbar currentDir={currentDir} />
<Component currentDir={currentDir} {...pageProps} />


*/}