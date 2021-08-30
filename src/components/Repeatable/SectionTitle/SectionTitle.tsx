import React from 'react';
import styled from "styled-components";

const TitleWrap = styled.h2`
  text-align: center;
`;

const TitleLink = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-bottom: 1.25rem;
  color: ${props => props.theme.main};

  &:hover {
    color: ${props => props.theme.main};
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
    background-color: ${props => props.theme.main};
  }

  &:hover:after {
    width: 140px;
  }
 `;

TitleLink.defaultProps = {
    theme: {
        main: 'var(--green)'
    }
}

interface IProps {
    color?: string;
    label: string;
    link?: string;
}

export function SectionTitle({color, label, link}: IProps) {
    return (
        <TitleWrap>
            <TitleLink
                href={link}
                target="_self"
                theme={color ? {main: color} : color}
            >
                {label}
            </TitleLink>
        </TitleWrap>
    )
}
