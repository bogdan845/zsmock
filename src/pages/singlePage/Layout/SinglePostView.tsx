import React from "react";
import htmlReactParser from "html-react-parser";

interface IProps {
    title: string;
    date: string;
    img: string;
    content: string;
}

export function SinglePostView({title, date, img, content}: IProps) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <article className="single">
                        <h2 className="single__title">{title}</h2>
                        <span className="single__date">{date}</span>
                        <img className="single__img" src={img} alt=""/>
                        {content ? htmlReactParser(content) : ''}
                    </article>
                </div>
            </div>
        </div>
    )
}