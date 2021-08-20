import React, {useEffect, memo} from "react";
import {PostPreview} from "./PostPreview";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";
import {useDispatch} from "react-redux";
import {news, newsFetcher} from "../../../../store/news/latest/sagas/actions";
import {useSelector} from "react-redux";
import {latestNewsSelector} from "../../../../store/news/selectors";
import {APP_ROUTES} from "../../../../utils/constants/pagesUrl/pagesUrl";
import {PostPreviewModel} from "../../../../utils/models/Post/Preview";
import {store} from "../../../../store/store";

const checkRerender = (prev: any, next: any) => prev.length === next.length;

export const LatestNews = memo(function () {
    const dispatch = useDispatch();
    const posts = useSelector(latestNewsSelector, checkRerender);

    useEffect(() => {
        dispatch(news());
    }, [dispatch]);


    // console.log('POSTS >> ', posts);


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