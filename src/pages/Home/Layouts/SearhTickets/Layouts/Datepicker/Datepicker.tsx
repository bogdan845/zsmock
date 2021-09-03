import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import {useField, useFormikContext} from "formik";

const DatePickerWrapper = styled.div`
    margin-top: 2.5rem;
    padding: 0 var(--gutter);
`;

const StyledDatepicker = styled(DatePicker)`
    color: #000;
    border: none;
    outline: none;
    padding: 10px 10px;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center
    color: var(--text-color);
`


export function Datepicker(props: any) {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props);
    
    return (
        <DatePickerWrapper>
            <StyledDatepicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || props.value}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
            />
        </DatePickerWrapper>
    )
}