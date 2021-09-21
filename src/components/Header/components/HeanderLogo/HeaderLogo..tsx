import React from 'react';
import {Link} from "react-router-dom";
import {PAGES_URL} from "../../../../utils/constants/appNav/pages/pages";
import styled from "styled-components";


const HeaderLogoImg = styled.img`
    width: auto;
    max-height: 150px;
`;


interface IProps {
    image: string
}


export function HeaderLogo({image}: IProps) {
    return (
        <Link to={PAGES_URL.home}>
            <HeaderLogoImg src={image} alt="site-logo"/>
        </Link>
    )
}