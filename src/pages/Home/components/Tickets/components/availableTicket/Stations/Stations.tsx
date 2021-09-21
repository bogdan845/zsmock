import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 0 0 5px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--text-color);
  max-width: 200px;
  width: 100%;
`;

const Option = styled.option`
  color: var(--tex-color);
`;


interface IProps {
    data: {
        tripId: number
        cityId: number
        pointId: number
        cityName: string
        stationName: string
        departureDate: string
        departureTime: string
        stationDelay: string
    }[]
}


export function AvailableStations(props: IProps) {
    const renderItem = props.data.map((item, index) => {
        return (
            <Option key={index} value={item.cityId}>
                {item.stationName}, {item.cityName}
            </Option>
        )
    });

    return (
        <Select>
            {renderItem}
        </Select>
    )
}