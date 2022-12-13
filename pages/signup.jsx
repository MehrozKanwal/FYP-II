import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import signupImg from "../assets/signup.gif"
import logo from "../assets/logo.png"
import { HiMail } from "react-icons/hi";
import {RiBankFill} from "react-icons/ri";
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
confirmPassword: ""}

function signup() {
  const {values,handleBlur,handleSubmit,touched,errors,handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit : (values) => {
      console.log("values", values);
      
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
            <Image src={logo} className="w-60" />
            <h1 className="text-3xl font-bold m-3">Create your Account</h1>
            <div className="flex gap-5 flex-col">
              <div className="full-Name">
                {/* <label className='text-left text-xl pl-4 my-10'>Full Name</label> */}
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUserCircle className="text-3xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Full Name"
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p className='text-error font-semibold mt-2 text-center mb-0'>{errors.fullName}</p>
              </div>
              <div className="e-mail">
                {/* <label className='text-left text-xl pl-4 my-10'> E-mail</label> */}
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <HiMail className="text-3xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your E-mail"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p className='text-error font-semibold mt-2 text-center mb-0'>{errors.email}</p>
              </div>
              <div className="phone">
                {/* <label className='text-left text-xl pl-4 my-10'>Phone</label> */}
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaPhoneAlt className="text-2xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Phone Number"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p className='text-error font-semibold mt-2 text-center mb-0'>{errors.phone}</p>

              </div>
              
              {/* <div className="gender my-2">
                <label className="text-left text-xl pl-4 pb-10">
                  Select your Gender
                </label>
                <label class="relative block">
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
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <FaUnlockAlt className="text-2xl text-myApp" />
                  </span>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white   border-slate-300 
              rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4 "
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                <p className='text-error font-semibold mt-2 text-center mb-0'>{errors.password}</p>

              </div>
              <div className="confirm-password">
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
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
                <p className='text-error font-semibold mt-2 text-center mb-0'>{errors.confirmPassword}</p>

              </div>

              <div className="depart">
                <label class="relative block">
                  <span class="absolute inset-y-0 text-xl flex items-center pl-4 pr-4">
                    <RiBankFill className="text-3xl text-myApp" />
                  </span>
                  <select className="italic border-slate-300  rounded-full py-4 pl-14 w-full font-bold text-sm shadow-xl shadow-myApp focus:outline-none focus:border-myApp  focus:ring-4">
                   <option  selected>Pick your favorite language</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>
                </label>
              </div>
              
              <button type='submit' className="btn  rounded-full font-bold text-lg w-40 mx-auto bg-myApp text-base-100">
               Signup
              </button>
            </div>
          </form>
          <p className='my-5'>Already have an account? <span className='text-myApp text-lg text-bold pl-2 underline'><Link href='/login'>Login</Link></span> </p>

        </div>
      </div>
    </div>
  );
}

export default signup