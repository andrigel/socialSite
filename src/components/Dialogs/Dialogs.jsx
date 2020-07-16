import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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

const messages = [
    {message:'Hi friend!'},
    {message:'How are you?'},
    {message:'I will be glad to see yoo!'}
]

const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Bohdan'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Ighor'}
    ];
    const messagesElements =
        messages.map(post => <Message message={post.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(user =>
                    <DialogItem name={user.name} id={user.id}/>)}
                {/*<DialogItem name='Bohdan' id='2'/>*/}
                {/*<DialogItem name='Tanua' id='3'/>*/}
                {/*<DialogItem name='Ighor' id='4'/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message='Hi friend!'/>
                <Message message='How are you?'/>
                <Message message='I will be glad to see yoo!'/>*/}
            </div>
        </div>
    );
};

export default Dialogs;