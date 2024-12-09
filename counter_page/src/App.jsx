import { useState } from 'react'

import './App.css'

function App() {
  const [mycounter, setCounter] = useState(14)

  const addition = () => {
    setCounter(mycounter+1)
  }

  const addthree = () => {
    setCounter((counter)=>counter+1)
    setCounter((counter)=>counter+1)
    setCounter((counter)=>counter+1)
  }

  const subtraction = () => {
    setCounter(mycounter-1)
  }

  return (
    <>
      <h1>Hello User {mycounter}</h1>
      <h2>Current count: {mycounter}</h2>
      <button onClick={addition}>Add</button>{"  "}
      <button onClick={addthree}>Add 3</button>{"  "}
      <button onClick={subtraction}>Subtract</button>
    </>
  )
}

export default App
