import React from 'react';

interface IProps {
    image: string
}

export function HeaderLogo({image}: IProps) {
    return (
        <a className="logo">
            <img src={`${image}`} alt="site-logo"/>
        </a>
    )
}