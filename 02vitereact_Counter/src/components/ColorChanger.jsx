import { useState } from "react"

function ColorChanger(){

    const [color,SetColor]=useState("olive")
    return(
        <>
            <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
                <div className="flex flex-wrap justify-center px-3 py-2">
                    <div className="flex flex-wrap justify-center px-3 py-2 gap-3 bg-white rounded-3xl">
                        <button onClick={()=>SetColor("red")} className="text-white rounded-full shadow-lg px-3 py-2" style={{backgroundColor:"Red"}}>Red</button>
                        <button onClick={()=>SetColor("green")} className="text-white rounded-full shadow-lg px-3 py-2" style={{backgroundColor:"Green"}}>Green</button>
                        <button onClick={()=>SetColor("yellow")} className="text-white rounded-full shadow-lg px-3 py-2" style={{backgroundColor:"Yellow"}}>Yellow</button>
                        <button onClick={()=>SetColor("blue")} className="text-white rounded-full shadow-lg px-3 py-2" style={{backgroundColor:"Blue"}}>Blue</button>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default ColorChanger