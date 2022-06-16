import { render,screen ,fireEvent} from "@testing-library/react";
import  ContactCard from '../Components/ContactCard';
 import { v4 as uuid} from 'uuid';
import {BrowserRouter} from 'react-router-dom' ;

test('test basic render ',()=> {
    let contact = {
        name:'mena morcos',
        email:'mena@gmail.com',
        id:uuid()
    };
    render( <BrowserRouter>
                  <ContactCard contact={contact} />
           </BrowserRouter>)
    const nameText = screen.getByText(contact.name) ;
    const emaiText = screen.getByText(contact.email) ;
    expect(nameText).toBeInTheDocument();
    expect(emaiText).toBeInTheDocument();
})

test('test onclick delete show confirmation dialog', async () => {
    
    let contact = {
        name:'mena morcos',
        email:'mena@gmail.com',
        id:uuid()
    };
    render( <BrowserRouter>
                  <ContactCard contact={contact} />
           </BrowserRouter>)
      fireEvent.click(screen.getByTestId('deleteButton'))
     const deleteConfirm = screen.getByText('DELETE CONFIRMATION ?');
     expect(deleteConfirm).toBeInTheDocument() ;
});
