import React from 'react';
import {Header} from "../components/Header/Header";
import {MenuRouting} from "../routes/MenuRouting";
import {Footer} from "../components/Footer/Footer";
import {PageRouting} from "../routes/PageRouting";


export function MainScreen() {
    return (
        <>
            <Header/>
            <main>
                <MenuRouting/>
                <PageRouting/>
            </main>
            <Footer contractLink={"https://drive.google.com/file/d/1mOMDtPkLjt9T3nfUFrBPdj2FHHStcxwH/view"}/>
        </>
    )
}