import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
        <div>
            <div className={s.dialog}>
                <img src='https://proprikol.ru/wp-content/uploads/2020/02/krasivye-kartinki-prosti-menya-1.jpg'  alt='picture not found'/>
                {props.message}
            </div>
            <div>
            <span>{props.likes} likes</span>
            </div>
        </div>
    </div>
  );
};
export default Post;
