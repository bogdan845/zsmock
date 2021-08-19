import React from 'react';
import {Route, Switch} from "react-router-dom";
import {TOP_NAV} from "../utils/constants/topNav/topNav";

export function MenuRouting() {
    const mainRoutes = TOP_NAV.map((item, index) => (
        <Route key={index} exact path={item.url} component={item.component}/>
    ));

    const subRoutes = TOP_NAV.map((item, index) => (
        item.dropDown && item.dropDown.length
            ? item.dropDown?.map((sub, subIndex) => (
                <Route exact path={sub.url} component={sub.component}/>
            )) : null
    ));

    return (
        <Switch>
            {mainRoutes}
            {subRoutes}
        </Switch>
    )
}