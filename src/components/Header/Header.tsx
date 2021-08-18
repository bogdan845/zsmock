import React from "react";
import {HeaderLogo} from "./HeaderLogo.";
import logo from "./../../assets/images/logo.png"
import {Navigation} from "./Navigation/Navigation";
import {Login} from "../Login/Login";


export function Header() {
    return (
        <header className="header">
            <div className="container
            ">
                <div className="row">
                    <div className="col-2">
                        <HeaderLogo image={logo}/>
                    </div>
                    <div className="col-12 col-md-8 align-self-center">
                        <Navigation/>
                    </div>

                    <div className="col-12 col-md-2 align-self-center">
                        <Login/>
                    </div>
                </div>
            </div>
        </header>
    )
}