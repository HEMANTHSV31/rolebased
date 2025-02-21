import React from 'react'
import Faculty from '../Roles/Faculty'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Students from '../Roles/Students'
import Admin from '../Roles/Admin'
import Dashboard from '../pages/Dashboard';
import Sports from '../pages/Sports';
import Achievements from '../pages/Achievements';
import Announcements from '../pages/Announcements';
import Attendance from '../pages/Attendance';
import Assessments from '../pages/Assessments';
import Security from '../pages/Security';
import Reports from '../pages/Reports';
import Lectures from '../pages/Lectures';


const AppLayout = () => {
  return (
    <>
      <Routes>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/faculty/lectures' element={<Lectures/>}/>
      <Route path='/faculty/attendance' element={<Attendance/>}/>
      <Route path='/faculty/assessments' element={<Assessments/>}/>
      


      <Route path='/student' element={<Students/>}/>
      <Route path='/student/dashboard' element={<Dashboard/>}/>
      <Route path='/student/sports' element={<Sports/>}/>
      <Route path='/student/achievements' element={<Achievements/>}/>
      

      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/announcements' element={<Announcements/>}/>
      <Route path='/admin/reports' element={<Reports/>}/>
      <Route path='/admin/security' element={<Security/>}/>
    </Routes>
    </>
  )
}

export default AppLayout
