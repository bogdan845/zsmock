import React from 'react';
import {OUR_BENEFITS} from "../../../../utils/constants/ourBenefits/ourBenefits";
import {SingleBenefit} from "./Single/SingleBenefit";
import {SectionTitleLink} from "../../../../components/Repeatable/SectionTitleLink/SectionTitleLink";
import {useTranslation} from "react-i18next";
import {TitleWrapper} from "../../../../components/Repeatable/TitleWrapper/TitleWrapper";
import {Section} from "../../../../components/Repeatable/Section/Section";

export function OurBenefits() {
    const {t} = useTranslation();
    const renderBenefits = OUR_BENEFITS.map((item, index) => (
        <SingleBenefit
            key={index}
            label={t(`pages.home.benefits.iconsLabel.${item.label}`)}
            link={item.link}
            icon={item.icon}
        />
    ));

    return (
        <Section color={"var(--green)"}>
            <TitleWrapper>
                <SectionTitleLink
                    label={t("pages.home.benefits.label")}
                    color={"#fff"}
                />
            </TitleWrapper>
            <div className="container">
                <div className="row">
                    {renderBenefits}
                </div>
            </div>
        </Section>
    )
}