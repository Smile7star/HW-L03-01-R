const UserList=({users}) => {
  return (
    <>
    <ul>
       {
        users.map((user , index)=>(
            <li key={index}>
                name: {user.name} age: {user.age} city: {user.city}
            </li>
        ))
       }
    </ul>
    
    </>
  )
}
export default UserList