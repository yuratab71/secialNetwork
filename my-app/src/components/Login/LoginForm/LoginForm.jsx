import React from 'react'
import { Field } from 'redux-form';
import s from "./LoginForm.module.css";
import {Input} from "../../common/formControls";
import {requiredField, maxLength} from "../../../utils/validators/validators";

const length = maxLength(8);

function LoginForm(props) {    
    return (
         <form onSubmit={props.handleSubmit}>
                <div>
                    <Field 
                    placeholder={"login"} 
                    name={"login"} 
                    component={Input}
                    validate={[requiredField, length]}/>
                </div>
                <div>
                    <Field 
                    placeholder={"password"} 
                    name={"password"} 
                    component={Input}
                    validate={[requiredField, length]}/>
                </div>
                <div>
                    <Field 
                    type={"checkbox"} 
                    name={"remembeMe"} 
                    component={Input}
                    />Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export default LoginForm
