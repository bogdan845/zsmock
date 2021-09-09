import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {mediaServicePage} from "../../../store/mediaService/sagas/mediaServicePageActions";
import {mediaServicePageSelector} from "../../../store/mediaService/mediaServiceSelector";
import {PageView} from "../../../components/Repeatable/PageView/PageView";


export function MediaService() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mediaServicePage())
    }, [dispatch])

    const data: any = useSelector(mediaServicePageSelector);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}