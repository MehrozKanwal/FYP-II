import React, { useState } from 'react'
import {FaUser ,FaUsers} from "react-icons/fa";
import {MdMessage, MdOutlineFavorite,MdReviews,MdGroups} from "react-icons/md";
import { IoSettingsSharp ,IoNotificationsSharp,IoAnalyticsSharp} from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? 'w-72' : 'w-20'}   shadow-lg shadow-myApp py-4`}>
      
        <div className='sidebar-menu '>
        <div className=''>
            <IoIosArrowDroprightCircle  className={`text-3xl left-64 ${open && 'rotate-180' } m-1 ml-6 cursor-pointer`} onClick={() => setOpen(!open)}/>
        </div>
            <ul className='text-lg cursor-pointer font-semibold'>
            <li></li>
                <li className='flex flex-wrap items-center text-myApp hover:border-l-4 border-x-gray  hover:shadow-md hover:shadow-gray gap-2  p-3 pl-7 hover:bg-myApp hover:text-white'>
                <FaUser className='text-2xl'/> <span className={`${!open ? 'hidden' : 'display' }`}>Profile</span>
                </li>
                <li className='flex flex-wrap items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <MdOutlineFavorite className={`text-2xl`}/> <span className={`${!open ? 'hidden' : 'display' }`}>Favourite</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <MdMessage className='text-2xl'/> <span className={`${!open ? 'hidden' : 'display' }`}>Messages</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <MdReviews className='text-2xl'/> <span className={`${!open ? 'hidden' : 'display' }`}>Ratings and Reviews</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <MdGroups className='text-3xl'/> <span className={`${!open ? 'hidden' : 'display' }`}>Groups</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <IoAnalyticsSharp className='text-2xl' /> <span className={`${!open ? 'hidden' : 'display' }`}>Analytics</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <IoNotificationsSharp className='text-2xl' /> <span className={`${!open ? 'hidden' : 'display' }`}>Notifications</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 my-2 p-3 pl-7 hover:bg-myApp hover:text-white'>
                <FaUsers className='text-2xl' /> <span className={`${!open ? 'hidden' : 'display' }`}>My Networks</span>
                </li>
                <li className='flex items-center text-myApp hover:shadow-md hover:shadow-gray  hover:border-l-4 border-x-gray  gap-2 p-3 pl-7  hover:bg-myApp hover:text-white'>
                <IoSettingsSharp className='text-2xl'/> <span className={`${!open ? 'hidden' : 'display' }`}>Account Settings</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar