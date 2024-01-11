import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  //Counter project
  const[counter,setCounter]=useState(15)
  const addvalue=()=>
  {
    if(counter==20){
      setCounter(20)
    }
    else{
      setCounter(counter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
    }
    
  }

  const minusvalue=()=>
  {
    if(counter==0)
    {
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
    
  }


  const myobj1={
    name:"Leena",
    Description:"lorem text1 lorem text lorem text lorem text lorem text lorem text lorem text lorem text",
  }

  const myobj2={
    name:"Meena",
    Description:"lorem text2 lorem text lorem text lorem text lorem text lorem text lorem text lorem text",
  }
  

  return (
    <>
    <h1><b>Counter Project</b></h1>
    Counter value :{counter}
    <button className='' onClick={addvalue}>+ {counter}</button>
    <button onClick={minusvalue}>- {counter}</button>
    <footer>{counter}</footer>

<hr />
    <br />
    <h1><b>Tailwind implementation</b></h1>
    <p className='bg-green-900 text-white py-3 px-3'>Tailwind Example class apply</p>
    
    <Card username="seema" myobj={myobj1}/>
    <Card username="reema"  myobj={myobj2}/>

    
    </>
  )
}

export default App
