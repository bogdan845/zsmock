import React from "react";
import {SectionTitle} from "../../Repeatable/SectionTitle/SectionTitle";
import styled from "styled-components";

/*
* styled start
* */


const ImgBannerWrapper = styled.div`
    position: relative;
    text-align: center;
 `;


const ImgTitleBox = styled.div`
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

/*
* styled end
* */


/*
* interface  start
* */

export enum IBannerSize {
    contain = "contain",
    cover = "cover",
}

interface IProps {
    img: string;
    labelLink?: string;
    label?: string;
    labelColor?: string
    bannerSize?: IBannerSize.contain | IBannerSize.cover
}

/*
* interface end
* */

export function ImgBanner(props: IProps) {
    return (
        <ImgBannerWrapper>
            {props.label
                ? <ImgTitleBox>
                    <SectionTitle
                        label={props.label}
                        link={props.labelLink}
                        color={props.labelColor}
                    />
                </ImgTitleBox>
                : null}
            <Img className={`${props.bannerSize ? props.bannerSize : 'contain'}`} src={props.img} alt=""/>
        </ImgBannerWrapper>
    )
}