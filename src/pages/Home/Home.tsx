import React from 'react';

/*
* images
* */
import {Offers} from "./Layouts/Offers";
import {CarPark} from "./Layouts/CarPark";
import {Services} from "./Layouts/Services";
import {LatestNews} from "./Layouts/LatestNews/Container";
import {OurBenefits} from "./Layouts/OurBenefits/OurBenefits";


export function Home() {
    return (
        <>
            <Offers/>
            <CarPark/>
            <Services/>
            <LatestNews/>
            <OurBenefits/>
        </>
    )
}