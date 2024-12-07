import styles from "./ContactItem.module.css"

function ContactItem({data :{id , name , lastName , email , phoneNumber} , deleteHandler}) {


  return (
    <div>
  <li className={styles.item}>
<p>{name} 
{lastName} 
</p>
<p>{email}</p>
<p>{phoneNumber}</p>
<button onClick={()=>deleteHandler(id)}>Delete</button>
</li>
    </div>
  )
}

export default ContactItem
