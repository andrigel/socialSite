import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as authThunks from '../../redux/auth/authThunks'
import {bindActionCreators} from "redux";

class HeaderContainer extends React.Component{
    render(){
        return(
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    userLogin:state.auth.login
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(authThunks,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
