export const setUserData = (userId, email, login) => {
    return {
        type: 'SET_USER_DATA',
        userData: {userId, email, login}
    }
}
export const setIsAuth = (isAuth) => {
    return {
        type: 'SET_IS_AUTH',
        isAuth: isAuth
    }
}

export const setIsReady = (isReady) => {
    return {
        type: 'SET_IS_READY',
        isReady:isReady
    }
}