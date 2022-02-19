import React, { useRef } from 'react'
import { useUser } from '../../contexts/User'
import { useNavigate } from "react-router-dom"
import './index.css'


function App() {
  const { setUser } = useUser()
  const userRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if(userRef.current.value && passwordRef.current.value){
      setUser(userRef.current.value)
      navigate('/home')
    }
    else{
      alert('Por favor preencha todos os campos')
    }
  }

  return (
    
    <div className="container">
      <div className="quadrado">
        <h1>Login</h1>
      
        <form className='form' onSubmit={handleSubmit}>
          <div className="inputs">
            <label className='label'>Usuário</label>
            <input className='input' ref={userRef} type="text" placeholder="Insira o seu usuário"></input>
          </div>
          <div className="inputs">
            <label className='label'>Senha</label>
            <input className='input' ref={passwordRef} type="password" placeholder="Insira sua senha"></input>
          </div>
          <button className="btn" type='submit'>Entrar</button>
        </form>
      </div>
      </div>
    
        
  )
}

export default App
