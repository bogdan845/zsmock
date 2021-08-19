import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {MainScreen} from "../screens/MainScreen";
import {AccScreen} from "../screens/AccScreen";
import {HOME_URL, PERSONAL_ACC} from "../utils/constants/pagesUrl/pagesUrl";
// for routing test
const isRegistered = false

function AppRouting() {
    return (
        <Switch>
            {!isRegistered
                ? <>
                    {/*<Redirect exact to={`${HOME_URL}`}/>*/}
                    <Route path={`${HOME_URL}`} component={MainScreen}/>
                </>
                : <>
                    <Redirect exact to={`${PERSONAL_ACC}`}/>
                    <Route path={`${PERSONAL_ACC}`} render={props => <AccScreen/>}/>
                </>
            }
        </Switch>
    )
}


export default AppRouting;