import { useEffect, useState } from "react"

export default function(){

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/asdweb22")
        .then(response=>response.json())
        .then(data=>{
            console.log("Git hub Data:",data)
            setData(data)   
        },[])
    })
    return (
        <>
            <p className="text-center py-3 px-3 bg-dark text-white">Your GitHub profile Api Data: </p>
            <div className="row mx-auto shadow rounded mt-3 mb-3 py-3 px-3">
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mx-auto">
                    <img className="mx-auto rounded" src={data.avatar_url} alt="" width={150} height={150} />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 py-3">
                    <p><b>Name : </b> {data.name}</p>
                    <p><b>Login : </b> {data.login}</p>
                    <p><b>Public Repositories: </b> {data.public_repos}</p>
                    <p><b>Html Url: </b><a href="https://github.com/asdweb22"> {data.html_url}</a></p>
                </div>
            </div>
        </>
    )
}