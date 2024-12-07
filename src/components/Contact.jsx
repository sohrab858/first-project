
import { useState } from 'react'
import Lists from './Lists'
  import { v4 } from 'uuid'
import inputs from "../contacts/inputs"

import styles from "./Contacts.module.css"
function Contact() {
    const [contacts,setContacts] = useState([])
    const [alert,setAlert] = useState("")
    const[contact,setContact]=useState({
      id:"",
        name : "",
        lastName: "",
        email: "",
        phoneNumber: ""
    })



    const changeHandler = event => {
const name = event.target.name ;
const value = event.target.value ;
setContact((contact) => ({...contact ,[name]:value}))
    }
 
    const addHandler = () => {
    if(
      !contact.name ||
       !contact.lastName ||
        !contact.phoneNumber ||
         !contact.email) {
        setAlert("Please fill all fields") ;
    return
        }
         setAlert("") ;
         const newContact = {...contact , id:v4()}
         setContacts((contacts) => ([...contacts , newContact])) ;
            setContact({
                name : "",
                lastName: "",
                email: "",
                phoneNumber: ""
            })
    }
    const deleteHandler = (id) => {
const newContact = contacts.filter((contact) => contact.id !== id)
setContacts(newContact);
    }

  return (
    <div className={styles.container}> 
      <div className={styles.form}>
      {
        inputs.map((input, index) =>(
        <input
        key={index}
        type={input.type} 
        placeholder={input.placeholder} 
        name={input.name} 
        value={contact[input.name]}
        onChange={changeHandler} 
        
         />))
        }
        <button onClick={addHandler}>Add contact</button>
      </div>
      <div className={styles.alert}>
        {alert && <p>{alert}</p>}
      </div>
      <Lists contacts={contacts} deleteHandler = {deleteHandler}></Lists>
    </div>
  )
}

export default Contact
