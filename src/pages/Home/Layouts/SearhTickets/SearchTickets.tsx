import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import busInterior from "../../../../assets/images/bus_interior.jpg"
import {DEPARTURE_ARRIVAL_PLACES} from "../../../../utils/constants/departureArrivalPlaces/dpartureArrivalPlaces";
import {BsArrowLeftRight} from "react-icons/bs";
import {
    withFormik,
    //FormikHelpers,
    FormikProps,
    Form,
    //FieldProps,
} from 'formik';
import {FieldSelect} from "./Layouts/FieldSelect/FieldSelect";
import {Datepicker} from "./Layouts/Datepicker/Datepicker";


const SearchSection = styled.section`
    padding: 100px 0 50px;
    color: #fff;
    background-image: url(${busInterior});
    background-color: rgba(34,137,45, 0.5);
    background-size: cover;
    background-position: center center;
    background-blend-mode: multiply;
`;

const FormBox = styled(Form)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.span`
    padding: 10px;
    border-radius: 5px;
    background: rgba(0,0,0,0.5);
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
`;

const Button = styled.button`
    border: none;
    outline: none;
    color: #fff;
    background: var(--green);
    border-radius: 5px;
    font-size: 1.25rem;
    padding: 5px 20px;
    margin: 0 auto;
    transition: 0.25s linear;
    display: block;
    
    &:hover {
        color: var(--yellow);
    }
`;


interface IFormValues {
    startPoint: string;
    endPoint: string;
    date: string;
}

interface IFormProps {
    startPoint?: string;
    endPoint?: string;
    date?: string;
}


export function SearchTickets() {
    const {t} = useTranslation();


    const TicketsForm = (
        {
            values,
            handleChange,
            setFieldTouched,
            setFieldValue,
            isSubmitting,
            handleSubmit
        }: FormikProps<IFormValues>
    ) => {
        return (
            <SearchSection>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <FormBox>
                                <FieldSelect
                                    name={"startPoint"}
                                    data={DEPARTURE_ARRIVAL_PLACES}
                                    label={t("searchTickets.startPoint.label")}
                                />
                                <IconWrapper>
                                    <BsArrowLeftRight size={30}/>
                                </IconWrapper>
                                <FieldSelect
                                    name={"endPoint"}
                                    data={DEPARTURE_ARRIVAL_PLACES}
                                    label={t("searchTickets.endPoint.label")}
                                />
                                <Datepicker name={"date"} value={new Date()}/>
                                <ButtonWrapper>
                                    <Button type="submit">{t("searchTickets.button.label")}</Button>
                                </ButtonWrapper>
                            </FormBox>
                        </div>
                    </div>
                </div>
            </SearchSection>
        );
    }


    const EnhancedTicketsForm = withFormik<IFormProps, IFormValues>({
        mapPropsToValues({endPoint, startPoint, date}) {
            return {
                startPoint: startPoint || "",
                endPoint: endPoint || "",
                date: date || ""
            }
        },
        handleSubmit: values => {
            console.log(values);
            return values;
        },
    })(TicketsForm);


    return (
        <EnhancedTicketsForm/>
    )
}