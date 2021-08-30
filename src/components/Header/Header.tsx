import React from "react";
import {HeaderLogo} from "./HeaderLogo.";
import logo from "./../../assets/images/logo.png"
import {Login} from "./Login/Login";
import {TopNav} from "./Nav/Nav";
import styled from "styled-components";


/*
* styled start
* */

const HeaderBox = styled.header`
    background-color: var(--green);
    color: #fff;
    padding: 5px 0;
    position: relative;
`;

/*
* styled end
* */


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