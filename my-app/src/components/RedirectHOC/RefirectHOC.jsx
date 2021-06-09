import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForAuth = (state) => ({
    isAuth: state.auth.isAuth
});

let AuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth) return <Redirect to={"login"} />
            return <Component {...this.props}/>
        } 
    }
    const ConnectedRedirectComponent = connect(mapStateToPropsForAuth)(RedirectComponent);

    return ConnectedRedirectComponent;
}

export default AuthRedirectComponent;