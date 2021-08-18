import React from "react";

interface IProps {
    img: string;
    label: string;
    link: string;
    excerpt: string
};


export function SingleNews({img, label, link, excerpt}: IProps) {
    return (
        <div className="col-12 col-md-4 d-flex">
            <div className="latest-post">
                <a href={link} target="_self" className="latest-post__img-link">
                    <img className="latest-post__img" src={img} alt=""/>
                    <i className="latest-post__arrow bi bi-forward-fill"></i>
                </a>
                <div className="latest-post__content">
                    <h5 className="latest-post__title"><a href="latest-post__title">{label}</a></h5>
                    <p>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}