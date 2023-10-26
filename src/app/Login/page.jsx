"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import loginsvg from "../../assets/login.svg";
import { toast } from 'react-toastify';
import { LoginUser } from '@/service/userService';
import {useRouter} from 'next/navigation';
export const metadata={
    title:"Login: workmanager",
};
const Login = () => {
       const router= useRouter();
       const [loginData, setLoginData]=useState({
            email:"",
            password:"",
         });
          // method to put on the form
          const loginForm = async (event) => {
            event.preventDefault();
            console.log(loginData);
          
            if (loginData.email.trim() === "" || loginData.email == null) {
              toast.info("Invalid data", {
                position: "top-center",
              });
              return; // Return early if the data is invalid
            }
          
            try {
              const result = await LoginUser(loginData);
              console.log(result);
              // Check the status from the result to determine if login was successful
              if (result.status === 200) {
                toast.success("User login", {
                  position: "top-center",
                });
                // Redirect to the profile/user/page.js
                router.push('/profile/user');
              } else {
                toast.error("Login failed", {
                  position: "top-center",
                });
              }
            } catch (error) {
              console.log(error);
              toast.error(error.response.data.message || "Login failed", {
                position: "top-center",
              });
            }
          };
          
  return (
   <>
           <div className='grid grid-cols-12'>
            <div className='border col-span-6 col-start-4 my-9 border-red-600 p-6 '>
              {/* take an image vector for login */}
              <div className='px-10 py-2 flex justify-center'>
               <Image src={loginsvg} style={{
                      width:"50%",
                      height:"80%",
                      objectFit:"contain",
               }} alt='loginsvg' />
              </div>
            <h1 className='text-center py-2'>Login</h1>
                {/* take and form */}
               <form action="#!" onSubmit={loginForm}>
               <div className="mb-6">
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                email
              </label>

              <input
                type="email"
                name="user_email"
                id="user_email"
                   onChange={(event)=>{
                    setLoginData({
                          ...loginData,
                          email:event.target.value
                    });
                   }}
                   value={loginData.email}
                placeholder="Enter your email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="user_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                password
              </label>

              <input
                type="password"
                name="user_password"
                id="user_password"
                   
                    onChange={(event)=>{
                    setLoginData({
                          ...loginData,
                          password:event.target.value
                    });
                    }}
                    value={loginData.password}
                
                placeholder="Enter password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
               {/* button here */}
               <div className='mb-6 flex justify-center'>
               <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
               Login
              </button>
               </div>
                  {/* {JSON.stringify(loginData)} */}
               </form>
           </div>
            </div>

            
   </>
  )
}

export default Login
