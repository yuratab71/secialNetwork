import React from 'react';
import style from "./PostForm.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLength} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/formControls";

const length = maxLength(10);

const AddPostForm = reduxForm({
    form: "post"
})(PostForm)

function PostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
              <Field 
              component={Textarea} 
              placeholder={"Add new post"}
              name={"post"} 
              validate={[requiredField, length]}/>
            </div>
            <button >Add post</button>
        </form>
    )
}

export default AddPostForm;
