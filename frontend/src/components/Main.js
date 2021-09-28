import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/createAccount' component={CreateAccount}></Route>
        </Switch>
    )
}

export default Main;