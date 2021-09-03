import React from "react";
import styled from "styled-components";
import {Field} from "formik";


const FieldWrapper = styled.div`
    width: calc(45% - (var(--gutter) * 2));
    padding: 0 var(--gutter);
    display: flex;
    flex-direction: column;
    
    select {
        color: #000;
        border: none;
        outline: none;
        padding: 15px 10px;
        border-radius: 5px;
        font-size: 1.25rem;
        color: var(--text-color);
    
        option {
            font-size: 1rem;
            color: inherit;
        }
    }
`;

interface ISingleItem {
    label: string
}

interface IProps {
    data: ISingleItem[];
    label: string;
    name: string;
}

export function FieldSelect({data, label, name}: IProps) {
    const selectOptions = data.map((item, index) => (
        <option key={index} value={item.label}>{item.label}</option>
    ));
    return (
        <FieldWrapper>
            <Field name={name} as="select">
                <option value={label} disabled defaultValue="">{label}</option>
                {selectOptions}
            </Field>
        </FieldWrapper>
    )
}