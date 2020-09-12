import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9aa1de84-d3f1-471f-9bd9-d1966c0d5772'
    }
});


export const usersAPI = {
    getUsers: (pageNumber, pageSize) => {
        return instance
            .get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (userId) => {
        return instance
            .post(`follow/${userId}`);
    },
    unfollow: (userId) => {
        return instance
            .delete(`follow/${userId}`);
    }
}

export const authAPI = {
    getAuth: () => {
        return instance
            .get('auth/me');
    },
    login: (email,password,rememberMe = false) => {
      return instance
          .post(`auth/login`, {email,password,rememberMe});
    },
    logout: () => {
        return instance
            .delete(`auth/login`);
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance
            .get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance
            .put(`profile/status/`, {status:status})
    }

}

