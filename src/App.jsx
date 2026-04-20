
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'
import Home from "./user/pages/Home"
import Contact from "./user/pages/Contacts"
import Books from "./user/pages/Books"
import View from "./user/pages/View"
import Profile from "./user/pages/Profile"

import AdminDashboard  from './admin/pages/AdminDashboard'
import AdminResource  from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'


import Auth from './pages/Auth'
import Pnf from './pages/Pnf'


import Preloader from './components/Preloader'





function App() {

  const [isLoading,setIsloading] = useState(true)

  setTimeout(()=>{
    setIsloading(false)
  },6000);

  return (
    <>
    <Routes>
      <Route path='/' element={isLoading?<Preloader/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>

      <Route  path='/profile/:id' element={<Profile/>} />
      <Route  path='/books/:id' element={<View/>} />

      <Route  path='/admin' element={isLoading?<Preloader/>:<AdminDashboard/>} />
      <Route  path='/admin/resources' element={<AdminResource/>} />
      <Route  path='/admin/settings' element={<AdminSettings/>} />

      <Route path='/' element={<Pnf/>}/>






    </Routes>
    </>
  )
}

export default App