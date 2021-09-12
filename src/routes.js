import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Repos from './pages/Repos';
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login/>
                </Route>
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/Repositorios">
                    <Repos/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}