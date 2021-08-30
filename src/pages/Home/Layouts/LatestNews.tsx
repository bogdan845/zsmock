import React, {useEffect} from "react";
import {SectionTitle} from "../../../components/Repeatable/SectionTitle/SectionTitle";
import {COLOR} from "../../../components/GlobalStyles/constants/colors/colors";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {latestNewsSelector} from "../../../store/news/newsSelectors";
import {PostPreviewModel} from "../../../utils/models/Post/DefaultPreview";
import {PostPreview} from "../../../components/PostPreview/PostPreview";
import {APP_URLS} from "../../../api/constants/urls";
import {latestNews} from "../../../store/news/sagas/latest/latestNewsActions";
import {useTranslation} from "react-i18next";
import {TitleWrapper} from "../../../components/Repeatable/TitleWrapper/TitleWrapper";
import styled from "styled-components";


/*
* styled start
* */

const LatestNewsSection = styled.section`
    background-color: var(--light-grey);
    padding-bottom: 40px;
`

/*
* styled end
* */


// const checkRerender = (prev: any, next: any) => prev.length === next.length;

export function LatestNews() {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        dispatch(latestNews());
    }, [dispatch]);

    const {posts /*, status*/} = useSelector(latestNewsSelector);

    const renderPosts = posts && posts.length
        ? posts.map((item, index) => {
            const post = new PostPreviewModel(item);
            return (
                <PostPreview
                    key={index}
                    link={post.link}
                    url={APP_URLS.pages.news.routes.newsPage}
                    img={post.img}
                    label={post.title}
                    shortDescription={post.shortDescription}
                />
            )
        })
        : <p>no posts</p>


    return (
        <LatestNewsSection>
            <TitleWrapper>
                <SectionTitle
                    label={t("pages.home.latestNews.label")}
                    link={APP_URLS.pages.news.routes.newsPage}
                    color={COLOR.white}
                />
            </TitleWrapper>
            <div className="container mt-5">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
        </LatestNewsSection>
    )
};