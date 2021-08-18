import React from 'react';
import {OUR_BENEFITS} from "../../../../utils/constants/ourBenefits/ourBenefits";
import {SingleBenefit} from "./SingleBenefit";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";

export function OurBenefits() {
    const renderBenefits = OUR_BENEFITS.map((item, index) => (
        <SingleBenefit key={index} label={item.label} link={item.link} icon={item.icon}/>
    ))

    return (
        <section className="r-green-bg">
            <div className="our-benefits-title">
                <SectionTitle label={"Наші переваги"} link={"#"} color={COLOR.white}/>
            </div>
            <div className="container">
                <div className="row">
                    {renderBenefits}
                </div>
            </div>
        </section>
    )
}