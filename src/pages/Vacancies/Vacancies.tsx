import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {vacanciesPage} from "../../store/vacancies/sagas/vacanciesPageActions";
import {vacanciesPageSelector} from "../../store/vacancies/vacanciesSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function Vacancies() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(vacanciesPage())
    }, [dispatch])

    const data: any = useSelector(vacanciesPageSelector);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}