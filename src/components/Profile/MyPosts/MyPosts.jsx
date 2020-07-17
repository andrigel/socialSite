import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

/*const posts = [
    {message:'Hi, how are you', likes:'1'},
    {message:'It\'s my first post', likes:'21'},
    {message:'Random message', likes:'21'},
    {message:'Some another messaga', likes:'21'}
]*/

const MyPosts = (props) => {
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
                {props.posts.map(post => <Post message={post.message} likes={post.likes}/>)}
            </div>
        </div>
    );
};
export default MyPosts;
