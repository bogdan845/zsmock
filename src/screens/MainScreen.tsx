import React from 'react';
import {Header} from "../components/Header/Header";
import {MenuRouting} from "../routes/MenuRouting";
import {Footer} from "../components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import {APP_ROUTES} from "../utils/constants/pagesUrl/pagesUrl";
import {Blog} from "../pages/Blog/Blog";
import SinglePost from "../pages/Single/SinglePost";


export function MainScreen() {
    return (
        <>
            <Header/>
            <main>
                <MenuRouting/>
                <Switch>
                    <Route exact path={APP_ROUTES.news} component={Blog}/>
                    <Route exact path={APP_ROUTES.singleNews} component={SinglePost}/>
                </Switch>
            </main>
            <Footer copyright={"Зелений Слон 7 © 2005"} contract={"Договір публічної оферти"} contractLink={"#"}/>
        </>
    )
}