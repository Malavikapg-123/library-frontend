import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarSec from './SidebarSec'


function DashboardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SidebarSec/>
      <Outlet />
    </div>
  )
}

export default DashboardLayout