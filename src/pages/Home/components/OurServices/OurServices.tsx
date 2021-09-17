import React from 'react';
import {useTranslation} from "react-i18next";
import {FIRM_SERVICES} from "../../../../utils/constants/firmServices/firmServices";
import {ImgBanner} from "../../../../components/Repeatable/Banners/ImgBanner/ImgBanner";
import {TextBanner} from "../../../../components/Repeatable/Banners/TextBanner/TextBanner";
import {BannerSize} from "../../../../components/Repeatable/Banners/ImgBanner/ImgBanner";
import {Section} from "../../../../components/Repeatable/Section/Section";


export function OurServices() {
    const {t} = useTranslation();
    const renderServices = FIRM_SERVICES.map(({image, banner}, index) => {
        return (
            <div key={index} className="row g-0">
                <div className={`col-12 col-md-6 ${index % 2 === 0 ? 'order-1' : 'order-2'} `}>
                    <ImgBanner
                        img={image}
                        bannerSize={BannerSize.cover}
                    />
                </div>
                <div className={`col-12 col-md-6 align-self-center ${index % 2 !== 0 ? 'order-1' : 'order-2'}`}>
                    <TextBanner
                        label={t(`pages.home.${banner.label}.label`)}
                        labelLink={banner.labelLink}
                        text={t("pages.home.internationalFlights.content")}
                        btnLabel={t(`pages.home.${banner.label}.linkLabel`)}
                        btnLink={banner.btnLink}
                    />
                </div>
            </div>
        )
    });

    return (
        <Section color={"var(--light-grey)"}>
            <div className="container-fluid p-0">
                {renderServices}
            </div>
        </Section>
    )
}