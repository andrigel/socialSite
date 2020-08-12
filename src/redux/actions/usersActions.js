export const follow = (userId) => {
    return{
        type:'FOLLOW',
        userId:userId
    }
}

export const unfollow = (userId) => {
    return {
        type: 'UNFOLLOW',
        userId:userId
    }
}

export const setUsers = (users) => {
    return{
        type: 'SET_USERS',
        users:users
    }
}

export const setTotalUsersCount = (totalUsersCount)=> {
    return{
        type:'SET_TOTAL_USERS_COUNT',
        totalUsersCount:totalUsersCount
    }
}

export const setCurrentPage = (newPage)=> {
    return {
        type:'SET_CURRENT_PAGE',
        newPage:newPage
    }
}

export const setIsFetching = (isFetching) => {
    return{
        type:'SET_IS_FETCHING',
        isFetching:isFetching
    }
}

export const setFollowingInProgress = (userId,isFetching) => {
    return {
        type:'SET_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    }
}

