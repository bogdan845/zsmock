import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 1.25rem var(--gutter);
    background: ${props => props.theme.main}
`;

Wrapper.defaultProps = {
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
        <Wrapper theme={background ? {main: background} : ''}>
            {children}
        </Wrapper>
    )
}