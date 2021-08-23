import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {news} from "../../store/news/sagas/news/newsActions";
import {newsSelector} from "../../store/news/newsSelectors";
import {BlogPostPreview} from "./Layouts/PostPreview";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {useParams} from "react-router-dom";

interface IBlogUrlParams {
    page: string
}


export function Blog() {
    const {page}: IBlogUrlParams = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(news(page ? Number(page) : currentPage));
    }, [dispatch])
    const {posts, maxNumPages} = useSelector(newsSelector);

    console.log(page);

    /*
    * pagination start
    * */
    const nextPageHandler = () => {
        if (currentPage < maxNumPages) {
            setCurrentPage(prevState => prevState + 1)
            dispatch(news(Number(page)))
        }
        console.log(currentPage);
    }

    const prevPageHandler = () => {
        if (0 < currentPage) {
            setCurrentPage(prevState => prevState - 1 === 0 ? 1 : prevState - 1)
            dispatch(news(Number(page)))
        }
        console.log(currentPage);
    }

    /*
    * pagination end
    * */


    const renderPosts = posts && posts.length
        ? posts.map((item, index) => {
            const post = new SinglePostModel(item);
            return (
                <BlogPostPreview
                    key={index}
                    img={post.img}
                    link={post.link}
                    date={post.date}
                    label={post.title}
                    shortDescription={post.shortDescription}
                />
            )
        })
        : ''

    return (
        <section>
            <h2>Новини</h2>
            <div className="container">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
            <a href={page ? "/news/page/" + (Number(page) - 1) : "/news/page/1"} onClick={prevPageHandler}>Prev</a>
            <a href={page ? "/news/page/" + (Number(page) + 1) : "/news/page/2"} onClick={nextPageHandler}>Next</a>
        </section>
    )
}