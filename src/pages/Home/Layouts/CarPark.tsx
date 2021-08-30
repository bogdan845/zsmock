import React from 'react';
import {useTranslation} from "react-i18next";
/*
* components
* */
import {ImgBanner} from "../../../components/Banners/ImgBanner/ImgBanner";

/*
* images
* */
import bus from "./../../../assets/images/bus.webp"
import {COLOR} from "../../../components/GlobalStyles/constants/colors/colors";
import {IBannerSize} from "../../../components/Banners/ImgBanner/ImgBanner";
import {APP_URLS} from "../../../api/constants/urls";

export function CarParkBlock() {
    const {t} = useTranslation();
    return (
        <section className="">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col">
                        <ImgBanner
                            img={bus}
                            label={t("pages.home.carPark.label")}
                            labelColor={COLOR.white}
                            labelLink={APP_URLS.pages.carPark}
                            bannerSize={IBannerSize.cover}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
