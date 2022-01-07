import { createStore, combineReducers } from "redux";

const initialState = {
    count: 50,
    posts: [],
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    case 'GET_POST_DATA':
      return {
        ...state, posts: action.payload
      };
    default:
      return state;
  }
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

const myStore = createStore(reducer);

export default myStore;