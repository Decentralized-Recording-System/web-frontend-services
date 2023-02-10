import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();

  const logIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/users/login", {
          email: "in.spaymax3@gmail.co",
          password: "1234",
        })
        .then((response) => {
          Cookies.set("loggedin", "true");
          router.push("/dashboard");
        });
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-800">
      <div className="w-3/12 px-8 py-6 border rounded-md border-slate-600 bg-slate-700">
        <h3 className="text-2xl font-bold text-white">Login to your account</h3>
        <form action="">
          <div className="mt-4">
            <label className="block text-white" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mt-4">
            <label className="block text-white" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm text-slate-200 "
              >
                Remember me
              </label>
            </div>
            <span className="text-blue-500">
              <Link href="/rePassword">Forgot password</Link>
            </span>
          </div>
          <button
            className="flex items-center justify-center w-full py-1 mt-3 bg-blue-700"
            onClick={logIn}
          >
            Sign in
          </button>
          <div className="flex mt-2">
            <div className="text-slate-400">Don’t have an account yet?</div>

            <div className="ml-2 text-blue-500">
              <Link href="/register">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
