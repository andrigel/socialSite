import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://i.pinimg.com/originals/95/65/85/9565857812f9e868b197aa5f17b120a2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};
export default ProfileInfo;