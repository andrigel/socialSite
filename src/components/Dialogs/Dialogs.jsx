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

const someElement2 = React.createRef();

const addPost = () =>
{
    const text = someElement2.current.value;
    alert(text);
}

const Dialogs = (props) => {
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
                <div>
                    <textarea ref={someElement2} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;