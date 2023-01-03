import Image from 'next/image'
import React from 'react'
import Klogo from "../assets/KnitStitch.png"
import {FaUserCircle} from "react-icons/fa";
import { RiNotification2Fill,RiLogoutCircleRFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className=''>
    <div className="navbar bg-base-100 shadow-md shadow-myApp p-2 px-10 ">
  <div className="flex-1">
   <Image src={Klogo} className="w-52" />
  </div>
  
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
  <FaUserCircle className="text-3xl text-myApp" />
  </button>
    <button className="btn btn-ghost btn-circle">
    <RiNotification2Fill className='text-3xl text-myApp font-bolder' />    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <RiLogoutCircleRFill className='text-3xl text-myApp font-bolder' />
              <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>

</div>

      
   </div>
  )
}

export default Navbar