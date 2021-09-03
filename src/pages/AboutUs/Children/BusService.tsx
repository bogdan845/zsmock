import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {busServicePage} from "../../../store/busService/sagas/busServicePageActions";
import {busServicesPageSelector} from "../../../store/busService/busServiceSelector";
import {PageView} from "../../../components/Repeatable/PageView/PageView";

export function BusService() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(busServicePage())
    }, [dispatch])

    const data: any = useSelector(busServicesPageSelector);
    // console.log(data);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}