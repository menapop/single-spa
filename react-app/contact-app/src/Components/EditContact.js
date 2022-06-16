import useSetState ,{ADD,SET,UPDATE} from '../CustomHooks/UseSetState.js';
import {useNavigate, useParams} from 'react-router-dom'; 
import { useEffect } from 'react';
import { v4 as uuid} from 'uuid';
import APIENDPOINT  from '../APIENDPOINT.js';
import DynamicField from './DynamicField.js'
const EditContact = (props) => {

 const navigate = useNavigate();
 const initialState = []
 const [state,setState] = useSetState (initialState);
 const {id } = useParams();

 const Update = (e) => {
  e.preventDefault();
  const res = {} ;
  state.forEach(element => {
    res[element.name]= element.value;
  });
  if (!res.name || !res.email || res.name === "" || state.email === "") {
          alert("name and email Fields fields are mandatory!");
    return;
  }
   props.editContactHandler(res);
   navigate('/') ;
 };
 
  
 const handleChange = (event) =>{
  
  const d = {type:UPDATE , payload : { id: event.target.dataset.id, name :event.target.name , value : event.target.value}}
  setState (d) ;
 }


 
 const addfield = () =>{
  const d = {type:ADD , payload : { id: uuid(), name : '', value : ''}}
  setState (d) ;
 }

 const onTypeChange = (event) =>{
  const old = state.find(a=>a.id===event.target.dataset.id) ;
  const d = {type:UPDATE , payload : { id: event.target.dataset.id, name :event.target.value , value : old.value}}
  setState (d) ;
 }

 const onValueChange = (event) =>{
  debugger
  const old = state.find(a=>a.id===(event.target.dataset.id)) ;
  const d = {type:UPDATE , payload : { id: event.target.dataset.id, name :old.name , value : event.target.value}}
  setState (d) ;
 }



  useEffect(()=>{
    fetch(`${APIENDPOINT}contacts/${id}`)
    .then(r=>r.json())
    .then (data=>{
      const arr = [] 
      Object.keys(data).forEach(key=>{
        const d = { id: uuid(), name : key, value : data[key]}
        arr.push(d) ;
      });
      setState({type :SET , payload : arr})
    })
  },[])


   return (
    <div className="ui main">
    <h2>Edit Contact</h2>
    <form className="ui form" onSubmit={Update} >
      {
        state.map(input=>(
         input.name ==='name' || input.name ==='email' ?
         <div    className="field">
            <label>{input.name}</label>
            <input
              key={input.id}
              data-id = {input.id}
              type="text"
              name={input.name}
              placeholder={input.name}
              value={input.value}
              onChange={ handleChange}
            />
         </div>
         :  
          input.name ==='id' ? null :
         <DynamicField key={input.id} onTypeChange={onTypeChange}   onValueChange={onValueChange}  id={input.id}  name={input.name} value={input.value}/>
        ))
      }
       <br/>
      <button type='button' onClick={addfield}>ADD Optional Field</button>
      <br/>
      <br/>
      <button type='submit' className="ui button blue">UPDATE</button>
    </form>
  </div>
   );
}

export default EditContact ;