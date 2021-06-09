import React from 'react'
import styles from "./formControl.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    
    
    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            </div>
                {props.children}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
            
            
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}
