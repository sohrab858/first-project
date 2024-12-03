import React from 'react'
import { useState } from 'react'
import ContactsList from "./ContactsList.jsk"
const input = [
    {type:"text",name:"name" , placeholder:"Name"}
    {type:"text",name:"lastName" , placeholder:"Last Name"}
    {type:"email",name:"email" , placeholder:"Email"}
    {type:"number",name:"phoneNumber" , placeholder:"phoneNumber"}


]
function Contact() {
    const [contacts,setContants] = useState([])
    const [alert,setAlert] = useState("")
    const[contact,setContact]=useState({
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
    if(!contact.name || !contact.lastName || !contact.phoneNumber || !contact.email) {
        setAlert("Please fill all fields") ;
    return
        }
         setAlert("") ;
            setContants((contacts) => ([...contacts , contact])) ;
            setContact({
                name : "",
                lastName: "",
                email: "",
                phoneNumber: ""
            })
    
    
    }

  return (
    <div> 
      <div>
      {inputs.map(input) =>(<input type={input.type} placeholder='{input.placehod' value={input.value name={input.name}/>)}
        <input type='text' placeholder='Name' name='name' value={contact.name}  onChange={changeHandler}/>
        <input type='text' placeholder='Last Name' name='lastName' value={contact.lastName} onChange={changeHandler} />
        <input type='email' placeholder='Email' name='email' value={contact.email}  onChange={changeHandler}/>
        <input type='number' placeholder='Phone Number' name='phoneNumber' value={contact.phoneNumber} onChange={changeHandler} />
        <button onClick={addHandler}>Add contact</button>
      </div>
      <div>
        {alert && <p>{alert}</p>}
      </div>
      <ContactsList contact={contacts}></ContactsList>
    </div>
  )
}

export default Contact
