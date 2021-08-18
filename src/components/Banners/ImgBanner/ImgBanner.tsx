import React from "react";

export enum IImgBannerSize {
    contain = "contain",
    cover = "cover",
}

interface IProps {
    img: string;
    labelLink: string;
    label?: string;
    labelColor?: string
    bannerSize?: IImgBannerSize.contain | IImgBannerSize.cover
}

export function ImgBanner(
    {
        img,
        label,
        labelColor = IImgBannerLabelColor.green,
        labelLink,
        bannerSize = IImgBannerSize.contain
    }: IProps) {
    return (
        <div className="r-banner img">
            {label
                ? <h2 className={`r-banner__img-title r-title ${labelColor}`}>
                    <a href={labelLink} target="_self">{label}</a>
                </h2>
                : null}
            <img className={`r-banner__img ${bannerSize ? bannerSize : 'contain'}`} src={img} alt=""/>
        </div>
    )
}