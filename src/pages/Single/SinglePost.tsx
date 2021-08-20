import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {singlePostSelector} from "../../store/singlePost/selectors";
import {singlePost} from "../../store/singlePost/sagas/actions";
import htmlReactParser from "html-react-parser";

interface IUrlParams {
    slug: string
}

export default function SinglePost() {

    const {slug}: IUrlParams = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(singlePost(slug));
    }, [dispatch])

    const post = useSelector(singlePostSelector);

    console.log(typeof post.content)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <article className="single">
                        <h2 className="single__title">{post.title}</h2>
                        <span className="single__date">{post.date}</span>
                        <img className="single__img" src={post.img} alt=""/>
                        {post.content ? htmlReactParser(post.content) : ''}
                    </article>
                </div>
            </div>
        </div>
    )
}