import React from "react";
import {Route, Switch} from "react-router-dom";
import {PAGE_ROUTES} from "../utils/constants/pageRoutes/pageRoutes";

export function PageRouting() {
    const pageRoutes = PAGE_ROUTES.map((item, index) => {
        return (
            <Route
                key={index}
                exact
                path={item.url}
                component={() => item.component({title: item.label})}
            />
        )
    });

    return (
        <Switch>
            {pageRoutes}
        </Switch>
    );
}