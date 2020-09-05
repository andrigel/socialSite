import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import * as profileThunks from "../../redux/thunks/profileThunks";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {withProfileRedirect} from "../../hocs/withProfileRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
    }
    render(){
        return(
            <Profile {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(profileThunks,dispatch)
})

const ProfileContainerComponent = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect,
    withProfileRedirect
)(ProfileContainer)

export default ProfileContainerComponent;
