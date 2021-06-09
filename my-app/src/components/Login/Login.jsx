import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";

const ReduxLoginForm =  reduxForm({
    form: "loginForm"
})(LoginForm);

const onSubmit = (formData) => {
    console.log(formData);
}

const Login = () => { 
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;