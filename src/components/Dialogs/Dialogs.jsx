import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
    const sendMessage = () => {
        props.sendMessage();
    }

    const {dialogs, messages} = props;
    const messagesElements =
        messages.map(post => <Message message={post.message}/>);
    const {newMessageBody} = props;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(user =>
                    <DialogItem name={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <DialogsReduxForm/>
            </div>
        </div>
    );
};

const DialogsForm = (props) => {
    return <form>
        <div>
            <Field placeholder={'Enter your message...'} component={'input'}/>
        </div>
        <div>
            <button type={'submit'}>Send</button>
        </div>
    </form>
}

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm)

export default Dialogs;