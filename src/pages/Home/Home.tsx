import React from 'react';

/*
* images
* */
import {Offers} from "./Layouts/Offers/Offers";
import {CarParkBlock} from "./Layouts/CarPark/CarPark";
import {Services} from "./Layouts/Services/Services";
import {LatestNews} from "./Layouts/LatestNews/LatestNews";
import {OurBenefits} from "./Layouts/OurBenefits/OurBenefits";
import {Tickets} from "./Layouts/Tickets/Tickets";


export function Home() {
    return (
        <>
            <Tickets/>
            <Offers/>
            <CarParkBlock/>
            <Services/>
            <LatestNews/>
            <OurBenefits/>
        </>
    )
}