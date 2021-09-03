import React from "react";
import htmlReactParser from "html-react-parser";
import styled from "styled-components";
import {Page, PageInner} from "../../PageView/PageView";


const PostTitle = styled.h2`
    padding: 0 0 1.25rem;
`;

const PostDate = styled.span`
    font-size: 0.875rem;
    display: inline-block;
    margin-bottom: 1.25rem; 
    font-style: italic;
`;

const PostImg = styled.img`
    max-height: 400px;
    width: auto;
    display: block;
    margin: 0 auto 20px;
`;


interface IProps {
    title: string;
    date: string;
    img: string;
    content: string;
}


export function SinglePostView({title, date, img, content}: IProps) {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-12">
                    <Page>
                        <PageInner>
                            <PostTitle>{title}</PostTitle>
                            <PostDate>Від: {date}</PostDate>
                            <PostImg src={img} alt=""/>
                            {content ? htmlReactParser(content) : ''}
                        </PageInner>
                    </Page>
                </div>
            </div>
        </div>
    )
}