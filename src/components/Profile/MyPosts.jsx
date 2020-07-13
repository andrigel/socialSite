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
        <Post/>
        <Post/>
    </div>
  );
};
export default MyPosts;
