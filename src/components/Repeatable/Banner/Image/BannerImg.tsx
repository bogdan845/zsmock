import React from "react";
import {SectionTitleLink} from "../../SectionTitleLink/SectionTitleLink";
import styled from "styled-components";


const ImgWrapper = styled.div`
    position: relative;
    text-align: center;
 `;


const ImgTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px var(--gutter);
    background-color: var(--green);
    //background-color: rgba(34, 137, 45, 1);
    //background: rgb(255, 255, 255);
    //background: linear-gradient(0deg, rgba(34, 137, 45, 0.1) 0%, rgba(34, 137, 45, 1) 100%);
    
    &:after {
      bottom: 20px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;

    &.contain {
      object-fit: contain;
      height: 435px;
    }

    &.cover {
      object-fit: cover;
      object-position: center center;
      max-height: 615px;
      min-height: 435px;
  }
`


export enum ImgSize {
    contain = "contain",
    cover = "cover",
}


interface IProps {
    img: string;
    labelLink?: string;
    label?: string;
    labelColor?: string
    imgSize?: ImgSize.contain | ImgSize.cover
}


export function BannerImg(props: IProps) {
    return (
        <ImgWrapper>
            {props.label
                ? <ImgTitle>
                    <SectionTitleLink
                        label={props.label}
                        link={props.labelLink}
                        color={props.labelColor}
                    />
                </ImgTitle>
                : null}
            <Img
                className={`${props.imgSize ? props.imgSize : ImgSize.contain}`}
                src={props.img}
                alt=""
            />
        </ImgWrapper>
    )
}