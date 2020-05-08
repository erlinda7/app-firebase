import React from "react";
import moment from 'moment'
import { ExpenseContext } from "../../context/expenses";
import Layout from '../../components/layout';
import styles from './style.module.scss';

class Page extends React.Component {
    render() {
        const {
            expenses,
        } = this.context;
        return (
            <Layout>
                <div className={StyleSheet.contanier}>
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
            </Layout>
        )
    }
}

Page.contextType = ExpenseContext;

export default Page;