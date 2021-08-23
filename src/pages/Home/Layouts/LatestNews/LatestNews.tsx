import React, {useEffect, memo} from "react";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {latestNewsSelector} from "../../../../store/news/newsSelectors";
import {PostPreviewModel} from "../../../../utils/models/Post/DefaultPreview";
import {PostPreview} from "./PostPreview";
import {APP_ROUTES} from "../../../../utils/constants/pagesUrl/pagesUrl";
import {latestNews} from "../../../../store/news/sagas/latest/latestNewsActions";

const checkRerender = (prev: any, next: any) => prev.length === next.length;

export const LatestNews = memo(function () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(latestNews());
    }, [dispatch]);

    const posts = useSelector(latestNewsSelector, checkRerender);

    const renderPosts = posts && posts.length
        ? posts.map((item, index) => {
            const post = new PostPreviewModel(item);
            return (
                <PostPreview
                    key={index}
                    link={post.link}
                    img={post.img}
                    label={post.title}
                    excerpt={post.shortDescription}
                />
            )
        })
        : <p>no posts</p>


    return (
        <section className="latest-news r-grey-bg">
            <div className={"latest-news-title"}>
                <SectionTitle label={"Останні новини"} link={APP_ROUTES.news} color={COLOR.white}/>
            </div>
            <div className="container">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
        </section>
    )
});