import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

const UserList = () => {
    const {users} = useContext(AuthContext)
    return (
        <div>
            {users.map(user =>{
                return <h1 key={user._id}>{user.name}</h1>
            })}
        </div>
    )
}
export default UserList;
