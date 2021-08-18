import React from "react";
import {SectionTitle} from "../../Styled/SectionTitle/SectionTitle";

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

export function ImgBanner(props: IProps) {
    return (
        <div className="r-banner img">
            {props.label
                ? <div className="r-banner__img-title r-title">
                    <SectionTitle label={props.label} link={props.labelLink} color={props.labelColor}/>
                </div>
                : null}
            <img className={`r-banner__img ${props.bannerSize ? props.bannerSize : 'contain'}`} src={props.img} alt=""/>
        </div>
    )
}