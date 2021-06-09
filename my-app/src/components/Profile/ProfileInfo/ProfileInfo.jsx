import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.content}>
            {/*<div>
                <img className={s.wallImage} src="data:image/jpeg;base64,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"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img alt={"avatarPhoto"}  src={props.profile.photos.small} />
                <ul>
                    <li>{props.profile.fullName}</li>
                    <li>{props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJobDescription}</li>
                </ul>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    );
}

export default ProfileInfo;