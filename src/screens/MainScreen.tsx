import React from 'react';

import {Header} from "../components/Header/Header";
import {MenuRouting} from "../routes/MenuRouting";
import {Footer} from "../components/Footer/Footer";


export function MainScreen() {
    return (
        <>
            <Header/>
            <main>
                <MenuRouting/>
            </main>
            <Footer copyright={"Зелений Слон 7 © 2005"} contract={"Договір публічної оферти"} contractLink={"#"}/>
        </>
    )
}