import React from "react";
import s from "./Profile.module.css";
import MyPosts from "../MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <img src="https://i.pinimg.com/originals/95/65/85/9565857812f9e868b197aa5f17b120a2.jpg" />
      </div>
      <div>ava + description</div>
        <MyPosts/>
    </div>
  );
};
export default Profile;
