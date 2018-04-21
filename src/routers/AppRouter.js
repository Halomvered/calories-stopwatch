import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage'
import app from '../App';

const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={app} exact={true} />
                <Route path="/new" component={app} />
                <Route path="/calendar" component={app} />
                <Route path="/profile" component={app} />
                <Route component={NotFoundPage} />
            </Switch>
    </BrowserRouter>
)

export default AppRouter;