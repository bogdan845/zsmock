import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {blogNews} from "../../store/news/sagas/newsBlog/newsBlogActions";
import {newsSelector} from "../../store/news/newsSelectors";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {useParams} from "react-router-dom";
import {PostPreview} from "../../components/PostPreview/PostPreview";
import {APP_URLS} from "../../api/constants/urls";

interface IBlogUrlParams {
    page: string
}


export function Blog() {
    const {page}: IBlogUrlParams = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(3);
    useEffect(() => {
        dispatch(blogNews(page ? Number(page) : currentPage));
    }, [dispatch, currentPage, page])
    const {posts, maxNumPages} = useSelector(newsSelector);

    /*
    * pagination start
    * */
    const nextPageHandler = () => {
        if (currentPage < maxNumPages) {
            setCurrentPage(prevState => prevState + 1)
            dispatch(blogNews(Number(page)))
        }
    }

    const prevPageHandler = () => {
        if (0 < currentPage) {
            setCurrentPage(prevState => prevState - 1 === 0 ? 1 : prevState - 1)
            dispatch(blogNews(Number(page)))
        }
    }

    /*
    * pagination end
    * */


    const renderPosts = posts && posts.length
        ? posts.map((item, index) => {
            const post = new SinglePostModel(item);
            return (
                <PostPreview
                    key={index}
                    img={post.img}
                    url={APP_URLS.pages.news.routes.newsPage}
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
            <a href={page
                ? APP_URLS.pages.news.routes.newsPage + "/page/" + (Number(page) - 1)
                : APP_URLS.pages.news.routes.newsPage + "/page/1"}
               onClick={prevPageHandler}>Prev</a>
            <span> / </span>
            <a href={page
                ? APP_URLS.pages.news.routes.newsPage + "/page/" + (Number(page) + 1)
                : APP_URLS.pages.news.routes.newsPage + "/page/2"}
               onClick={nextPageHandler}>Next</a>
        </section>
    )
}