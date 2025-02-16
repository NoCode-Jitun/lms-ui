import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { SiProgress } from "react-icons/si";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <SiProgress  className='icon_header'/> Assess My Progress
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <Link to="/admin">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/admin/exams">
                    <BsFillArchiveFill className='icon'/> Exams
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/subjects">
                    <BsFillGrid3X3GapFill className='icon'/> Subjects
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/students">
                    <BsPeopleFill className='icon'/> Students
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Question Bank
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Report Card
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar