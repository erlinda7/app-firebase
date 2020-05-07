import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";


import { watchUserChanges, watchExpenses, createExpense, deleteExpense } from './services/firebase';

watchUserChanges((user) => {
    console.log(user);

    watchExpenses((expenses)=>{
        console.log(expenses);
        
    })
});


setTimeout(()=>{
    createExpense({
        amount:12,
        date: Date.now(),
        description: 'hola'
    });
}, 2000)

setTimeout(()=>{
    deleteExpense("B1AHFQ26Sy3loftdQ8SM");
}, 2000)

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
