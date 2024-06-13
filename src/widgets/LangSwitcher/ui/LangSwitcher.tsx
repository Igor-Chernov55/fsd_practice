import * as React from 'react';
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";
import {Box, Button, InputLabel, MenuItem, Select} from "@mui/material";

type LangSwitcherType = {

};
export const LangSwitcher: FC<LangSwitcherType> = ({}) => {
    const { i18n} = useTranslation()
    const [langValue, setLangValue] = useState('ru')

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangValue(lng)
    };

    return (
        <Box>
            <Select
                labelId="switch-language-label"
                id="demo-simple-select"
                value={langValue}
                label="language"
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <MenuItem value={'ru'}>Ru</MenuItem>
                <MenuItem value={'en'}>En</MenuItem>
            </Select></Box>
    );
};
