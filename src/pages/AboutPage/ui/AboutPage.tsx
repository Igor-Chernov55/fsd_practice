import {Title} from "./AboutPage.styled.ts";
import {useTranslation} from "react-i18next";


const AboutPage = () => {

    const {t} = useTranslation("aboutUs");

    return (
       <Title>{t('О сайте')}</Title>
    );
};
export default AboutPage;