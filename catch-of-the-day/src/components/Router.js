import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePIcker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePIcker} />
            <Route exact path="/store/:storeId" component={App} />
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
);

export default Router;