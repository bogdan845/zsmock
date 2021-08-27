import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainScreen} from "../screens/MainScreen";
import {AccScreen} from "../screens/AccScreen";
import {APP_URLS} from "../api/constants/urls";
// for routing test
const isRegistered = false


export function AppRouting() {
    return (
        <Switch>
            {!isRegistered
                ? <>
                    <Route path={APP_URLS.pages.homeUrl} component={MainScreen}/>
                </>
                : <>
                    <Route path={APP_URLS.pages.personalAcc} component={AccScreen}/>
                </>
            }
        </Switch>
    )
}