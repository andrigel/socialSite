import React from "react";
import s from "./MyPosts.module.css";
import Post from "./MyPosts/Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>My posts</div>
      <div className={s.content}>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
      </div>
        <Post message='Hi, how are you' likes='1'/>
        <Post message="It's my first post" likes='21'/>
    </div>
  );
};
export default MyPosts;
