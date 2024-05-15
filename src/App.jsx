import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber/Navber'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
  
      <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
