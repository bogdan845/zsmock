import React from "react";
import {FaBusAlt} from "react-icons/fa";
import {AvailableStations} from "./Stations/Stations";
import {BREAKPOINTS} from "../../../../../../components/GlobalStyles/constants/breakpoints/breakpoints";
import styled from "styled-components";

const SingleTicket = styled.div`
  padding: 20px 0;
  display: flex;
  border-radius: 5px;
  border: 1px solid var(--green);
  color: var(--green);
  margin: 40px auto 0;
  max-width: 1140px;
  width: calc(100% - 30px);
  background-color: #fff;

  &:first-child {
    margin-top: 0;
  }
`;

const TravelWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (min-width: ${BREAKPOINTS.sm}) {
    margin: 0;
  }
}
`;

const StartPoint = styled.div`
  text-align: left;
`;

const EndPoint = styled.div`
  text-align: right;
`;

const TravelStart = styled.div`
  padding: 5px;
  color: var(--text-color);
`;

const TravelEnd = styled.div`
  padding: 5px;
  color: var(--text-color);
  text-align: right;
`;

const TravelTime = styled.div`
  padding: 5px;
  text-align: center;
  color: var(--green);
  font-size: 1.25rem;

  p {
    margin-bottom: 0;
  }
`;


export interface ISingleTicketItem {
    from: string;
    stationsFrom: [];
    to: string;
    stationsTo: [];
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    travelTime: () => string;
}


export function AvailableTicket(props: ISingleTicketItem) {
    return (
        <SingleTicket>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <StartPoint>
                            <h5>Відправлення</h5>
                            <h6>{props.from}</h6>
                            <AvailableStations data={props.stationsFrom}/>
                        </StartPoint>
                    </div>
                    <div className="col-12 col-md-6">
                        <TravelWrapper>
                            <TravelStart>
                                <p>{props.departureDate}</p>
                                <h5>{props.departureTime}</h5>
                            </TravelStart>
                            <TravelTime>
                                <FaBusAlt/>
                                <p>{props.travelTime()}</p>
                            </TravelTime>
                            <TravelEnd>
                                <p>{props.arrivalDate}</p>
                                <h5>{props.arrivalTime}</h5>
                            </TravelEnd>
                        </TravelWrapper>
                    </div>
                    <div className="col-12 col-md-3">
                        <EndPoint>
                            <h5>Прибуття</h5>
                            <h6>{props.to}</h6>
                            <AvailableStations data={props.stationsTo}/>
                        </EndPoint>
                    </div>
                    <div className="col-12 col-lg-2 mt-4">Buy tickets</div>
                </div>
            </div>
        </SingleTicket>
    )
}