
import {Link} from 'react-router-dom'
import ContactCard  from './ContactCard'
const ContactList = (props) => {

    return (
        <div className="main">
        <h2>
          Contact List
          <Link to="/addContact">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </h2>
        <div className="ui celled list">
        {
          props.contacts  &&  props.contacts.length ?   props.contacts.map(contact=>(
            <ContactCard
            contact={contact}
            deleteHandler={props.deleteHandler}
            key={contact.id}
          />
         ))
          : <h2>No Contacts Added </h2>
        }

          
        </div>
      </div>
    )
}

export default ContactList ;