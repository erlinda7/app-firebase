import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard";

const root = (
    <BrowserRouter>
        <Switch>
            <Route type="private" path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(root, document.getElementById('root'));
