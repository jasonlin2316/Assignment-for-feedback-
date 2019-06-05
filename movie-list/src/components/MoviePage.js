import React from "react";
import TempList from "./TempList";
import logo from '../../src/data/Netflix_Logo.png'
import {connect} from 'react-redux';
import {Title, Ul, Li} from '../styled-component/styled-component';
const MoviePage = (props) => {
  const { myList, recommendationList, handleAdd, handleRemove } = props
  return (
    <div className="movie-page-container" style={{backgroundColor:'black'}}>
      <img src={logo} style={{width:'auto',height:'100px'}} alt='logo' />
      <TempList listName="My List" list={myList} callback={handleRemove}/>
      <TempList listName="Recommendations" list={recommendationList} callback={handleAdd}/>
      <Title>My List Title</Title>
        <Ul>
            {myList.map(item => <Li key={item.id}>{item.title}</Li>)}
        </Ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
      recommendationList: state.recommendationList,
      myList:state.myList
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleAdd: (item) => {
          return dispatch({type: "ADD_TO_MYLIST", item: item})
      },
      handleRemove: (item) => {
          return dispatch({type: "REMOVE_FROM_MYLIST", item: item})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
