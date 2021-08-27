import React from "react";
import htmlReactParser from "html-react-parser"

interface IProps {
    img: string;
    label: string;
    link: string;
    shortDescription: string;
    url: string;
    date?: string;
};

export function PostPreview({img, label, link, shortDescription, url, date}: IProps) {
    return (
        <div className="col-12 col-md-4 d-flex">
            <article className="r-post-preview">
                <a href={url + "/" + link} target="_self"
                   className="r-post-preview__img-link">
                    <img className="r-post-preview__img" src={img} alt=""/>
                    <i className="r-post-preview__arrow bi bi-forward-fill"></i>
                </a>
                <div className="r-post-preview__content">
                    <h5 className="r-post-preview__title">
                        <a href={url + "/" + link}>{label}</a>
                    </h5>
                    {date ? <span className="r-post-preview__date">Від: {date}</span> : null}
                    {htmlReactParser(shortDescription)}
                </div>
            </article>
        </div>
    )
}