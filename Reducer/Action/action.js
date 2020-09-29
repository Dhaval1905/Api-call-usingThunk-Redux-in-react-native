
import {DATA_IS_REQUSTED,DATA_START_FETCH} from "./type";
//console.log("Data start fetch")

export const dataIsRequsted = () => ({
  type: DATA_IS_REQUSTED
})

export const dataStartFetch = (json) => ({
    type: DATA_START_FETCH,
    payload:json
})

export const fetchData = () => {
  console.log("Data start request")
  return async dispatch => {
    dispatch(dataIsRequsted())
    try{
        console.log('In to try block')
        let response = 
        await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await response.json();
        console.log('After await value is',json)
        dispatch(dataStartFetch(json))
        console.log("Data start to fetch")
    }
    catch{
      console.log("error")
    }
    //console.log("Data start to fetch",json.id)
      
  }
  
}