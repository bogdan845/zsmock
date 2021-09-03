import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {carParkPage} from "../../store/carPark/sagas/carParkPageActions";
import {carParkPageSelector} from "../../store/carPark/carParkSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function CarPark() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carParkPage())
    }, [dispatch])

    const data: any = useSelector(carParkPageSelector);
    console.log(data);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}