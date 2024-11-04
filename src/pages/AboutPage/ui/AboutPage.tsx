import {Title} from "./AboutPage.styled";
import {useTranslation} from "react-i18next";


const AboutPage = () => {

    const {t} = useTranslation("aboutUs");

    return (
        <>
            <Title>{t('О сайте')}</Title>
            <p>
                some
            </p>
        </>
    );
};
export default AboutPage;