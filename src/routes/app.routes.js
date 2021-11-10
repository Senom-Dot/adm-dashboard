import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/index';
import { NewUser } from '../pages/new-user';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path="/new-user" component={NewUser}/>
            </Switch>
        </BrowserRouter>
    )
}