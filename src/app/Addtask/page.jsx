"use client";
import React, { useState } from "react";
import Image from "next/image";
import addtask from "../../assets/addTask.svg";
import { AddTask } from "../../service/taskServices.js";
import Head from 'next/head';

// import toast
import {toast} from "react-toastify";
export const metadata = {
  title: "addtask: workmanager",
};
const addTask = () => {
  // document.title=metadata.title;
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    status: "non",
    // temporary solution
    userId: "64f753b426003b210f857ce1",
  });
  
  const handleAddTask = async (event) => {
          event.preventDefault();
          console.log(event.target);
             
          // call the api with method addTask method
        try {
          const result  = await AddTask(task);
          console.log(result);
          toast.success("task added", {
            position:"top-center",
          })

          setTask({
            title: "",
            description: "",
            date: "",
            status: "non",
          })
              
        } catch (error) {
          console.log(error);
          toast.error("task fail to add",{
            position:"top-center",
          })
        }
  };
  // const pageTitle = "addtask: workmanager"; // Define your page title here


  return (
      <>
        {/* <Head>
        <title>{pageTitle}</title>
      </Head> */}
    <div className="grid grid-cols-12  ">
      <div className="border col-span-6 col-start-4 my-9 border-red-600 p-6">
        <div className="px-10 py-2  flex justify-center  ">
          <Image
            src={addtask}
            style={{
              width: "50%",
              height: "80%",
            }}
            alt="add_takssvg"
          />
        </div>
        <h1 className="text-center py-2">Add Your Task</h1>
        {/* form of the task */}
        <form action="#!" onSubmit={handleAddTask}>
          <div className="mb-6">
            <label
              htmlFor="task_title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              name="task_title"
              // change the fields
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              required=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="task_desc"
              name="task_desc"
              // change the fields
              onChange={(event) => {
                setTask({
                  ...task,
                  description: event.target.value,
                });
              }}
              value={task.description}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write descriptoin here..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="task_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="task_date"
              name="task_date"
              // change the fields
              onChange={(event) => {
                setTask({
                  ...task,
                  date: event.target.value,
                });
              }}
              value={task.date}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="task_status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              // change the fields
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="non" disabled>
                --- Select Status ---
              </option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div className="mb-6 flex  justify-center space-x-2">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Add task
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Clear
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
    </>
  );
};

export default addTask;
