import React from 'react';
import styled from "styled-components";
import domToReact from "html-react-parser/lib/dom-to-react";


const Title = styled.h2`
  padding: 1.25rem 0;
  color: ${props => props.theme.main};
  text-align: ${props => props.theme.textAlign}
`;


Title.defaultProps = {
    theme: {
        main: 'var(--green)',
        textAlign: "center"
    }
}


interface IProps {
    color?: string;
    textAlign?: string;
    label: string | ReturnType<typeof domToReact>;
}


export function SectionTitle({color, label, textAlign}: IProps) {
    return (
        <Title theme={{
            color: color || "",
            textAlign: textAlign || ""
        }}>
            {label}
        </Title>
    )
}
