import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isAuthReady:state.auth.isReady
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
/*            if(!this.props.isAuthReady) return <Preloader/>*/
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}