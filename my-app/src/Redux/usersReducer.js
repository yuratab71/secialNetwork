import { usersAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount:30,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };   
        case SET_TOTAL_COUNT:   
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            
        return {
                ...state,
                followingInProgress: action.isFetching 
                ?[...state.followingInProgress, action.userId]
                :[...state.followingInProgress.filter(id => id !== action.userId)]
            }        

        default:
            return state;
    }
}

export default usersReducer;

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count: count
    }
}
export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then( data => {
            dispatch(toggleIsFetching(false));    
            dispatch(setUsers(data.items));
            //this.props.setTotalCount(response.data.totalCount);
    });     
}
}
export const getFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
            usersAPI.getUnfollow(id).then(resultCode => {
                if(resultCode === 0){
                    dispatch(unfollow(id))
                }
            dispatch(toggleFollowingInProgress(false, id));
                }).catch(error => {
                    dispatch(toggleFollowingInProgress(false, id));
                });
    }
}

export const getUnfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
            usersAPI.getFollow(id).then(resultCode => {
                if(resultCode === 0){
                    dispatch(follow(id))
                }
            dispatch(toggleFollowingInProgress(false, id));
                }).catch(error => {
                    dispatch(toggleFollowingInProgress(false, id));
                });
    }
}