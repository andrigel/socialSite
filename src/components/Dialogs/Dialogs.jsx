import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControlls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utills/validators/validators";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    const sendMessage = (values) => {
        if(values.newMessageBody) props.sendMessage(values.newMessageBody);
    }

    const {dialogs, messages} = props;
    const messagesElements =
        messages.map(post => <Message message={post.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(user =>
                    <DialogItem name={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <DialogsReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message...'} name={'newMessageBody'}
                   validate={[requiredField,maxLength50]}
                   component={TextArea}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm)

export default Dialogs;