import React from 'react';
import styled from "styled-components";
import domToReact from "html-react-parser/lib/dom-to-react";


const Title = styled.h2`
  text-align: center;
  padding: 1.25rem 0;
  color: ${props => props.theme.main};
`;


Title.defaultProps = {
    theme: {
        main: 'var(--green)'
    }
}


interface IProps {
    color?: string
    label: string | ReturnType<typeof domToReact>;
}


export function SectionTitle({color, label}: IProps) {
    return (
        <Title theme={color ? {main: color} : ""}>{label}</Title>
    )
}
