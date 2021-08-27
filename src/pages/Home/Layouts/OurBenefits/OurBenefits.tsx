import React from 'react';
import {OUR_BENEFITS} from "../../../../utils/constants/ourBenefits/ourBenefits";
import {SingleBenefit} from "./SingleBenefit";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";
import {APP_URLS} from "../../../../api/constants/urls";
import {useTranslation} from "react-i18next";


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
        <section className="r-green-bg">
            <div className="our-benefits-title">
                <SectionTitle
                    label={t("pages.home.benefits.label")}
                    link={APP_URLS.pages.benefits}
                    color={COLOR.white}
                />
            </div>
            <div className="container">
                <div className="row">
                    {renderBenefits}
                </div>
            </div>
        </section>
    )
}