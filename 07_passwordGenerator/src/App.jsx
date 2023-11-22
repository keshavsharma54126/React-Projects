import { useState,useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)  
  const [password,setPassword] = useState("")
  const  passwordRef  = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="~!@#$%^&*(){}[]<>_"
    }
    for (let index = 1; index < length; index++) {
      let charindex = Math.floor((Math.random()*str.length)+1)
      pass+=str[charindex]
      
    }
    setPassword(pass)

  }
  ,[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboar = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,setPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboar}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <label htmlFor="">Length:{length} </label>
            <input className="" type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            
          </div>
          <div className="flex items-center gap-x-1">
            <input className="" type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>{return !prev})}} />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input className="" type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>{return !prev})}} />
            <label htmlFor="">Special Characters</label>
          </div>
        </div>

      

    </div>
  )
}

export default App
