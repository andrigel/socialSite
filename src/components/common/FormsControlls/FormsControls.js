import React from "react";
import s from './FormsControls.module.css';

const FormControll = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')} >
            <div>{props.children}</div>
            {hasError && <span>"{meta.error}"</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input,meta,child,...restProps} = props;
    return (
        <FormControll {...props}><textarea {...input} {...restProps}/></FormControll>
    )
}

export const Input = (props) => {
    const {input,meta,child,...restProps} = props;
    return (
        <FormControll {...props}><input {...input} {...restProps}/></FormControll>
    )
}