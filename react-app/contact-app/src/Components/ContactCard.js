
import {Link} from 'react-router-dom'
import user from '../images/user.jpg' ;
// import { confirmAlert } from 'react-confirm-alert';
const ContactCard = (props) => {
  const {id , name ,email} = props.contact ;

const onDelete = (name,id) => {
  // confirmAlert({
  //   customUI: ({ onClose }) => {
  //     return (
  //       <div className='custom-ui'>
  //         <h1>DELETE CONFIRMATION ?</h1>
  //         <p>ARE YOU WANT TO DELETE {name.toUpperCase()} CONTACT?</p>
  //         <button onClick={onClose}>No</button>
  //         <button
  //           onClick={() => {
  //             props.deleteHandler(id)
  //             onClose();
  //           }}
  //         >
  //           Yes, Delete it!
  //         </button>
  //       </div>
  //     );
  //   }
  // });
}
  return (
    <div className="item">
         <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            
                <div className="header">{name}</div>
                <div>{email}</div>
           
        </div>
    <i  data-testid='deleteButton'
      className="trash alternate outline icon"
      style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
      onClick={() => onDelete(name,id)}></i>
          <Link to={`/editContact/${id}`}>
            <i
              className="edit alternate outline icon"
              style={{ color: "blue", marginTop: "7px" }}></i>
          </Link>
   </div>
  )
}

export default ContactCard ; 