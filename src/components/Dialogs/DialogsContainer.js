import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/actions/DialogsActions';

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

    const updateNewMessageText = (e) =>
    {
        props.dispatch(updateNewMessageBodyActionCreator(e.target.value))
    }

    const sendMessage = () =>
    {
        props.dispatch(sendMessageActionCreator())
    }

    const {dialogs, messages} = props;
    const messagesElements =
        messages.map(post => <Message message={post.message}/>);
    const{newMessageBody} = props;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(user =>
                    <DialogItem name={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Enter message...' onChange={updateNewMessageText} value={newMessageBody} />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;