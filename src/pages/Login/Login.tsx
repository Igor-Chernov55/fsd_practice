import React, {useEffect} from 'react';
import {toast} from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import {useLocation, useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {CheckAuthBlock, CheckAuthContainer} from "./Login.Styled";


const Login = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const checkCode = new URLSearchParams(window.location.search).get('code');

    return (
        <CheckAuthContainer>
            <CheckAuthBlock>
                <Typography variant="h2">Идет авторизация</Typography>
                <CircularProgress disableShrink size={64} color={'primary'}/>
            </CheckAuthBlock>
        </CheckAuthContainer>
    );
};

export default Login;
