import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user}=useContext(UserContext)
    
    if(!user) return <div>Please Login</div>
    return <div> welcome <br /> username: <b>{user.username}</b> <br /> password: <b>{user.password}  </b></div>
}

export default Profile