import React from "react";
import moment from 'moment'
import { ExpenseContext } from "../../context/expenses";
import Layout from '../../components/layout';
import styles from './style.module.scss';
import Expense from '../expense';

class Page extends React.Component {
    state = {
        expenseId: null
    }
    render() {
        const {
            expenses,
        } = this.context;

        const {
            expenseId,
        } = this.state

        const expense = expenses.find(n => n.id === expenseId)
        
        return (
            <Layout>
                <div className={styles.contanier}>
                    <table className={styles.table} cellSpacing="0">
                        <thead className={styles.tableHeader}>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            {
                                expenses.map(row => {
                                    return (
                                        <tr
                                            key={row.id}
                                            className={styles.tableRow}
                                            onClick={() => this.setState({ expenseId: row.id })}
                                        >
                                            <td>{moment(row.date).format('dd mmm yyyy hh:mm a')}</td>
                                            <td>{row.type}</td>
                                            <td>{row.amount}</td>
                                            <td>{row.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {expense && 
                <Expense
                    expense={expense}
                    onClose={()=>this.setState({expenseId:null})}
                />
                }
            </Layout>
        )
    }
}

Page.contextType = ExpenseContext;

export default Page;