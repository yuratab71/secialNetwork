import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { compose } from "redux";
import {setUserProfile, getProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';
import AuthRedirectComponent from "../RedirectHOC/RefirectHOC";

class ProfileContainer extends React.Component { 
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 14791;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };       
    render() { 
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,    
    AuthRedirectComponent
)(ProfileContainer);
