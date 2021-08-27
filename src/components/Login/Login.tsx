import React, {useState} from 'react';
import {LangSwitcher} from "../langSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";


export function Login() {
    const {t} = useTranslation();
    const [login, setLogin] = useState(false);
    const handleLogin = () => setLogin(prevState => !prevState);

    return (
        <div className="login">
            {/*<i className={`login__icon bi bi-person-${login ? "check-fill" : "x-fill"}`}></i>*/}
            <span className={"login__btn"} onClick={handleLogin}>
                {login
                    ? t("header.auth.logOut")
                    : t("header.auth.logIn")
                }
            </span>
            <LangSwitcher/>
        </div>
    )
}