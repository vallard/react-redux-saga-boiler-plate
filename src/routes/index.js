import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';
import NotFound from '../components/notfound';

const allRoutes = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>

export default allRoutes