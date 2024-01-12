import { defaults } from "autoprefixer"
import { useCallback, useEffect, useRef, useState } from "react"

function PassGenerator(){
    const [length,setLength]=useState(8)
    const [numberAllowed,setNumberAllowed]=useState(false)
    const [specialChar,setspecialCharAllowed]=useState(false)
    
    const[password,setPassword]=useState("")

    //useref
    const passRef=useRef(null)

    const CopyPasswordToClipboard =useCallback(()=>{
        passRef.current?.select()
        // passRef.current?.setSelectionRange(0,3)   //we select only 3 characters
        window.navigator.clipboard.writeText(password)
    },[password])

    //optimization memoization
    const PasswordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+="0123456789"
        if(specialChar) str+="!@#$*"

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)

    },[length,numberAllowed,specialChar,setPassword])

    useEffect(()=>{
        PasswordGenerator()
    },[length,numberAllowed,specialChar,PasswordGenerator])

    return(
        <>
            <div className="w-full max-w-md mx-auto rounded bg-gray-700 shadow-md text-orange-500 py-3 px-3">
                    <div className="flex shadow rounded-lg overflow-hidden mb-4">
                        <input type="text" ref={passRef} value={password} className="py-1 px-3 w-full outline-none" placeholder="password" readOnly />
                        <button onClick={CopyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-2 shrink-0">Copy</button>
                    </div>
                    <div className="flex text-sm gap-x-2">
                        <div className="flex item-center gap-x-1">
                            <input type="range"  onChange={(e)=>setLength(e.target.value)} min={8} max={100} value={length} className="cursor-pointer" />
                            <label>Length: {length}</label>

                        </div>
                        <div className="flex item-center gap-x-1">
                            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} />
                            <label>Numbers</label>
                        </div>
                        <div className="flex item-center gap-x-1">
                            <input type="checkbox" defaultChecked={specialChar} onChange={()=>setspecialCharAllowed((prev)=>!prev)} />
                            <label>SpecialChar</label>
                        </div>
                        
                    </div>
            </div>
        </>
    )
}

export default PassGenerator