import React, {SetStateAction, useState} from "react";
import styled from "styled-components";
import {useField, Field, useFormikContext} from "formik";

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
    label: string;
}

interface IProps {
    data: ISingleItem[];
    label: string;
    name: string;
}

interface ISuggests {
    id: number;
    label: string;
}

export function SearchField(props: IProps) {

    const {data, ...rest} = props;
    const [text, setText] = useState("")
    const [suggests, setSuggests] = useState([]);
    const {setFieldValue} = useFormikContext();
    const [field] = useField(rest.name);


    // render suggestions (autocomplete)
    const dataFilter = (value: string) => {
        const filteredValues = data.filter((item, index) => {
            return !value ? "" : !item.label.indexOf(value);
        })
        setSuggests((): SetStateAction<any> => filteredValues);
    };

    /*
    * set value from input to state
    * and filtering suggestion depending on input value
    * */
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        dataFilter(e.target.value);
    };

    /*
    * set value from selected suggestion to input state,
    * pass it to formik and clear suggestion state
    * */
    const suggestsHandler = (value: string, id: number) => () => {
        setText(value);
        setFieldValue(field.name, id);
        setSuggests([]);
    };

    /*
    * hide suggestion when click outside input or inside suggestion list
    * */
    const onBlurHandler = () => {
        setTimeout(() => {
            setSuggests(() => []);
        }, 250)
    }

    // suggestions (autocomplete);
    const renderSuggests = suggests.map((item: ISuggests, index) => (
        <ListItem
            key={index}
            value={item.id}
            onClick={suggestsHandler(item.label, item.id)}
        >
            {item.label}
        </ListItem>
    ));

    return (
        <FieldWrapper>
            <Field type="hidden" {...field} {...rest}/>
            <Field
                value={text}
                as="input"
                type={"text"}
                autoComplete={"off"}
                placeholder={rest.label}
                onBlur={onBlurHandler}
                onFocus={onChangeHandler}
                onChange={onChangeHandler}
            />
            {suggests.length ? <List>{renderSuggests}</List> : ""}
        </FieldWrapper>
    )
}