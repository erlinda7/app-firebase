import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

import { AuthContextProvider } from './context/auth'
import {ExpenseContextProvider} from './context/expenses'

const root = (
    <BrowserRouter>
        <AuthContextProvider>
            <ExpenseContextProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </ExpenseContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)

ReactDOM.render(root, document.getElementById('root'));
