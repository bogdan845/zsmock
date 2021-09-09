import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {blogNews} from "../../store/news/sagas/newsBlog/newsBlogActions";
import {newsSelector} from "../../store/news/newsSelectors";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {useParams} from "react-router-dom";
import {PostPreview, Template} from "../../components/Repeatable/PostPreview/PostPreview";
import {SectionTitle} from "../../components/Repeatable/SectionTitle/SectionTitle";
import {Section} from "../../components/Repeatable/Section/Section";
import {ImArrowRight, ImArrowLeft} from "react-icons/im";
import styled from "styled-components";
import {PAGES_URL} from "../../utils/constants/appNav/pages/pages";


interface IBlogUrlParams {
    page: string
}

const PaginationBox = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    width: 120px;
    margin: 0 auto;
    
`;

const PaginationBtn = styled.a`
    text-decoration: none;
    color: var(--text-color);  
    
    &:hover {
        color: var(--green);
    }
`;
const DisabledPaginationBtn = styled.button`
    color: var(--text-color);
    cursor: not-allowed;
    border: none;
    outline: none;
    padding: 0;
`


export function Blog() {
    const {page}: IBlogUrlParams = useParams();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);
    useEffect(() => {
        dispatch(blogNews(currentPage));
    }, [dispatch, currentPage, page])
    const {posts, maxPages} = useSelector(newsSelector);

    /*
    * pagination start
    * */
    const nextPageHandler = () => {
        if (currentPage < maxPages) {
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
                <div key={index} className="col-12 mb-5">
                    <PostPreview
                        template={Template.inline}
                        img={post.img}
                        url={PAGES_URL.news.single}
                        link={post.link}
                        date={post.date}
                        label={post.title}
                        shortDescription={post.shortDescription}
                    />
                </div>
            )
        })
        : null


    return (
        <Section padding={"0 0 3rem"}>
            <SectionTitle label={"Новини"}/>
            <div className="container pt-5 pb-2">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
            <PaginationBox>
                {currentPage - 1 > 0
                    ? <PaginationBtn href={page
                        ? PAGES_URL.news.newsPage + "/page/" + (Number(page) - 1)
                        : PAGES_URL.news.newsPage + "/page/1"}
                                     onClick={prevPageHandler}><ImArrowLeft/> Prev</PaginationBtn>
                    : <DisabledPaginationBtn disabled><ImArrowLeft/> Prev</DisabledPaginationBtn>
                }
                {Number(maxPages) - currentPage > 0
                    ? <PaginationBtn href={page
                        ? PAGES_URL.news.newsPage + "/page/" + (Number(page) + 1)
                        : PAGES_URL.news.newsPage + "/page/2"}
                                     onClick={nextPageHandler}>Next <ImArrowRight/>
                    </PaginationBtn>
                    : <DisabledPaginationBtn disabled>Next <ImArrowRight/></DisabledPaginationBtn>
                }
            </PaginationBox>
        </Section>
    )
}

