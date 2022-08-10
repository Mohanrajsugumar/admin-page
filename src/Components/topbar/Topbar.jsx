import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarwrapper'>
            <div className='topLeft'>
               <span className='logo'>Admin</span>
                </div>
            <div className='topRight'>
                <div className='topbariconContainer'>
                  <NotificationsNone />
                  <span className='iconBadge'>2</span>
                </div>
                <div className='topbariconContainer'>
                  <Language />
                  <span className='iconBadge'>2</span>
                </div>
                <div className='topbariconContainer'>
                  <Settings />
                </div>
                <img src="https://www.pngmart.com/files/15/Smiling-Business-Man-Standing-PNG-Image.png" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
