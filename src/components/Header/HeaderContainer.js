import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as authThunks from '../../redux/thunks/authThunks'
import {bindActionCreators} from "redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuth()
    }

    render(){
        return(
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(authThunks,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
