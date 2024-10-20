import {useTranslation} from "react-i18next";
import {langData} from "../../../shared/config/langConfig/langData";

export const SwitchLang = () => {
    const { i18n} = useTranslation('about');

    const toggleSwitchLang = (e: any) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <select onChange={toggleSwitchLang}>
            {langData.map(({lang}, i) => {
                return (
                    <option
                        value={`${lang}`}
                        key={i}
                    >
                        {lang}
                    </option>
                )
            })}
        </select>
    )
        ;
};

