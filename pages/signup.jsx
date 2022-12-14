import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import signupImg from "../assets/signup.gif"
import logo from "../assets/logo.png"
import { HiMail } from "react-icons/hi";
import {RiBankFill} from "react-icons/ri";
import {MdError} from "react-icons/md";

import {
    FaUserCircle,
    FaPhoneAlt,
    FaUnlockAlt,
  } from "react-icons/fa";
import { useFormik } from 'formik';
import { signupSchema } from '../schema';


const initialValues = {
fullName: "",
email: "",
phone: "",
password: "",
confirmPassword: "",
department: ""
}

function signup() {
  const {values,handleBlur,handleSubmit,touched,errors,handleChange} = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit : (values, action) => {
      console.log("values", values);
      action.resetForm()
    }

  })
  console.log(errors)

  return (
    <div className=" py-10">
      <div className="signup-panel w-3/4  max-md:flex-col flex mx-auto items-center justify-center border border-myApp rounded-lg shadow-lg shadow-myApp inset-3 ">
        <div className="su-left  w-full ">
          <Image src={signupImg} className="rounded-xl  w-full" />
        </div>
        <div className="su-right bg-base-200 rounded-r-xl py-5 flex-auto flex w-full flex-col items-center justify-center h-fit mx-auto">
          <form onSubmit={handleSubmit}>
            <Image alt='signuplogo' src={logo} className="w-60" />
            <h1 className="text-3xl font-bold m-3">Create your Account</h1>
            <div className="flex gap-5 flex-col">
              <div className="full-Name">
                {/* <label className='text-left text-xl pl-4 my-10'>Full Name</label> */}
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUserCircle className="text-3xl text-myApp" />
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Full Name"
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label> 
              </div>
              {errors.fullName && touched.fullName ?(
                  <p className="text-error font-semibold flex items-center  ml-4 mb-0">
                  <MdError />
                  {errors.fullName}
                  </p>
                ): null}
              <div className="e-mail">
                {/* <label className='text-left text-xl pl-4 my-10'> E-mail</label> */}
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <HiMail className="text-3xl text-myApp" />
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your E-mail"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>                
              </div>
              {errors.email && touched.email ?(
                  <p className="text-error font-semibold flex items-center  ml-4 mb-0">
                  <MdError />
                  {errors.email}
                </p>
                ): null}
              <div className="phone">
                {/* <label className='text-left text-xl pl-4 my-10'>Phone</label> */}
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaPhoneAlt className="text-2xl text-myApp" />
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Phone Number"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>              
              {errors.phone && touched.phone ?(
                  <p className="text-error font-semibold flex items-center  ml-4 mb-0">
                  <MdError />
                  {errors.phone}
                </p>
                ): null}
                

              {/* <div className="gender my-2">
                <label className="text-left text-xl pl-4 pb-10">
                  Select your Gender
                </label>
                <label className="relative block">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked
                  />
                  Male
                  <input type="radio" name="radio-1" className="radio" />
                  Female
                </label>
              </div> */}
              <div className="password my-2">
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUnlockAlt className="text-2xl text-myApp" />
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>              
              </div>
              {errors.password && touched.password ?(
                  <p className="text-error font-semibold flex items-center  ml-4 mb-0">
                  <MdError />
                   {errors.password}
                </p>
                ): null}
                
              <div className="confirm-password">
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUnlockAlt className="text-3xl text-myApp" />
                  </span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Confirm your Password"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                
              </div>
              {errors.confirmPassword && touched.confirmPassword ?(
                  <p className="text-error font-semibold flex items-center ml-4 mb-0">
                  <MdError />
                   {errors.confirmPassword}
                </p>
                ): null}

              <div className="depart">
                <label className="relative block">
                  <span className="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <RiBankFill className="text-3xl text-myApp" />
                  </span>
                  <select className=" italic border-slate-300  rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4"
                  name='department' value={values.department}
                  onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" selected disabled>Pick your Department</option>
                    <option value="wool">Wool</option>
                    <option value="cloth">Cloth</option>
                  </select>
                </label>
              </div>
              {errors.department && touched.department ?(
                  <p className="text-error font-semibold flex items-center ml-4 mb-0">
                  <MdError />
                   {errors.department}
                </p>
                ): null}

              <button
                type="submit"
                className="btn  rounded-full font-bold text-lg w-40 mx-auto bg-myApp text-base-100"
              >
                Signup
              </button>
            </div>
          </form>
          <p className="my-5">
            Already have an account?
            <span className="text-myApp text-lg text-bold pl-2 underline">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup