import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {bindActionCreators} from "redux";
import * as userThunks from '../../redux/thunks/usersThunks'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(this.props.currentPage,this.props.pageSize,pageNumber)
    }

    follow = (userId) => {
        this.props.follow(userId)
    }
    unfollow = (userId) => {
        this.props.unfollow(userId)
    }

    render() {
        return (
            <Users {...this.props} onPageChanged={this.onPageChanged} follow={this.follow} unfollow={this.unfollow}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(userThunks, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);