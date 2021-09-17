import React from 'react';

/*
* images
* */
import {Offers} from "./components/Offers/Offers";
import {CarParkBlock} from "./components/CarPark/CarPark";
import {OurServices} from "./components/OurServices/OurServices";
import {LatestNews} from "./components/LatestNews/LatestNews";
import {OurBenefits} from "./components/OurBenefits/OurBenefits";
import {Tickets} from "./components/Tickets/Tickets";


export function Home() {
    return (
        <>
            <Tickets/>
            <Offers/>
            <CarParkBlock/>
            <OurServices/>
            <LatestNews/>
            <OurBenefits/>
        </>
    )
}