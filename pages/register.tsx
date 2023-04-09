import axios from "axios";
import router from "next/router";
import React from "react";
import { url } from "../constant/url";
const Register = () => {
  const register = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .post(url + "/company/register", {
          companyName: "nathain.com",
          email: "in.spaywer@gmail.com",
          password: "1234",
          confirmPassword: "1234",
        })
        .then((response) => {
          if (response.status == 200) {
            router.push("/activate");
          }
        });
    } catch (error) {
      console.log("error");
    }
    // router.push("/dashboard");
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-800">
      <div className="w-4/12 px-8 py-6 border rounded-md border-slate-600 bg-slate-700">
        <h3 className="text-2xl font-bold text-white">
          Sign up to create your account
        </h3>
        <form action="">
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Company Name
            </label>
            <input
              type="text"
              placeholder="companyName"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Contract Number
            </label>
            <input
              type="text"
              placeholder="phone"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Address
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your address..."
            ></textarea>
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Password
            </label>
            <input
              type="text"
              placeholder="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="ConfirmPassword"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            onClick={register}
            className="flex items-center justify-center w-full py-2 mt-6 bg-blue-700 rounded-md"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
