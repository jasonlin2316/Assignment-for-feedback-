import {createStore,applyMiddleware} from 'redux';
// import data from "../data/moviedata.json";
import thunk from 'redux-thunk'

const initialState = {
    //  myList: [...data.mylist],
    //  recommendationList: [...data.recommendations]
    myList:[],
    recommendationList:[]
   
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
         case "CHANGE_DATA" :
             return Object.assign({},state,{myList:action.data.mylist,recommendationList:action.data.recommendations})
        case "REMOVE_FROM_MYLIST":
            return Object.assign({}, state, {myList: state.myList.filter(v => v.id !== action.item.id)});
        case "ADD_TO_MYLIST":
            return Object.assign({}, state, {myList: [...state.myList, action.item]});
        default:
            return state;
    }
    
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;