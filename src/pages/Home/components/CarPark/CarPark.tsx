import React from 'react';
import {useTranslation} from "react-i18next";
import {ImgBanner} from "../../../../components/Repeatable/Banners/ImgBanner/ImgBanner";
import bus from "../../../../assets/images/bus.webp"
import {BannerSize} from "../../../../components/Repeatable/Banners/ImgBanner/ImgBanner";
import {PAGES_URL} from "../../../../utils/constants/appNav/pages/pages";
import {Section} from "../../../../components/Repeatable/Section/Section";

export function CarParkBlock() {
    const {t} = useTranslation();
    return (
        <Section>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col">
                        <ImgBanner
                            img={bus}
                            label={t("pages.home.carPark.label")}
                            labelColor={"#fff"}
                            labelLink={PAGES_URL.carPark}
                            bannerSize={BannerSize.cover}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
