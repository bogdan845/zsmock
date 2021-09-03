import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {interFlightsPage} from "../../store/interFlights/sagas/interFlitghsPageActions";
import {interFlightsPageSelector} from "../../store/interFlights/interFlightsSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function InterFlights() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(interFlightsPage())
    }, [dispatch])

    const data: any = useSelector(interFlightsPageSelector);
    // console.log(data);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}