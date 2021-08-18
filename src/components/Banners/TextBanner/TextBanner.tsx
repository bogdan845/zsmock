import React from 'react';
import styled from "styled-components";
import {ITextBanner, ITextBannerLabelColor} from "../../../../utils/interfaces/textBanner/textBanner";

const Title = styled.h2`

`



export function TextBanner(
    {
        label,
        labelColor = ITextBannerLabelColor.green,
        labelLink,
        text,
        btnLabel,
        btnLink
    }: ITextBanner) {
    return (
        <div className="r-banner text">
            <h2 className={`r-banner__text-title r-title ${labelColor}`}>
                <a href={labelLink} target="_self">
                    {label}
                </a>
            </h2>
            <p>{text}</p>
            <a className="r-button green r-banner__text-btn" href={btnLink} target="_self">{btnLabel}</a>
        </div>
    )
}