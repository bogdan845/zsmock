import React from "react";
import htmlReactParser from "html-react-parser";
import styled from "styled-components";


/*
* styled start
* */
const PostBox = styled.article`
    padding: 50px 0;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.125rem;
`;

const PostTitle = styled.h2`
    padding: 50px 0;
    max-width: 600px;
    margin: 0 auto;
`;

const PostDate = styled.span`
    font-size: 0.875rem;
`;

const PostImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 40px auto 20px;
`;

/*
* styled end
* */


/*
* interface start
* */

interface IProps {
    title: string;
    date: string;
    img: string;
    content: string;
}

/*
* interface end
* */

export function SinglePostView({title, date, img, content}: IProps) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <PostBox>
                        <PostTitle>{title}</PostTitle>
                        <PostDate>{date}</PostDate>
                        <PostImg src={img} alt=""/>
                        {content ? htmlReactParser(content) : ''}
                    </PostBox>
                </div>
            </div>
        </div>
    )
}