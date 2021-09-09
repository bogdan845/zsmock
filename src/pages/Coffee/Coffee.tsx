import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {coffeePage} from "../../store/coffee/sagas/coffeePageActions";
import {coffeePageSelector} from "../../store/coffee/coffeeSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function Coffee() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(coffeePage())
    }, [dispatch])

    const data: any = useSelector(coffeePageSelector);
    return (
        <PageView
            img={data.page.img}
            content={htmlReactParser(data.page.content || "")}
            title={htmlReactParser(data.page.title || "")}
        />
    )
}