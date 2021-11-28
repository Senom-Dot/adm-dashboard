import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Home } from '../pages/home';
import { NotFound } from '../pages/error';

export function Auth() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}