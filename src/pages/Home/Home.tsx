import React from 'react';

/*
* images
* */
import {Offers} from "./Layouts/Offers";
import {CarParkBlock} from "./Layouts/CarPark";
import {Services} from "./Layouts/Services";
import {LatestNews} from "./Layouts/LatestNews";
import {OurBenefits} from "./Layouts/OurBenefits/OurBenefits";


export function Home() {
    return (
        <>
            <Offers/>
            <CarParkBlock/>
            <Services/>
            <LatestNews/>
            <OurBenefits/>
        </>
    )
}