import React, {useEffect} from 'react';
import {IPageTitle} from "../../utils/interfaces/pagesTitle/pagesTitle";
import {useDispatch, useSelector} from "react-redux";
import {offersPostsSelector} from "../../store/specialOffers/offersSelector";
import {offers} from "../../store/specialOffers/sagas/offers/offersActions";
import {PostPreview, Template} from "../../components/Repeatable/PostPreview/PostPreview";
import {PAGES_URL} from "../../utils/constants/appNav/pages/pages";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {Section} from "../../components/Repeatable/Section/Section";
import {SectionTitle} from "../../components/Repeatable/SectionTitle/SectionTitle";

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
            <div className="col-12 mb-5" key={index}>
                <PostPreview
                    template={Template.inline}
                    link={post.link}
                    url={PAGES_URL.offers.offersPage}
                    img={post.img}
                    label={post.title}
                    date={post.date}
                    shortDescription={post.shortDescription}
                />
            </div>
        )
    })

    return (
        <Section>
            <SectionTitle label={"Спеціальні пропозиціїї"}/>
            <div className="container pt-5 pb-3">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
        </Section>
    )
};