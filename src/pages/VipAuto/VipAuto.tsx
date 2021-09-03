import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {vipAutoPage} from "../../store/vipAuto/sagas/vipAutoPageActions";
import {vipAutoPageSelector} from "../../store/vipAuto/avipAutoSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";


export function VipAuto() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(vipAutoPage())
    }, [dispatch])

    const data: any = useSelector(vipAutoPageSelector);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}