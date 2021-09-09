import React, {SetStateAction, useState, useEffect} from "react";
import styled from "styled-components";
import {Field} from "formik";
import {IFormValues} from "../../Tickets";


const FieldWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    position: relative;
    
    input {
        width: 100%; 
        color: #000;
        border: none;
        outline: none;
        padding: 15px 10px;
        border-radius: 5px;
        font-size: 1rem;
        color: var(--text-color);
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 5px;
    max-height: 100px;
    overflow-y: auto;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 5px 0;
    position: absolute;
    width: 100%;
`;

const ListItem = styled.li`
    padding: 5px 10px;
    color: var(--text-color);
    cursor: pointer;
    
    &:hover {
        background-color: var(--light-grey);
        color: var(--text-color);
    }
`;

interface ISingleItem {
    label: string
}

interface IProps {
    data: ISingleItem[];
    label: string;
    name: string;
    selectedPoint: string,
    onChange?: any
}


interface ISuggests {
    id: number;
    label: string;
}

export function SearchField({data, label, name, selectedPoint, onChange}: IProps) {
    const [text, setText] = useState("")
    const [suggests, setSuggests] = useState([]);

    const dataFilter = (text: string) => {
        const filteredValues = data.filter((item, index) => {
            return !text ? "" : !item.label.indexOf(text);
        })
        setSuggests((): SetStateAction<any> => filteredValues);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        dataFilter(e.target.value);
    };

    const suggestsHandler = (text: string) => () => {
        setText(text);
        setSuggests([]);
    };

    const onBlurHandler = () => {
        setTimeout(() => {
            setSuggests([]);
        }, 100)
    }

    const renderSuggests = suggests.map((item: ISuggests, index) => (
        <ListItem
            key={index}
            value={index}
            onClick={suggestsHandler(item.label)}
        >{item.label}</ListItem>
    ));

    return (
        <FieldWrapper>
            <Field
                as="input"
                name={name}
                type={"text"}
                value={text}
                onChange={onChangeHandler}
                placeholder={label}
                autoComplete={"off"}
                onBlur={onBlurHandler}
            />
            <List>
                {renderSuggests}
            </List>
        </FieldWrapper>
    )
}