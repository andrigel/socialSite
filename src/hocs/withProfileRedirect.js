import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        userId: state.auth.userId
    }
}

export const withProfileRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.match.params.userId)
                return <Redirect to={`/profile/${this.props.userId}`}/>
            return <Component {...this.props}/>
        }
    }

    const ConnectedProfileRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedProfileRedirectComponent;
}