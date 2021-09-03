import React from "react";
import domToReact from "html-react-parser/lib/dom-to-react";
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle/SectionTitle";

export const Page = styled.section`
    padding: 20px
`;

export const PageInner = styled.div`
    background-color: var(--light-grey);
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px 20px 30px;
    max-width: 1140px;
    border-radius: 7px;
`;

export const PageImg = styled.img`
    max-height: 400px;
    width: auto;
    display: block;
    margin: 0 auto;
`

interface IProps {
    title?: string | ReturnType<typeof domToReact>;
    img?: string;
    content: string | ReturnType<typeof domToReact>
}

export function PageView({content, title, img}: IProps) {
    return (
        <Page>
            <PageInner>
                {title ? <SectionTitle color={"var(--text-color)"} label={title}/> : null}
                {img ? <PageImg src={img} alt={""}/> : null}
                {content}
            </PageInner>
        </Page>
    )
}