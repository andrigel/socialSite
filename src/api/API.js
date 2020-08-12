import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '6f2d463f-aabe-4311-bd36-7e5a20ec97e2'
    }
});


export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (userId) => {
        return instance
            .post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance
            .delete(`follow/${userId}`)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance
            .get('auth/me')
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance
            .get(`profile/${userId}`)
    }
}

