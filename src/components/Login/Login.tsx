import React, {useState} from 'react';
import {LangSwitcher} from "../langSwitcher/LangSwitcher";


export function Login() {
    const [login, setLogin] = useState(false);
    const handleLogin = () => setLogin(prevState => !prevState);

    return (
        <div className="login">
            <i className={`login__icon bi bi-person-${login ? "check-fill" : "x-fill"}`}></i>
            <span className={"login__btn"} onClick={handleLogin}>{login ? "log out" : "log in"}</span>
            <LangSwitcher/>
        </div>
    )
}