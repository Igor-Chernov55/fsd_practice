import {Title} from "../../AboutPage/ui/AboutPage.styled";
import {useTranslation} from "react-i18next";


const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (
        <Title>
            {t('Главная страница')}
        </Title>
    );
};

export default MainPage;