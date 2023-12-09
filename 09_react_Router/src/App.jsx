
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/header'
import Home from './Components/Home'
import About from './Components/About'
import {Outlet} from 'react-router-dom'


function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
