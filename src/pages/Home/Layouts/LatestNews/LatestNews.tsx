import React, {useEffect, memo} from "react";
import {SingleNews} from "./SingleNews";
import {SectionTitle} from "../../../../components/Styled/SectionTitle/SectionTitle";
import {COLOR} from "../../../../components/Styled/constants/colors/colors";
import {useDispatch} from "react-redux";
import {fetchNews} from "../../../../store/news/latest/sagas/actions";
import {useSelector} from "react-redux";
import {latestNewsPostsSelector} from "../../../../store/news/selectors";

const checkRerender = (prev: any, next: any) => prev.length === next.length;

export const LatestNews = memo(function () {
    const dispatch = useDispatch();
    const posts = useSelector(latestNewsPostsSelector, checkRerender);


    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    console.log('POSTS >> ', posts);


    const renderPosts = posts && posts.length
        ? posts.map((item, index) => (
            <SingleNews
                key={index}
                link={item["slug"]}
                img={item["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                label={item["title"]["rendered"]}
                excerpt={item["excerpt"]["rendered"]}
            />
        ))
        : <p>no posts</p>

    return (
        <>
            <section className="latest-news r-grey-bg">
                <div className={"latest-news-title"}>
                    <SectionTitle label={"Останні новини"} link={"#"} color={COLOR.white}/>
                </div>
                <div className="container">
                    <div className="row">
                        {renderPosts}
                    </div>
                </div>
            </section>
        </>
    )
});