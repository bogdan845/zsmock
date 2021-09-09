import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {waitingHallPage} from "../../store/waitingHall/sagas/waitingHallPageActions";
import {waitingHallPageSelector} from "../../store/waitingHall/waitingHallSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function WaitingHall() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(waitingHallPage())
    }, [dispatch])

    const data: any = useSelector(waitingHallPageSelector);
    return (
        <PageView
            content={htmlReactParser(data.page.content || "")}
            title={htmlReactParser(data.page.title || "")}
            img={data.page.img}
        />
    )
}