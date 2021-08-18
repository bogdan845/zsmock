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

export function Offers() {
    return (<section className="r-grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ImgBanner img={girl}  labelLink={"#"}/>
                    </div>
                    <div className="col-12 col-md-6 align-self-center">
                        <TextBanner
                            label={"Акції та пропозиції"}
                            labelLink={"#"}
                            text={"Дізнавайтесь прол акції, знижки та вигідні пропозиції від Зелени Слон 7"}
                            btnLabel={"Детальніше"}
                            btnLink={"#"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}