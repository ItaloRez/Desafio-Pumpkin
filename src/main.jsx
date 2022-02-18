import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserProvider from './contexts/User'

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
)
