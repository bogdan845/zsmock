import React from 'react';
import styled from "styled-components";
import {COLOR} from "../constants/colors/colors";

const TitleWrap = styled.h2`
  text-align: center;
`;

const TitleLink = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
  color: ${props => props.theme};

  &:hover {
    color: ${props => props.theme};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 100px;
    transition: .25s ease-in-out;
    background-color: ${props => props.theme};
  }

  &:hover:after {
    width: 140px;
  }
`;

TitleLink.defaultProps = {
    theme: COLOR.green
}

interface IProps {
    color?: string;
    label: string;
    link?: string;
}

export function SectionTitle({color, label, link}: IProps) {
    return (
        <TitleWrap>
            <TitleLink href={link} target="_self" theme={color}>{label}</TitleLink>
        </TitleWrap>
    )
}
