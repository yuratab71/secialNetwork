import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": "5ab87a79-9d5a-4929-bc6d-2416dcc837bc"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export  const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    getFollow(id){
        return instance.post(`follow/${id}`)
        .then(responce => responce.data.resultCode);
    },
    getUnfollow(id){
        return instance.delete(`follow/${id}`)
        .then(responce => responce.data.resultCode);
    },
    getAuth(){
        return instance.get(`auth/me`)
        .then(responce => responce.data);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
        .then( response => response.data )
    },
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`)
        .then( responce => responce.data );
    },
    updateStatus(status){
        return instance.put("/profile/status", {status: status})
    }
    
}

 
