import React from 'react';
import * as DialogsActions from '../../redux/actions/dialogsActions';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {bindActionCreators, compose} from "redux";
import * as userThunks from "../../redux/thunks/usersThunks";

const mapStateToProps = (state) => {
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(DialogsActions, dispatch)
});

const DialogsContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;