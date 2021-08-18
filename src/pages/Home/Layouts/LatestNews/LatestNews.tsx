import React from "react";
import {LATEST_NEWS} from "../../../../utils/constants/latestNews/latestNews";
import {SingleNews} from "./SingleNews";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";


export function LatestNews() {
    const renderPosts = LATEST_NEWS.map(({img, link, content}, index) => (
        <SingleNews
            key={index}
            img={img}
            label={content.label}
            link={link}
            excerpt={content.excerpt}
        />
    ))

    return (
        <section className="latest-news r-grey-bg">
            <div className={"latest-news-title"}>
                <SectionTitle label={"Останні новини"} link={"#"} color={COLOR.white}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                    {renderPosts}
                </div>
            </div>
        </section>
    )
}