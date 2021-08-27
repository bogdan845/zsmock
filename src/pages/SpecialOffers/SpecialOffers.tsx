import React, {useEffect} from 'react';
import {IPageTitle} from "../../utils/interfaces/pagesTitle/pagesTitle";
import {useSelector} from "react-redux";
import {offersPostsSelector} from "../../store/specialOffers/offersSelector";
import {useDispatch} from "react-redux";
import {offers} from "../../store/specialOffers/sagas/offers/offersActions";
import {PostPreview} from "../../components/PostPreview/PostPreview";
import {APP_URLS} from "../../api/constants/urls";
import {SinglePostModel} from "../../utils/models/Post/SingleView";

// const checkRerender = (prev: any, next: any) => prev.length === next.length;

export function SpecialOffers({title}: IPageTitle) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(offers())
    }, [dispatch])

    const data = useSelector(offersPostsSelector /*, checkRerender*/);

    const renderPosts = data.posts.map((item, index) => {
        const post = new SinglePostModel(item);
        return (
            <PostPreview
                key={index}
                link={post.link}
                url={APP_URLS.pages.offers.routes.offersPage}
                img={post.img}
                label={post.title}
                date={post.date}
                shortDescription={post.shortDescription}
            />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {renderPosts}
            </div>
        </div>
    )
};