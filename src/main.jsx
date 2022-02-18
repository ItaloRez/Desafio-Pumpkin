import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
