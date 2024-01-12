import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile()
{
    const{user}=useContext(UserContext)
    
    return(
        <div>
           <p className="text-center" style={{fontSize:"20px", fontWeight:"bold"}}>{!user? <div className="text-danger">Please Login</div>:<div className="text-success">Welcome {user.username}</div>}</p>
        </div>
    )
}

export default Profile