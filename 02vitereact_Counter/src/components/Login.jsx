import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Login()
{
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    
    const {setUser}=useContext(UserContext)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

    const clearData =()=>{
        setUserName("")
        setPassword("")
        
    }

    return(
        <>
            <div className="mt-5">
            <h1 className="text-center text-primary">Login Form</h1>
            <div className="w-50 bg-dark py-3 px-3 mx-auto rounded shadow">
                <input className="form-control" placeholder="Enter Username" type="text" value={username} onChange={(e)=>setUserName(e.target.value)} />
                <br />
                <input className="form-control" placeholder="Enter Password"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button> {""}
                <button className="btn btn-danger" onClick={clearData}>Clear</button>
            </div>
            </div>
        </>
    )
}

export default Login