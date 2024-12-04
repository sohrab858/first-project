

function ContactItem({data :{id , name , lastName , email , phoneNumber} , deleteHandler}) {


  return (
    <div>
      <li key={id}>
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
