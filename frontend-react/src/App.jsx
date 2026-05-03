import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import Header from './components/Header'
import Register from './components/Register'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import DashBoard from './components/dashboard/DashBoard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header/>
              <Routes>
                  <Route path='/' element={<Main/>} />
                  <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
                  <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
                  <Route path='/dashboard' element={<PrivateRoute><DashBoard /></PrivateRoute>} />
              </Routes>
          <Footer/>  
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
