import React from "react";
import { AuthContext } from "../../context/auth";
import {ExpenseContext} from "../../context/expenses";

class Page extends React.Component {
    render() {
        return (
            <div>
                {/* <h1> {this.context.user && this.context.user.email}</h1> */}
        <h1>{this.context.expenses.length}</h1>
            </div>
        )
    }
}

//Page.contextType = AuthContext;
Page.contextType = ExpenseContext;

export default Page;