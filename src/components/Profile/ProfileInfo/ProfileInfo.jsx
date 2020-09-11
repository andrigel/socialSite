import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile || !props.status){
        return <div><Preloader/></div>
    }
    return (
        <div>
            <div className={s.content}>
                <img src="https://i.pinimg.com/originals/95/65/85/9565857812f9e868b197aa5f17b120a2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};
export default ProfileInfo;
