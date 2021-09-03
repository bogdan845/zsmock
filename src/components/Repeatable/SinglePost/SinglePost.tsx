import React, {ReducerAction, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {SinglePostView} from "./Layout/SinglePostView";


interface IProps {
    pageAction: (slug: string) => ReducerAction<any>
    selector: any
}

interface ISlug {
    slug: string
}


export function SinglePost({pageAction, selector}: IProps) {
    const {slug}: ISlug = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(pageAction(slug));
    }, [dispatch, pageAction, slug]);

    const data: any = useSelector(selector);
    return (
        <SinglePostView
            title={data.post.title}
            date={data.post.date}
            img={data.post.img}
            content={data.post.content}
        />
    )
}