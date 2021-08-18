import React from 'react';
/*
* components
* */
import {ImgBanner} from "../../../components/Banners/ImgBanner/ImgBanner";

/*
* images
* */
import bus from "./../../../assets/images/bus.webp"
import {COLOR} from "../../../components/Styled/constants/colors/colors";
import {IBannerSize} from "../../../components/Banners/ImgBanner/ImgBanner";

export function CarPark() {
    return (
        <section className="">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col">
                        <ImgBanner
                            img={bus}
                            label={"Наші переваги"}
                            labelColor={COLOR.white}
                            labelLink={"#"}
                            bannerSize={IBannerSize.cover}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
