import React, { useState } from 'react'
import './App.css' 

const App = () => {

  const[count,setcount]=useState(0)

  function Increment(){
    setcount(count+1)
  }

  
  function decrement(){
    setcount(count-1)
  }

  
  function reset(){
    setcount(0)
  }

  return (
    <div id="counter">
      <h1>Counter Application</h1>
     <h2 className={count > 0 ? "positive" : count < 0 ? "negative" : "zero"}>
     {count}
     </h2>
        <button id="red" onClick={Increment}>+</button>
        <button id="dark" onClick={reset}>Reset</button>
        <button id="green" onClick={decrement}>-</button>
       
    </div>
  )
}
export default App;
