import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
        
         {/* Navbar for Recruiter Panel */}
         <div>
            <div>
                <img src={assets.logo} alt="" />
                <div>
                    <p>Welcome, GreatStack</p>
                    <div>
                        <img src={assets.company_icon} alt="" />
                        <div></div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Dashboard