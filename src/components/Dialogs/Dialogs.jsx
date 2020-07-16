import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Yura</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Bohdan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ighor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi friend!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I will be glad to see yoo!</div>

            </div>
        </div>
    );
};

export default Dialogs;