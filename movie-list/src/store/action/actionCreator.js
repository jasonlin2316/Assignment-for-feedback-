
import axios from 'axios'

export const changedata = (data) => ({
    type: 'CHANGE_DATA',
    data
})

export const getData = () =>{
    return (dispatch) =>{
      axios.get('moviedata.json')
      .then((res)=>{
          const data = res.data;
          console.log(data)
          const action = changedata(data);
          dispatch(action)
      })
      .catch(()=>{
          console.log('error')
      })
    }
     
  }