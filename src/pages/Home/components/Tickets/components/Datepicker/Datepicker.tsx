import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import {FieldHookConfig, useField, useFormikContext} from "formik";

const DatePickerWrapper = styled.div``;

const StyledDatepicker = styled(DatePicker)`
  border: none;
  outline: none;
  padding: 15px 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--text-color);
`;

interface IProps {
    name: string,
    value: Date
}


export function Datepicker(props: IProps | FieldHookConfig<Date>) {
    const {setFieldValue} = useFormikContext();
    const [field] = useField(props.name);

    const parseDate = (val: Date) => {
        if (val) {
            const date = new Date(val);
            const year = date.getFullYear();
            const month = date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1;

            const day = date.getDate() < 10
                ? "0" + date.getDate()
                : date.getDate();

            return year + "-" + month + "-" + day;
        }
        return val;
    }


    return (
        <DatePickerWrapper>
            <StyledDatepicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || props.value}
                onChange={(val: Date) => {
                    setFieldValue(field.name, parseDate(val));
                }}
            />
        </DatePickerWrapper>
    )
}