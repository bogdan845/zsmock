import React from "react";
import htmlReactParser from "html-react-parser"
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa"

export enum Template {
    inline = "inline",
    column = "column"
}

const PostPreviewBox = styled.article`
     width: 100%;
     margin: 0 auto;
     display: flex;
     background-color: #fff;
     flex: 1;
     max-width: ${props => props.theme.template ? "1000px" : "350px"};
     flex-direction ${props => props.theme.template ? "row" : "column"};
`;

const IconWrapper = styled.span`
    z-index: 10;
    color: #fff;
    font-size: 40px;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .5s ease-in-out;
`;

const ImgLink = styled(Link)`
    display: inline-block;
    position: relative;
     
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: .25s ease-in-out;
    }

    &:hover {
        &:after {
            height: 100%;
        }
            
        ${IconWrapper} {
            opacity: 1
        }
    }
`;

const Img = styled.img`
    width: ${props => props.theme.template ? "250px" : "100%"};
    height: ${props => props.theme.template ? "100%" : "200px"};
    object-fit: cover;
`;

const Content = styled.div`
    padding: 20px 20px 20px;
    color: var(--grey);
`;

const TitleWrapper = styled.h5`
    margin-bottom: 0.938rem;
`

const TitleLink = styled(Link)`
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    transition: .25s ease-in-out;

        &:after {
            content: "";
            position: absolute;
            right: 0;
            bottom: -10px;
            height: 2px;
            width: 0;
            background-color: var(--green);
            transition: .5s ease-in-out;
        }

        &:hover {
            color: var(--green);

            &:after {
                right: 50%;
                width: 50%;
            }
        }
    }
`;

const PostDate = styled.span`
    display: inline-block;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-style: italic;
`;

PostPreview.defaultProps = {
    theme: {
        template: "default"
    }
}


interface IProps {
    img: string;
    label: string;
    link: string;
    shortDescription: string;
    url: string;
    date?: string;
    template?: Template.inline;
};


export function PostPreview({img, label, link, shortDescription, url, date, template}: IProps) {
    return (
        <PostPreviewBox theme={template ? {template} : null}>
            <ImgLink to={url + "/" + link}>
                <Img theme={template ? {template} : null} src={img} alt=""/>
                <IconWrapper>
                    <FaLongArrowAltRight style={{color: "inherit", fontSize: "inherit"}}/>
                </IconWrapper>
            </ImgLink>
            <Content>
                <TitleWrapper>
                    <TitleLink to={url + "/" + link}>{label}</TitleLink>
                </TitleWrapper>
                {date ? <PostDate>Від: {date}</PostDate> : null}
                {htmlReactParser(shortDescription)}
            </Content>
        </PostPreviewBox>
    )
}