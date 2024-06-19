import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Biography from './pages/Biography'
import Gallery from './pages/Gallery'
import Messages from './pages/Messages'
import Family from './pages/Family'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//NavBar
function Nav(){
  
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand">In Loving Memory of<br/><span id = "center"><b>Engr. Dr. Mayas Adoyi</b></span><br/>
    1965 - 2024 </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" aria-current="page" href="/"><b>HOME</b></a>
        <a className="nav-link" aria-current="page" href="/biography"><b>BIOGRAPHY</b></a>
        <a className="nav-link" href="/messages"><b>MESSAGES</b></a>
        <a className="nav-link" href="/gallery"><b>GALLERY</b></a>
        <a className="nav-link" href="/family"><b>FAMILY MESSAGES</b></a>
      </div>
    </div>
  </div>
</nav>
  </>
  )
}




function App() {
  return (
    <>
    <div className = "wholeApp">
    <Nav/>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/biography' element = {<Biography />}/>
      <Route path = '/gallery' element = {<Gallery />}/>
      <Route path = '/messages' element = {<Messages/>}/>
      <Route path='/family' element={<Family/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
