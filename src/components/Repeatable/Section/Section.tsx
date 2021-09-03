import React, {ReactElement} from "react";
import styled from "styled-components";


const PageSection = styled.section`
    background: ${props => props.theme.main};
    padding: ${props => props.theme.padding};
`;

PageSection.defaultProps = {
    theme: {
        main: "transparent",
        padding: "0",
    }
}


interface IProps {
    color?: string;
    padding?: string
    children: JSX.Element | JSX.Element[] | ReactElement<any> | String
}


export function Section({color, padding, children}: IProps) {
    return (
        <PageSection theme={{
            main: color ? color : "",
            padding: padding ? padding : ""
        }}>
            {children}
        </PageSection>
    )
}