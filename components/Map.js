
import styles from "../styles/Map.module.scss";
import SvgLocationSvgrepoCom from "../public/assets/images/Logos/LocationSvgrepoCom"
import Mail142 from "../public/assets/images/Logos/Mail142"
import useTranslation from "next-translate/useTranslation";

export default function Map(props) {
    const { t } = useTranslation("common");
    return (
        <div className={styles.mapContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100vw" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" className={styles.map}></iframe>
            <div className={styles.dflexContaine} dir={props.currentDir}>
                <div className={styles.flexBox}>
                    <div className={styles.text}>
                        <h3>{t("WorkingHoursTitle")}</h3>
                        <p>{t("WorkingHoursDescription")}</p>
                    </div>
                    <div className={styles.icon}>
                        <SvgLocationSvgrepoCom width="5vw" height="5vh" />
                    </div>
                </div>
                <div className={styles.flexBox}>
                    <div className={styles.text}>
                        <h3>{t("AddresTitle")}</h3>
                        <p>{t("AddresDescription")}</p>
                    </div>
                    <div className={styles.icon}>
                        <SvgLocationSvgrepoCom width="5vw" height="5vh" />
                    </div>
                </div>
                <div className={styles.flexBox3}>
                    <div className={styles.text}>
                        <h3>{t("PhoneTitle")}</h3>
                        <p>{t("PhoneNo1")}</p>
                        <p>{t("PhoneNo2")}</p>
                    </div>
                    <div className={styles.icon}>
                        <SvgLocationSvgrepoCom width="6vw" height="5vh" />
                    </div>
                </div>
            </div>
        </div>

    )
}