import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth'

class GuardRoute extends React.Component {


    render() {
        const {
            type,
            ...rest  //todo lo que sobra de props menos el atributo type
        } = this.props

        const {
            isLoggedIn,
        } = this.context;


            if (type === "private" && !isLoggedIn) {
                return <Redirect to="/login" />
            } else if (type === "public" && isLoggedIn) {
                return <Redirect to="/dashboard" />
            }
        

        return (
            <Route {...rest} />
        )
    }
}


GuardRoute.contextType = AuthContext;

export default GuardRoute;