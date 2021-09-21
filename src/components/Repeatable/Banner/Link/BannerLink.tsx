import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


const LinkBanner = styled(Link)`
  text-decoration: none;
  outline: none;
  border-radius: 5px;
  padding: 8px 20px;
  transition: .25s ease-in-out;
  font-size: 1.25rem;
  display: inline-block;
  border: 2px solid var(--green);
  color: var(--yellow);
  background: var(--green);
    
  &:hover {
    background-color: transparent;
  }

  &:hover {
    background-color: transparent;
    color: var(--green)

  }
`;


interface IProps {
    label: string;
    link: string
}


export function BannerLink({label, link}: IProps) {
    return (
        <LinkBanner to={link}>{label}</LinkBanner>
    )
}