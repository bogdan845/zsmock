import React, {ChangeEvent, SetStateAction, useEffect, useState} from "react";
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
import {SearchField} from "./Layouts/SearchField/SearchField";
import {Datepicker} from "./Layouts/Datepicker/Datepicker"
import {useDispatch, useSelector} from "react-redux";
import {dispatch} from "../../../../store/store";
import {ticketsSelector} from "../../../../store/tickets/ticketsSelector";
import {tickets} from "../../../../store/tickets/sagas/ticketsActions";
import {TicketsModel} from "../../../../utils/models/Tickets/tickets";


const SearchSection = styled.section`
    padding: 100px 0 200px;
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
    align-items: flex-start;
    justify-content: center;
`;


const IconWrapper = styled.span`
    padding: 13px;
    border-radius: 5px;
    background: rgba(0,0,0,0.5);
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    margin-left: 20px;   
`;

const Button = styled.button`
    border: none;
    outline: none;
    color: #fff;
    background: var(--green);
    border-radius: 5px;
    font-size: 1rem;
    padding: 15px 20px;
    margin: 0 auto;
    transition: 0.25s linear;
    display: block;
    border: 1px solid rgba(0,0,0,0.1);
    
    &:hover {
        color: var(--yellow);
    }
`;


interface ICityId {
    cityId: string;
}

export interface IFormValues {
    from: ICityId;
    to: ICityId;
    date: string;
    time: string;
    passengersAdultCount: number,
    children: [],
    transfer: string,
    sort: string,
    lang: string
}

interface IFormProps {
    from?: ICityId;
    to?: ICityId;
    date?: string;
    time?: string;
    passengersAdultCount?: number,
    children?: [],
    transfer?: string,
    sort?: string,
    lang?: string
}


export function Tickets() {

    const {t} = useTranslation();
    const dispatch = useDispatch();


    const TicketsForm = (
        {
            values,
            // handleChange,
            // setFieldTouched,
            // setFieldValue,
            // isSubmitting,
            // handleSubmit
        }: FormikProps<IFormValues>
    ) => {
        return (
            <SearchSection>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <FormBox>
                                <SearchField
                                    name={"from.cityId"}
                                    data={DEPARTURE_ARRIVAL_PLACES}
                                    label={t("searchTickets.startPoint.label")}
                                    selectedPoint={values.from.cityId}
                                />
                                <IconWrapper>
                                    <BsArrowLeftRight size={30}/>
                                </IconWrapper>
                                <SearchField
                                    name={"to.cityId"}
                                    data={DEPARTURE_ARRIVAL_PLACES}
                                    label={t("searchTickets.endPoint.label")}
                                    selectedPoint={values.to.cityId}
                                />
                                <Datepicker name={"date"} value={new Date()}/>
                                <ButtonWrapper>
                                    <Button type="submit">
                                        {t("searchTickets.button.label")}
                                    </Button>
                                </ButtonWrapper>
                            </FormBox>
                        </div>
                    </div>
                </div>
            </SearchSection>
        );
    }


    const EnhancedTicketsForm = withFormik<IFormProps, IFormValues>({
        mapPropsToValues(values) {
            const tickets = new TicketsModel(values);
            // console.log(values);
            return tickets.ReadyPayload();
        },
        handleSubmit(values) {
            return dispatch(tickets(values));
        },
    })(TicketsForm);


    return (
        <EnhancedTicketsForm/>
    )
}