import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' likes='1'/>
                <Post message="It's my first post" likes='21'/>
            </div>
        </div>
    );
};
export default MyPosts;
