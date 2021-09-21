import React, {useEffect} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import busInterior from "../../../../assets/images/bus_interior.jpg"
import {DEPARTURE_ARRIVAL_PLACES} from "../../../../utils/constants/departureArrivalPlaces/dpartureArrivalPlaces";
import {BsArrowLeftRight} from "react-icons/bs";
import {Form, withFormik} from 'formik';
import {SearchField} from "./components/SearchField/SearchField";
import {Datepicker} from "./components/Datepicker/Datepicker"
import {useDispatch, useSelector} from "react-redux";
import {availableTicketsSelector} from "../../../../store/tickets/ticketsSelector";
import {ticketsDirection} from "../../../../store/tickets/directions/sagas/ticketsDirectionsActions";
import {SearchTicketsModel} from "../../../../utils/models/Tickets/serchTickets/searchTickets";
import {availableTickets} from "../../../../store/tickets/available/sagas/availableTicketsActions";
import {RequestStatus} from "../../../../store/request/requestStatus";
import {AvailableTicketsModel} from "../../../../utils/models/Tickets/availableTickets/availableTicketsModel";
import {AvailableTicket} from "./components/AvailableTicket/AvailableTicket";
import {Spinners} from "../../../../components/Repeatable/Loader/Spinner/Spinners";

const SearchSection = styled.section`
  padding: 100px 0 200px;
  color: #fff;
  background-image: url(${busInterior});
  background-color: rgba(34, 137, 45, 0.5);
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
  padding: 13px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-left: 20px;
`;

const Button = styled.button`
  outline: none;
  color: #fff;
  background: var(--green);
  border-radius: 5px;
  font-size: 1rem;
  padding: 15px 20px;
  margin: 0 auto;
  transition: 0.25s linear;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--yellow);
  }
`;

const TicketWrapper = styled.div`
  background-color: #ebebeb;
  padding: 40px 0;
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

export interface IFormProps {
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

const checkRerender = (prev: any, next: any) => prev.tickets === next.tickets

export function Tickets() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ticketsDirection())
    }, [dispatch]);
    const {status, tickets} = useSelector(availableTicketsSelector, checkRerender);

    const TicketsForm = () => (
        <SearchSection>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <FormBox>
                            <SearchField
                                name={"from.cityId"}
                                data={DEPARTURE_ARRIVAL_PLACES}
                                label={t("searchTickets.startPoint.label")}
                            />
                            <IconWrapper>
                                <BsArrowLeftRight size={30}/>
                            </IconWrapper>
                            <SearchField
                                name={"to.cityId"}
                                data={DEPARTURE_ARRIVAL_PLACES}
                                label={t("searchTickets.endPoint.label")}
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


    const EnhancedTicketsForm = withFormik<IFormProps, IFormValues>({
        mapPropsToValues: values => {
            const tickets = new SearchTicketsModel(values);
            return tickets.readyPayload();
        },
        handleSubmit: values => {
            dispatch(availableTickets(values));
        },
    })(TicketsForm);


    const renderTickets = status === RequestStatus.SUCCEED && tickets && tickets.map((item, index) => {
        const itemModel = new AvailableTicketsModel(item);
        return (
            <AvailableTicket
                key={index}
                from={itemModel.from}
                stationsFrom={itemModel.stationsFrom}
                to={itemModel.to}
                stationsTo={itemModel.stationsTo}
                departureDate={itemModel.departureDate}
                departureTime={itemModel.departureTime}
                arrivalDate={itemModel.arrivalDate}
                arrivalTime={itemModel.arrivalTime}
                travelTime={itemModel.calcTravelTime}
            />
        )
    });


    return (
        <>
            <EnhancedTicketsForm/>
            {status === RequestStatus.LOADING ? <Spinners/> : ""}
            {renderTickets ? <TicketWrapper>{renderTickets}</TicketWrapper> : ""}
        </>
    )
}