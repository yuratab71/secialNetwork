import React from "react";
import {connect} from "react-redux";
import {follow, 
        unfollow, 
        setCurrentPage,
        setTotalCount,
        toggleFollowingInProgress,
        getUsers,
        getFollow,
        getUnfollow
    } from "../../Redux/usersReducer";
import Users from "./Users.jsx";
import Preloader from "../common/Preloader"
import { compose } from "redux";
import AuthRedirectComponent from "../RedirectHOC/RefirectHOC";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers();
    }  
    onPageChanged = (el) => {
        this.props.setCurrentPage(el);
        this.props.getUsers(el, this.props.pageSize);
    }
    render(){
        return <>
         {this.props.isFetching ? 
        <Preloader />
         : null}
         <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                getFollow={this.props.getFollow}
                getUnfollow={this.props.getUnfollow}
        /> 
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(
    connect(mapStateToProps, 
        {
            follow,
            unfollow,
            setCurrentPage,
            setTotalCount, 
            toggleFollowingInProgress,
            getUsers,
            getFollow,
            getUnfollow
        }),
    AuthRedirectComponent
)(UsersContainer);