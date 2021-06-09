import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from "./DialogsForm.module.css";
import {Textarea} from "../../common/formControls";
import {requiredField, maxLength} from "../../../utils/validators/validators";

const length = maxLength(15);

const AddMessageForm = reduxForm({
    form: "message"
})(DialogsForm);

function DialogsForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                component={Textarea} 
                name={"newMessageBody"} 
                placeholder={"Enter your message"}
                validate={[requiredField, length]}
                    />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
        </form>
    )
}

export default AddMessageForm;
