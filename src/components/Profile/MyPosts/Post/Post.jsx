import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
        <div>
            <div className={s.item}>
                <img src='https://proprikol.ru/wp-content/uploads/2020/02/krasivye-kartinki-prosti-menya-1.jpg'  alt='picture not found'/>
                post 1
            </div>
            <div>
            <span>like</span>
            </div>
        </div>
    </div>
  );
};
export default Post;
