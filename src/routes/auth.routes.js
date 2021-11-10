import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Home } from '../pages/home';

export function Auth() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}