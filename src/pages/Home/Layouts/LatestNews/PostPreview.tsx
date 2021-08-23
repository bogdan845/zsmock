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
            <article className="r-post-preview">
                <a href={APP_ROUTES.news + "/" + link} target="_self" className="r-post-preview__img-link">
                    <img className="r-post-preview__img" src={img} alt=""/>
                    <i className="r-post-preview__arrow bi bi-forward-fill"></i>
                </a>
                <div className="r-post-preview__content">
                    <h5 className="r-post-preview__title"><a href={APP_ROUTES.news + "/" + link}>{label}</a></h5>
                    {htmlReactParser(excerpt)}
                </div>
            </article>
        </div>
    )
}