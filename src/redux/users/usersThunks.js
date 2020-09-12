import {usersAPI} from "../../api/API";
import * as usersActions from "./usersActions";

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(usersActions.setIsFetching(true));
        dispatch(usersActions.setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(usersActions.setUsers(data.items));
            dispatch(usersActions.setTotalUsersCount(data.totalCount));
            dispatch(usersActions.setIsFetching(false));
        });
    }
}

export const onPageChanged = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(usersActions.setIsFetching(true))
        usersAPI.getUsers(pageNumber,pageSize).then(data => {
            dispatch(usersActions.setUsers(data.items))
            dispatch(usersActions.setTotalUsersCount(data.totalCount))
            dispatch(usersActions.setIsFetching(false))
        });
        dispatch(usersActions.setCurrentPage(pageNumber))
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(usersActions.setFollowingInProgress(userId,true))
        usersAPI.follow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) { dispatch(usersActions.follow(userId))}
                dispatch(usersActions.setFollowingInProgress(userId,false))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(usersActions.setFollowingInProgress(userId,true));
        usersAPI.unfollow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) { dispatch(usersActions.unfollow(userId)) }
                dispatch(usersActions.setFollowingInProgress(userId,false))
            });
    }
}