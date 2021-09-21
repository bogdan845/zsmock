import React from "react";
import domToReact from "html-react-parser/lib/dom-to-react";
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle/SectionTitle";

export const Wrapper = styled.section`
    padding: 20px
`;

export const InnerWrapper = styled.div`
    background-color: var(--light-grey);
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px 20px 30px;
    max-width: 1140px;
    border-radius: 7px;
`;

export const Img = styled.img`
    max-height: 250px;
    width: auto;
    display: block;
    margin: 20px auto 40px;
`

interface IProps {
    title?: string | ReturnType<typeof domToReact>;
    img?: string;
    content: string | ReturnType<typeof domToReact>
}

export function PageView({content, title, img}: IProps) {
    return (
        <Wrapper>
            <InnerWrapper>
                {title
                    ? <SectionTitle
                        color={"var(--text-color)"}
                        label={title}
                        textAlign={"left"}
                    />
                    : null}
                {img ? <Img src={img} alt={""}/> : null}
                {content}
            </InnerWrapper>
        </Wrapper>
    )
}

