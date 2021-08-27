import React from "react";

/*
* images
* */
import girl from "../../../assets/images/girl.png";
/*
* components
* */
import {ImgBanner} from "../../../components/Banners/ImgBanner/ImgBanner";
import {TextBanner} from "../../../components/Banners/TextBanner/TextBanner";
import {APP_URLS} from "../../../api/constants/urls";
import {useTranslation} from "react-i18next";


export function Offers() {
    const {t} = useTranslation();

    return (<section className="r-grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ImgBanner img={girl}/>
                    </div>
                    <div className="col-12 col-md-6 align-self-center">
                        <TextBanner
                            label={t("pages.home.specialOffers.label")}
                            labelLink={APP_URLS.pages.offers.routes.offersPage}
                            text={t("pages.home.specialOffers.content")}
                            btnLabel={t("pages.home.specialOffers.linkLabel")}
                            btnLink={APP_URLS.pages.offers.routes.offersPage}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}