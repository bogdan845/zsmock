import React from "react";
import htmlReactParser from "html-react-parser";
// import styled from "styled-components";
import styled from 'styled-components/macro'
import {Wrapper, InnerWrapper} from "../../PageView/PageView";


const Title = styled.h2`
    padding: 0 0 1.25rem;
`;

const Date = styled.span`
    font-size: 0.875rem;
    display: inline-block;
    margin-bottom: 1.25rem; 
    font-style: italic;
`;

const Img = styled.img`
    max-height: 400px;
    max-width: 100%;
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
                    <Wrapper>
                        <InnerWrapper>
                            <Title>{title}</Title>
                            <Date>Від: {date}</Date>
                            <Img src={img} alt=""/>
                            {content ? htmlReactParser(content) : ''}
                        </InnerWrapper>
                    </Wrapper>
                </div>
            </div>
        </div>
    )
}