import React, {useState} from 'react';
import {LangSwitcher} from "../../langSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";
import styled from "styled-components";


/*
* styled start
* */

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
`;

const LoginBtn = styled.button`
    background: transparent;
    margin-top: 5px;
    display: inline-block;
    border: 2px solid #fff;
    padding: 0 10px;
    color: var(--yellow);
    border-radius: 2px;
    cursor: pointer;
    transition: .25s ease-in-out;
    
    &:hover {
        color: #fff;
        border-color: var(--yellow);
    }
`;

/*
* styled end
* */


export function Login() {
    const {t} = useTranslation();
    const [login, setLogin] = useState(false);
    const handleLogin = () => setLogin(prevState => !prevState);

    return (
        <LoginBox>
            <LoginBtn onClick={handleLogin}>
                {login
                    ? t("header.auth.logOut")
                    : t("header.auth.logIn")
                }
            </LoginBtn>
            <LangSwitcher/>
        </LoginBox>
    )
}