import { useState } from 'react'
import './Admin.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Exams from './Exams'
import Students from './Students'
import Courses from './Courses'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        

    </div>
  )
}

export default Admin
