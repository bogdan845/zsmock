import React from 'react';

/*
* images
* */
import {Offers} from "./Layouts/Offers/Offers";
import {CarParkBlock} from "./Layouts/CarPark/CarPark";
import {Services} from "./Layouts/Services/Services";
import {LatestNews} from "./Layouts/LatestNews/LatestNews";
import {OurBenefits} from "./Layouts/OurBenefits/OurBenefits";
import {SearchTickets} from "./Layouts/SearhTickets/SearchTickets";


export function Home() {
    return (
        <>
            <SearchTickets/>
            <Offers/>
            <CarParkBlock/>
            <Services/>
            <LatestNews/>
            <OurBenefits/>
        </>
    )
}