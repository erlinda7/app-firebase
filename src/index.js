import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const root = (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(root, document.getElementById('root'));
