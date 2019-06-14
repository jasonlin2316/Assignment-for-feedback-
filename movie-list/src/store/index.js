import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  myList: [],
  recommendationList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return Object.assign({}, state, {
        myList: action.data.mylist,
        recommendationList: action.data.recommendations
      });
    case "REMOVE_FROM_MYLIST":
      return Object.assign({}, state, {
        myList: state.myList.filter(v => v.id !== action.item.id),
        recommendationList: [...state.recommendationList, action.item]
      });
    case "ADD_TO_MYLIST":
      return Object.assign({}, state, {
        myList: [...state.myList, action.item],
        recommendationList: state.recommendationList.filter(
          v => v.id !== action.item.id
        )
      });
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
