import { createStore, combineReducers } from "redux";

const initialState = {
    count: 50,
    posts: [
        {
            id: 1,
            title: "About Redux"
        },
        {
            id: 2,
            title: "Redux Hooks"
        },
    ],
};
  
const reducer = (state = initialState) => {
    return state;
};

const countReducer = (
    state = {
      count: 50,
    }
  ) => {
    return state;
  };
  
  const postsReducer = (
    state = {
      posts: [
        {
            id: 1,
            title: "About Redux"
        },
        {
            id: 2,
            title: "Redux Hooks"
        },
      ],
    }
  ) => {
    return state;
  };
  
  const rootReducer = combineReducers({
    countReducer,
    postsReducer,
  });

const myStore = createStore(rootReducer);

export default myStore;