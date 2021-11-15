import React from 'react';

import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { NewUser } from '../pages/createUser';
import { Dashboard } from '../pages/dashboard/index';
import { NotFound } from '../pages/error';
import { Settings } from '../pages/settings';
import { Users } from '../pages/users';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path="/users" component={Users}/>
                <Route path="/new-user" component={NewUser}/>
                <Route path="/settings" component={Settings}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}