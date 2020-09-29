import  { DATA_IS_REQUSTED,DATA_START_FETCH } from "./Action/type";

const initialState={
  data:[]
}

const dataState = (state = initialState , action) =>{
  switch (action.type){
      case DATA_IS_REQUSTED:
      return { 
        ...state
       };
      case DATA_START_FETCH:
      return { 
        ...state,
          data:action.payload
       };
      
      default:
      return state; 
      
  }
      
  
}


export default dataState