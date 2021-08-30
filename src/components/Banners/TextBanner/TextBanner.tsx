import React from 'react';
import {ITextBanner} from "../../../utils/interfaces/textBanner/textBanner";
import {SectionTitle} from "../../Repeatable/SectionTitle/SectionTitle";
import {BannerLink} from "../Link/BannerLink";
import styled from "styled-components";


const BannerWrapper = styled.div`
    text-align: center;
    font-size: 1.125rem;
    padding: calc(var(--gutter) * 2) var(--gutter);
`;


export function TextBanner(props: ITextBanner) {
    return (
        <BannerWrapper>
            <SectionTitle color={props.labelColor} label={props.label} link={props.labelLink}/>
            <p>{props.text}</p>
            <BannerLink label={props.btnLabel} link={props.btnLink}/>
        </BannerWrapper>
    )
}