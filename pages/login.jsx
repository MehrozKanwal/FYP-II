import React from 'react'
import Image from 'next/image'
import signupImg from "../assets/signup.gif"
import logo from "../assets/logo.png"
import { HiMail } from "react-icons/hi";
import {FaUnlockAlt} from "react-icons/fa";
import Link from 'next/link';

function login() {
  return (
   
    <div className=" py-10">
      <div className="login-panel w-3/4  flex max-md:flex-col mx-auto lg:bg-base-300  items-center justify-center border border-myApp rounded-lg shadow-lg shadow-myApp inset-3 ">
        <div className='li-left w-full '>
          <Image src={signupImg}  className="rounded-xl  w-full" />
        </div>
        <div className="li-right flex w-full flex-col bg-base-300  items-center justify-center h-fit mx-auto">
          <form>
            <Image src={logo} className="w-60" />
            <h1 className="text-3xl font-bold m-3">Login your Account</h1>
            <div className='flex gap-5 flex-col'>
              <div className='E-mail'>
              <label className='text-left text-xl pl-4 my-10'> E-mail</label>
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <HiMail className="text-3xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your E-mail"
                    type="text"
                    name="E-mail"
                  />
                </label>
              </div>
              <div className='password my-2'>
              <label className='text-left text-xl pl-4 pb-10'>Password</label>
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUnlockAlt className="text-2xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your E-mail"
                    type="text"
                    name="E-mail"
                  />
                </label>
              </div>
              <button className='btn rounded-full font-bold text-lg w-40 mx-auto bg-myApp text-base-100 fon'>Login</button>
            </div>
          </form>
          <p className='mt-5'>Don't have an account? <span className='text-myApp text-lg text-bold pl-2 underline'><Link href='/signup'>Signup</Link></span> </p>
        </div>
      </div>
    </div>
  )
}

export default login