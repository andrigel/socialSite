import React from "react";
import {connect} from "react-redux";
import * as authThunks from '../../redux/auth/authThunks'
import {bindActionCreators} from "redux";
import Login from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(authThunks,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
