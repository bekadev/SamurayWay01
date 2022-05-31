import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";



export const MyPosts = () => {
    return (
        <div>
            <p>
                My posts
            </p>
            <input className={s.input} type="text"/>
            <br/>
            <button>Send</button>
            <div className={s.posts}>
                <Post message='Lorem Ipsum has been the industry standard dummy'/>
                <Post message='Lorem Ipsum has been the industrys standard dummy'/>
            </div>
        </div>
    )
}
