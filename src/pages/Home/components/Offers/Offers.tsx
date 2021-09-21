import React from "react";

import girl from "../../../../assets/images/girl.png";
import {BannerImg} from "../../../../components/Repeatable/Banner/Image/BannerImg";
import {BannerText} from "../../../../components/Repeatable/Banner/Text/BannerText";
import {PAGES_URL} from "../../../../utils/constants/appNav/pages/pages";
import {useTranslation} from "react-i18next";
import {Section} from "../../../../components/Repeatable/Section/Section";


export function Offers() {
    const {t} = useTranslation();
    return (
        <Section color={"var(--light-grey)"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BannerImg img={girl}/>
                    </div>
                    <div className="col-12 col-md-6 align-self-center">
                        <BannerText
                            label={t("pages.home.specialOffers.label")}
                            labelLink={PAGES_URL.offers.offersPage}
                            text={t("pages.home.specialOffers.content")}
                            btnLabel={t("pages.home.specialOffers.linkLabel")}
                            btnLink={PAGES_URL.offers.offersPage}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}