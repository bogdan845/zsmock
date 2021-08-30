import React from 'react';
import {OUR_BENEFITS} from "../../../../utils/constants/ourBenefits/ourBenefits";
import {SingleBenefit} from "./SingleBenefit";
import {SectionTitle} from "../../../../components/Repeatable/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/GlobalStyles/constants/colors/colors";
import {APP_URLS} from "../../../../api/constants/urls";
import {useTranslation} from "react-i18next";
import {TitleWrapper} from "../../../../components/Repeatable/TitleWrapper/TitleWrapper";
import styled from "styled-components";

/*
* styled start
* */

const OurBenefitsSection = styled.section`
    background-color: var(--green);
`

/*
* styled end
* */


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
        <OurBenefitsSection>
            <TitleWrapper>
                <SectionTitle
                    label={t("pages.home.benefits.label")}
                    link={APP_URLS.pages.benefits}
                    color={COLOR.white}
                />
            </TitleWrapper>
            <div className="container">
                <div className="row">
                    {renderBenefits}
                </div>
            </div>
        </OurBenefitsSection>
    )
}