import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import * as profileThunks from "../../redux/thunks/profileThunks";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render(){
        return(
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    userId:state.auth.userId,
    login:state.auth.login
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(profileThunks,dispatch)
})

const WithUrlContainerComponent = withRouter(ProfileContainer)

export default  connect(mapStateToProps,mapDispatchToProps)(WithUrlContainerComponent);