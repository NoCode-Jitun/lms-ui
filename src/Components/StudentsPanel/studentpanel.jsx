import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../Admin/Header';
import Sidebar from '../../Admin/Sidebar';
import Home from '../../Admin/Home';
import Exams from '../../Admin/Exams';
import Courses from '../../Admin/Courses';
import SidebarStd from './sidebarStudent';

function Student() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <SidebarStd openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </div>
    );
}

export default Student;