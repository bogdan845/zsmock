import React from "react";
import htmlReactParser from "html-react-parser"
import {APP_ROUTES} from "../../../../utils/constants/pagesUrl/pagesUrl";

interface IProps {
    img: string;
    label: string;
    link: string;
    excerpt: string
};


export function PostPreview({img, label, link, excerpt}: IProps) {
    return (
        <div className="col-12 col-md-4 d-flex">
            <div className="latest-post">
                <a href={APP_ROUTES.news + "/" + link} target="_self" className="latest-post__img-link">
                    <img className="latest-post__img" src={img} alt=""/>
                    <i className="latest-post__arrow bi bi-forward-fill"></i>
                </a>
                <div className="latest-post__content">
                    <h5 className="latest-post__title"><a href={APP_ROUTES.news + "/" + link}>{label}</a></h5>
                    {htmlReactParser(excerpt)}
                </div>
            </div>
        </div>
    )
}