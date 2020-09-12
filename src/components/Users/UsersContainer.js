import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {bindActionCreators} from "redux";
import * as userThunks from '../../redux/users/usersThunks'
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(pageNumber,this.props.pageSize)
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

/*const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalItemsCount: getTotalUsersCount(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(userThunks, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);