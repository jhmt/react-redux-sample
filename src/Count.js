import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Count() {
    const count = useSelector((state) => state.count);
    // const posts = useSelector((state) => state.postsReducer.posts);

    const dispatch = useDispatch();
    const increase = () => {
        dispatch({ type: "INCREASE_COUNT" });
    };
    const decrease = () => {
        dispatch({ type: "DECREASE_COUNT" });
    };
    return (
        <>
            <div>Count with useSelector: {count}</div>
            <button onClick={increase}>Up</button>
            <button onClick={decrease}>Down</button>
        </>
    );
}

export default Count;
