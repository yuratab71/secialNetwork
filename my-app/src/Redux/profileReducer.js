import {profileAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "Blabla", likesCount: 69},
        {id: 3, message: "Yo, wat`s up?", likesCount: 69},
        {id: 4, message: "Hello?", likesCount: 69},
        {id: 5, message: "Did you ge up?", likesCount: 69}
    ],
    newPostText: "some txt",
    profile: null,
    status: ""
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export default profileReducer;

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const updateStatusActionCreator = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
}

export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
    }
}
export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data));
        })
    }  
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        })
    }
}

export const updateStatus = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus(status).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            } else alert("Sorry, something going wrong(((")
        }) 
    }
}
