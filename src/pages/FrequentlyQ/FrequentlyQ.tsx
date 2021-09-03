import React, {SetStateAction, useEffect, useState} from "react";
import htmlReactParser from "html-react-parser";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {frequentlyQPage} from "../../store/frequentlyQ/sagas/frequentlyQPageActions";
import {FrequentlyQListModel} from "../../utils/models/FrequentlyQ/FrequentlyQListModel";
import {frequentlyQPageSelector} from "../../store/frequentlyQ/frequentlyQSelector";
import {Page, PageInner} from "../../components/Repeatable/PageView/PageView";
import {GoChevronRight} from "react-icons/go";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled from "styled-components";


const List = styled.div`
    padding: 0;
    margin: 0;
`;

const ListItem = styled.div`
`;



export function FrequentlyQ() {
    const [opened, setOpened] = useState(0);
    const toggle = (index: any) => () => {
        if (opened === index) {
            return setOpened((): SetStateAction<any> => null)
        }
        setOpened(index);
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(frequentlyQPage())
    }, [dispatch])


    const {list} = useSelector(frequentlyQPageSelector);
    const renderList = list && list.length
        ?
        list.map((item, index: any) => {
            const data = new FrequentlyQListModel(item);
            return (
                <ListItem key={index} onClick={toggle(index)}>
                    <GoChevronRight/>
                    {data.title}
                    <span>{opened === index ? "-" : "+"}</span>
                    {opened === index
                        ? <div
                            className={`test ${opened === index ? "active" : "hidden"}`}>{htmlReactParser(data.content || "")}</div>
                        : null
                    }
                </ListItem>
            )
        })
        : null

    return (
        <Page>
            <PageInner>
                <List>
                    {renderList}
                </List>
            </PageInner>
        </Page>
    )
}