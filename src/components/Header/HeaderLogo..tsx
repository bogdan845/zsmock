import React from 'react';
import {Link} from "react-router-dom";
import {APP_URLS} from "../../api/constants/urls";
import styled from "styled-components";

/*
* styled start
* */

const HeaderLogoImg = styled.img`
    width: auto;
    max-height: 150px;
`;

/*
* styled end
* */


/*
* interface start
* */

interface IProps {
    image: string
}

/*
*interface end
* */

export function HeaderLogo({image}: IProps) {
    return (
        <Link to={APP_URLS.pages.homeUrl}>
            <HeaderLogoImg src={image} alt="site-logo"/>
        </Link>
    )
}