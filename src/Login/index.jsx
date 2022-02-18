import { useState } from 'react'
import './login.css'
import { Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <input></input>
        <input></input>
      </form>
      <Link to="/Home">Home</Link>
    </>
        
  )
}

export default App
