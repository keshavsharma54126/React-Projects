import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  
  const increaseBy1=()=>{
    counter = counter+1;
    setCounter(counter)
    setCounter(counter=>counter+1)
  }
  const decreaseBy1=()=>{
    if(counter==0){
      return
    }
    setCounter(counter-1);
  }

  return (
    <>
     <h1>Chai aur react baby.</h1>
     <h2>Counter :{counter}</h2>
     <button onClick={increaseBy1}>+</button>

     <button onClick={decreaseBy1}>-</button>
    </>
  )
}

export default App
