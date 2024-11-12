import {useTranslation} from "react-i18next";
import {BlockNotFound} from "./NotFoundPage.styled";

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <BlockNotFound>
            <p>asr</p>
            {t('Страница не найдена')}
        </BlockNotFound>
    );
};
