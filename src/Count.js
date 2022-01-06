import React from "react";
import { useSelector } from "react-redux";

function Count() {
    const count = useSelector((state) => state.countReducer.count);
    const posts = useSelector((state) => state.postsReducer.posts);
    return (
        <>
            <div>Count with useSelector: {count}</div>
            <ui>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ui>
        </>
    );
}

export default Count;
