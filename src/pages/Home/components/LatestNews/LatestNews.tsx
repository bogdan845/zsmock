import React, {useEffect} from "react";
import {SectionTitleLink} from "../../../../components/Repeatable/SectionTitleLink/SectionTitleLink";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {latestNewsSelector} from "../../../../store/news/newsSelectors";
import {PostPreviewModel} from "../../../../utils/models/Post/PostPreview";
import {PostPreview} from "../../../../components/Repeatable/PostPreview/PostPreview";
import {PAGES_URL} from "../../../../utils/constants/appNav/pages/pages";
import {latestNews} from "../../../../store/news/sagas/latest/latestNewsActions";
import {useTranslation} from "react-i18next";
import {TitleWrapper} from "../../../../components/Repeatable/TitleWrapper/TitleWrapper";
import {Section} from "../../../../components/Repeatable/Section/Section";

// const checkRerender = (prev: any, next: any) => prev.length === next.length;

export function LatestNews() {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        dispatch(latestNews());
    }, [dispatch]);
    //
    const {posts /*, status*/} = useSelector(latestNewsSelector);

    const renderPosts = posts && posts.length
        ? posts.map((item, index) => {
            const post = new PostPreviewModel(item);
            return (
                <div key={index} className="col-12 col-md-4 d-flex">
                     <PostPreview
                         link={post.link}
                         url={PAGES_URL.news.newsPage}
                         img={post.img}
                         label={post.title}
                         shortDescription={post.shortDescription}
                     />
                 </div>
             )
         })
         : <p>no posts</p>


    return (
        <Section color={"var(--light-grey)"}>
            <TitleWrapper>
                <SectionTitleLink
                    label={t("pages.home.latestNews.label")}
                    link={PAGES_URL.news.newsPage}
                    color={"#fff"}
                />
            </TitleWrapper>
            <div className="container py-5">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
        </Section>
    )
};