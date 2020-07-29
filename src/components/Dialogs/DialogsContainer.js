import React from 'react';
import {sendMessage, updateNewMessageBody} from '../../redux/actions/dialogsActions';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{dispatch(updateNewMessageBody(body));},
        sendMessage: ()=> {dispatch(sendMessage())}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;