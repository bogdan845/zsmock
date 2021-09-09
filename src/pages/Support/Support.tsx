import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {supportPage} from "../../store/support/sagas/supportPageActions";
import {supportPageSelector} from "../../store/support/supportSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";


export function Support() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(supportPage())
    }, [dispatch])

    const data: any = useSelector(supportPageSelector);
    return (
        <PageView
            content={htmlReactParser(data.page.content || "")}
            title={htmlReactParser(data.page.title || "")}
            img={data.page.img}
        />
    )
}