import ContactUsForm from "../../components/contact/contactUsForm";
import ImgOverLay from "../../components/contact/ImgOverLay";
import Map from "../../components/contact/Map";
import { useRouter } from "next/router";
import IconBoxes from "../../components/contact/IconBoxes";
import IconBoxes1 from "../../components/contact/IconBoxes1";


export default function Contact() {
    const { locale } = useRouter()
    const currentDir = locale === 'ar' ? 'rtl' : 'ltr'

    return (
        <>
            <ImgOverLay />
            <Map />
            <IconBoxes1 currentDir={currentDir}/>
            {/* <IconBoxes currentDir={currentDir}/> */}
            <ContactUsForm currentDir={currentDir} />

        </>
    )
}