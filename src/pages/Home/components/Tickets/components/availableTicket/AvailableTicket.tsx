import React from "react";
import {FaBusAlt} from "react-icons/fa";
import styled from "styled-components";

const TicketWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    border-radius: 5px;
    border: 1px solid var(--green);
    color: var(--green);
    margin: 30px auto 0;
    max-width: 1140px;
`;

const TravelWrapper = styled.div`
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    align-items: center;
`


const StartPoint = styled.div`
    text-align: left;
`;

const EndPoint = styled.div`
    text-align: right;
`;

const TravelStart = styled.div`
    padding: 5px;
`

const TravelEnd = styled.div`
    padding: 5px;
`;

const TravelTime = styled.div`
    padding: 5px;
    text-align: center;
`;


export interface ISingleTicketItem {
    from: string;
    to: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
};


export function AvailableTicket(props: ISingleTicketItem) {
    console.log(props);
    return (
        <TicketWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <StartPoint>
                            <h5>Відправлення</h5>
                            <h6>{props.from}</h6>
                        </StartPoint>
                    </div>
                    <div className="col-12 col-md-4">
                        <TravelWrapper>
                            <TravelStart>
                                <p>{props.departureDate}</p>
                                <h3>{props.departureTime}</h3>
                            </TravelStart>
                            <TravelTime>
                                <FaBusAlt/>
                                <p>{+props.departureTime - +props.arrivalTime}</p>
                            </TravelTime>
                            <TravelEnd>
                                <p>{props.arrivalDate}</p>
                                <h3>{props.arrivalTime}</h3>
                            </TravelEnd>
                        </TravelWrapper>
                    </div>
                    <div className="col-12 col-md-3">
                        <EndPoint>
                            <h5>Прибуття</h5>
                            <h6>{props.to}</h6>
                        </EndPoint>
                    </div>
                    <div className="col-12 col-md-2">3</div>

                </div>
            </div>
        </TicketWrapper>
    )
}