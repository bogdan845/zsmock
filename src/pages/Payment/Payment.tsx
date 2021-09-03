import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {paymentPage} from "../../store/payment/sagas/paymentPageActions";
import {paymentPageSelector} from "../../store/payment/paymentSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function Payment() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(paymentPage())
    }, [dispatch])


    const data: any = useSelector(paymentPageSelector);
    return (
        <PageView
            content={htmlReactParser(data.page.content || "")}
            title={htmlReactParser(data.page.title || "")}
        />
    )
}