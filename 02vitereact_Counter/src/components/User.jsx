import { useParams } from "react-router-dom"

export default function User(){
    const {userid}=useParams()
    return (
        <>  
            <p className="text-center py-3 px-3 bg-dark text-white shadow mt-3 mb-3" style={{fontSize:"40px"}}>User : {userid}</p>
        </>
    )
}