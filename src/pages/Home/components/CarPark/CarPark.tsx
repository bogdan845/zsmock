import React from 'react';
import {useTranslation} from "react-i18next";
import {BannerImg} from "../../../../components/Repeatable/Banner/Image/BannerImg";
import bus from "../../../../assets/images/bus.webp"
import {ImgSize} from "../../../../components/Repeatable/Banner/Image/BannerImg";
import {PAGES_URL} from "../../../../utils/constants/appNav/pages/pages";
import {Section} from "../../../../components/Repeatable/Section/Section";

export function CarParkBlock() {
    const {t} = useTranslation();
    return (
        <Section>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col">
                        <BannerImg
                            img={bus}
                            label={t("pages.home.carPark.label")}
                            labelColor={"#fff"}
                            labelLink={PAGES_URL.carPark}
                            imgSize={ImgSize.cover}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
