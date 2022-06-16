import Header  from './Components/Header';
import './App.css';
import { v4 as uuid} from 'uuid';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact' ;
import { useEffect, useState } from 'react';
import EditContact from './Components/EditContact';
import APIENDPOINT from './APIENDPOINT';
function App() {

  const addContactHandler =  (contact) =>{
     fetch(`${APIENDPOINT}contacts`,{
      method:'POST',
      body: JSON.stringify({
        id: uuid(),
       ...contact
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setContacts([...contacts, data]);
    });
    
  }
  const editContactHandler =  (contact) =>{
    fetch(APIENDPOINT+'contacts/'+ contact.id,{
     method:'PUT',
     body: JSON.stringify({
       id: contact.id,
       ...contact
   }),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
 }
   })
   .then(r=>r.json())
   .then(data=>{
    const { id } = data ;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...data } : contact;
      })
    );
   });
   
 }

 const removeContactHandler =  (id) => {
  fetch(APIENDPOINT+'contacts/'+id,{
    method:'DELETE',
     headers: {
    "Content-type": "application/json; charset=UTF-8"
}
  })
  .then(r=>r.json())
  .then(d=>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
      });
    setContacts(newContactList);
  })
};
  const [contacts, setContacts] = useState([]);
  

  const getContacts = () => {
    fetch(APIENDPOINT+'contacts')
    .then(r=>r.json())
    .then(data=>{
      setContacts(data)
    })
  }


  useEffect(()=>{
    getContacts() ;
  },[])


  return (
    <div className="ui container">
      <Header />
      
        <BrowserRouter>
        <Routes>
           <Route path="/"  element={<ContactList  contacts = {contacts}  deleteHandler={removeContactHandler}/>} />
           <Route path="/addContact"   element={<AddContact  addContactHandler={addContactHandler} />} />
           <Route path="/editContact/:id"   element={<EditContact  editContactHandler={editContactHandler} />} />
        </Routes>
       </BrowserRouter>
       
         
     
    </div>
  );
}

export default App;
