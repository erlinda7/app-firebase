import React from "react";
import { startUi } from "../../services/firebase";

class Page extends React.Component {

    componentDidMount() {
        startUi('#firebaseui') ;
    }

    render() {
        return (
            <div id="firebaseui"></div>
        )
    }
}

export default Page;