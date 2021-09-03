import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainScreen} from "../screens/MainScreen";
import {AccScreen} from "../screens/AccScreen";
import {PAGES_URL} from "../utils/constants/appNav/pages/pages";
// for routing test
const isRegistered = false


export function AppRouting() {
    return (
        <Switch>
            {!isRegistered
                ? <>
                    <Route path={PAGES_URL.home} component={MainScreen}/>
                </>
                : <>
                    <Route path={PAGES_URL.personalAcc} component={AccScreen}/>
                </>
            }
        </Switch>
    )
}