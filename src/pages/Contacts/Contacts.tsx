import React, {useEffect} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {contactsPage} from "../../store/contacts/sagas/contactsPageActions";
import {contactsPageSelector} from "../../store/contacts/contactsSelector";
import {PageView} from "../../components/Repeatable/PageView/PageView";

export function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsPage())
    }, [dispatch])

    const data: any = useSelector(contactsPageSelector);
    // console.log(data);
    return (
        <PageView content={htmlReactParser(data.page.content || "")}/>
    )
}