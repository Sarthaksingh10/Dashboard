import {Outlet} from 'react-router-dom'
import './App.css'
import Sidenav from './Components/Sidebar/Sidenav'
import Topnav from './Components/Topbar/Topnav'

function App() {
 

  return (
    <>
    <div className='bg-gray-100 overflow-hidden h-screen w-screen m-0 p-0'>
    <Topnav classname='w-[80%] relative left-[20%]  '/>
     <Sidenav classname='w-[20%] bg-white h-full relative bottom-[11%]'/>
     <Outlet/>
     
     </div>
    </>
  )
}

export default App
