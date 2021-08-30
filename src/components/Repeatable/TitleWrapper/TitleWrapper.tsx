import React from "react";
import styled from "styled-components";

/*
* styled start
* */

const TitleBox = styled.div`
    padding: 1.25rem var(--gutter);
    background: ${props => props.theme.main}
`;

TitleBox.defaultProps = {
    theme: {
        main: "var(--green)"
    }
}

/*
* styled end
* */


/*
* interface start
* */

interface IProps {
    children: JSX.Element;
    background?: string;
}

/*
* interface end
* */

export function TitleWrapper({background, children}: IProps) {
    return (
        <TitleBox theme={background ? {main: background} : ''}>
            {children}
        </TitleBox>
    )
}