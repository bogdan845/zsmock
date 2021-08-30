import React from "react";
import htmlReactParser from "html-react-parser"
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa"


/*
* styled start
* */

const PostPreviewBox = styled.article`
     width: 100%;
     max-width: 350px;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     flex: 1;
     background-color: #fff;
`

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
    width: 100%;
    max-height: 250px;
    object-fit: contain;
`;

const Content = styled.div`
    padding: 20px 20px 20px;
    color: var(--grey);
`;


const TitleWrapper = styled.h5`
    margin-bottom: 25px;
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
    margin-bottom: 20px;
    font-size: 0.875rem;
    font-style: italic;
`;

/*
* styled end
* */

/*
* interface start
* */

interface IProps {
    img: string;
    label: string;
    link: string;
    shortDescription: string;
    url: string;
    date?: string;
};

/*
* interface end
* */

export function PostPreview({img, label, link, shortDescription, url, date}: IProps) {
    return (
        <div className="col-12 col-md-4 d-flex">
            <PostPreviewBox>
                <ImgLink to={url + "/" + link}>
                    <Img src={img} alt=""/>
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
        </div>
    )
}