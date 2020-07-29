import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};
export default Profile;
