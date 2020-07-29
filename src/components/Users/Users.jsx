import React from "react";
import s from './Users.module.css'
import img from "../../img/userIcon.png";
import * as axios from "axios";

const Users = (props) =>
{
    const {currentPage} = props;
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props)
    return <div>
        <div>
            {pages.map(p => <span key={p} onClick={(e) => {
                props.onPageChanged(p)
            }} className={p === currentPage ? s.selectedPage : ''}>{p}</span>)}
        </div>
        {props.users? props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={img} className={s.userPhoto}/></div>
                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                </span>
                <span>
                    <div>{"u.country"}</div>
                    <div>{"u.city"}</div>
                </span>
            </span>
        </div>): 'fetching data'}
    </div>
}

export default Users;