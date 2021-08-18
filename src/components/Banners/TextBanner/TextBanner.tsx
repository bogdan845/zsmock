import React from 'react';
import {ITextBanner} from "../../../utils/interfaces/textBanner/textBanner";
import {SectionTitle} from "../../Styled/SectionTitle/SectionTitle";

export function TextBanner(props: ITextBanner) {
    return (
        <div className="r-banner text">
            <SectionTitle color={props.labelColor} label={props.label} link={props.labelLink}/>
            <p>{props.text}</p>
            <a className="r-button green r-banner__text-btn" href={props.btnLink} target="_self">{props.btnLabel}</a>
        </div>
    )
}