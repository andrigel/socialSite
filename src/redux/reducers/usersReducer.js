import img from '../../img/userIcon.png'

const initialState = {
    users: [],
    pageSize:5,
    currentPage:1,
    totalUsersCount:0,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true}
                    return u;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false}
                    return u;
                })
            }
        }
        case 'SET_USERS': {
            return {...state, users:[...action.users]}
        }
        case 'SET_TOTAL_USERS_COUNT':{
            return {...state,totalUsersCount: action.totalUsersCount}
        }
        case 'SET_CURRENT_PAGE':{
            return{...state,currentPage: action.newPage}
        }
        default:
            return state;
    }
}
export default usersReducer;