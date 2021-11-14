import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { NewUser } from '../pages/createUser';
import { Dashboard } from '../pages/dashboard/index';
import { NotFound } from '../pages/error';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path="/new-user" component={NewUser}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}