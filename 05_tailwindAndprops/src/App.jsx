import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username:"keshav",
  }
  let myarr=[1,3,5]
  return (
    <>
       <h1 className="bg-green-400 text-white p-2 rounded-xl ">Tailwind</h1>
       <Card  myName = "Ruchi" btnName='view profile' />
       <Card myName = "Keshav" btnName ="view name"/>
    </>
  )
}

export default App
