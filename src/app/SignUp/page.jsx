"use client";
import React, { useState } from "react";
import Image from "next/image";
// import the svg of signup
import signUp from "../../assets/signup.svg";
import Link from "next/link";
import { toast } from "react-toastify";
import { CreateUser } from "../../service/userService";

const signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=",
  });

  // method to signUp the form

  const SignUp= async (event) =>{
        event.preventDefault();
        console.log(data);
    
        if (data.name.trim()=== "" || data.name== null) {
            toast.warning("Name is required!");
            return;
        }
        // call the  api with method CreateUser

        try {
               const result= await CreateUser(data);
               console.log(result);
               toast.success("user created",{
                position:"top-center",
               })

               setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileUrl:
                  "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=",
               })

        } catch (error) {
                console.log(error);
                toast.error("fial to create user",{
                  position:"top-center"
                })
        }
  }

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="border col-span-6 col-start-4 my-9 border-red-600 p-6">
          {/* take an image */}

          <div className=" px-10 py2 flex justify-center">
            <Image
              src={signUp}
              style={{
                width: "50%",
                height: "80%",
                objectFit: "contain",
              }}
              alt="signupsvg"
            />
          </div>
          {/* take a form */}
          <h1 className="text-center py-2">SignUp</h1>

          <form action="#!" onSubmit={SignUp}>
            <div className="mb-6">
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                name
              </label>

              <input
                type="text"
                name="user_name"
                id="user_name"
                onChange={(event)=>{
                  setData({
                    ...data,
                    name:event.target.value
                  });
                }}
                value={data.name }
                placeholder="Enter your name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

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
                  setData({
                    ...data,
                    email:event.target.value
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password:event.target.value
                  });
                }}
                value={data.password}
                placeholder="Enter password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                About you
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write descriptoin here..."
                name="about_user"
                id="about_user"
                onChange={(event)=>{
                  setData({
                    ...data,
                    about:event.target.value
                  });
                }}
                value={data.about}
                rows="4"
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="user_profile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                profile
              </label>
            </div>

            {/* button here */}
            <div className="mb-6 flex justify-center space-x-2">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                SignUp
              </button>
            </div>
            <div className="mb-4 flex justify-center">
              <small>
                already signup{" "}
                <span className="text-blue-600">
                  <Link href="/Login">login</Link>
                </span>
              </small>
            </div>
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
