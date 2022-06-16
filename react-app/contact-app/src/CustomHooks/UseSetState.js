import { useReducer  } from "react"
import { v4 as uuid} from 'uuid';
export const ADD='ADD';
export const UPDATE='UPDATE'  ;
export const  SET = 'SET' ;
const reducer =  ( state = [], action) =>
{
 if(action.type===ADD)
     return [...state, {id:uuid(),name:action.payload.name || '', value:action.payload.value|| ''}]
else if (action.type===UPDATE) {
   return state.map(obj=>{
     if(obj.id===action.payload.id)
     return {id :obj.id ,name:action.payload.name,value:action.payload.value}
     return obj ;
   })
}
else if(action.type===SET)
{
  return [...action.payload]
}
 else 
   return state
}
  


const SetSetState =  (initialState) =>{

    const [state,dispatch] = useReducer(reducer,initialState) ;

    const SetUpdateState = ({type , payload}) => dispatch({type:type , payload:payload});

    return  [state,SetUpdateState]
}

export default SetSetState;