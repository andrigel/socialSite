import React from "react";
import MyPosts from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPosts/>
        </div>
    );
};
export default Profile;
