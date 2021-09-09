import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {aboutUsPage} from "../../store/aboutUs/sagas/aboutUsPageActions";
import {aboutUsPageSelector} from "../../store/aboutUs/aboutUsSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";


export function AboutUs() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(aboutUsPage())
    }, [dispatch])

    const data: any = useSelector(aboutUsPageSelector);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}