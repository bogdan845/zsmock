import React from "react";
import {HeaderLogo} from "./components/HeanderLogo/HeaderLogo.";
import logo from "./../../assets/images/logo.png"
import {Login} from "./components/Login/Login";
import {TopNav} from "./components/Nav/Nav";
import styled from "styled-components";


const HeaderBox = styled.header`
    background-color: var(--green);
    color: #fff;
    padding: 5px 0;
    position: relative;
`;


export function Header() {
    return (
        <HeaderBox>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-2 align-self-center">
                        <HeaderLogo image={logo}/>
                    </div>
                    <div className="order-2 order-md-1 col-12 col-md-8 align-self-center">
                        <TopNav/>
                    </div>
                    <div className="order-1 order-md-2 col-6 col-md-2 align-self-center d-flex">
                        <Login/>
                    </div>
                </div>
            </div>
        </HeaderBox>
    )
}