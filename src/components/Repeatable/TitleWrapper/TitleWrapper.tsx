import React from "react";
import styled from "styled-components";


const TitleBox = styled.div`
    padding: 1.25rem var(--gutter);
    background: ${props => props.theme.main}
`;

TitleBox.defaultProps = {
    theme: {
        main: "var(--green)"
    }
}


interface IProps {
    children: JSX.Element;
    background?: string;
}


export function TitleWrapper({background, children}: IProps) {
    return (
        <TitleBox theme={background ? {main: background} : ''}>
            {children}
        </TitleBox>
    )
}