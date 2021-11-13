import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/index';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
            </Switch>
        </BrowserRouter>
    )
}