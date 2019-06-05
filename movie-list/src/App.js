import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import MoviePage from './components/MoviePage';
import { getData } from './store/action/actionCreator'


class App extends React.Component{

  componentDidMount(){
    const action = getData();
    store.dispatch(action);
}
  render(){
  return (
      <Provider store={store}>
        <MoviePage />
      </Provider> 
  )
  }
}

export default App;
