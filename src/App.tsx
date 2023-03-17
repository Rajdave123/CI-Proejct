import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Login } from './pages/Login'
import { Forget } from './pages/Forget'
import { Registration } from './pages/Registration'
import { ResetPwd } from './pages/ResetPwd'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/navbar/Header'
import { Home } from './pages/Home'
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/reset' element={<ResetPwd />} />
      </Routes>
    </>
  )
}

export default App
