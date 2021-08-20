import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {MainScreen} from "../screens/MainScreen";
import {AccScreen} from "../screens/AccScreen";
import {APP_ROUTES} from "../utils/constants/pagesUrl/pagesUrl";
// for routing test
const isRegistered = false

export function AppRouting() {
    return (
        <Switch>
            {!isRegistered
                ? <>
                    {/*<Redirect exact to={`${HOME_URL}`}/>*/}
                    <Route path={APP_ROUTES.homeUrl} component={MainScreen}/>
                </>
                : <>
                    <Redirect exact to={APP_ROUTES.personalAcc}/>
                    <Route path={APP_ROUTES.personalAcc} component={AccScreen}/>
                </>
            }
        </Switch>
    )
}