import { useRef } from 'react'
import './login.css'
import { useUser } from '../../contexts/User'
import { useNavigate } from "react-router-dom"


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
      
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Usuário</label>
            <input ref={userRef} type="text" placeholder="Insira o seu usuário"></input>
          </div>
          <div className="input">
            <label>Senha</label>
            <input ref={passwordRef} type="password" placeholder="Insira sua senha"></input>
          </div>
          <button type='submit'>Entrar</button>
        </form>
      </div>
      </div>
    
        
  )
}

export default App
