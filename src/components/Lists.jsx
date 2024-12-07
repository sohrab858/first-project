import React from 'react'
import ContactItem from './ContactItem'

import styles from "./Lists.module.css"


function Lists({contacts , deleteHandler}) {
    return (

    <div className={styles.container}>
    <h3>Contacts List</h3>
    {contacts.length ? (
         <ul className={styles.contacts}>
{contacts.map((contact)=>(
    <ContactItem
    key={contact.id}
    data={contact}
    deleteHandler = {deleteHandler}
        />
))}
    </ul>) :<p className={styles.message}>No Contact Yet!!</p> }
   
        </div>
      )
    }
    

export default Lists
