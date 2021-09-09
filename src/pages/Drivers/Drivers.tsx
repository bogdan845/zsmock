import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {PageView} from "../../components/Repeatable/PageView/PageView";
import {driversPage} from "../../store/dirvers/sagas/driversPageActions";
import {driversPageSelector} from "../../store/dirvers/driversSelector";

export function Drivers() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(driversPage())
    }, [dispatch])

    const data: any = useSelector(driversPageSelector);
    return (
        <PageView
            title={data.page.title}
            img={data.page.img}
            content={htmlReactParser(data.page.content || "")}
        />
    )
}