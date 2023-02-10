import axios from "axios";
import router from "next/router";
import React from "react";

const Activate = () => {
  const activate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/company/activate", {
          email: "in.spaymax3@gmail.co",
          code: "1234",
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("error");
    }
    // router.push("/dashboard");
  };

  const reActivate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/users/activate", {
          email: "in.spaymax3@gmail.co",
        })
        .then((response) => {
          router.push("/");
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
          Fill Your OTP from Email
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
              Your OTP from Email
            </label>
            <input
              type="text"
              placeholder=" OTP"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex justify-around">
            <button
              onClick={activate}
              className="flex items-center justify-center w-2/5 py-2 mt-6 bg-blue-700 rounded-md "
            >
              Activate User
            </button>
            <button
              onClick={reActivate}
              className="flex items-center justify-center w-2/5 py-2 mt-6 bg-green-300 rounded-md"
            >
              Refresh-Activate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Activate;
