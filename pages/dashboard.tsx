import React from "react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  return (
    <Layout>
      <div className="flex-col items-center justify-center h-full p-4 bg-slate-900">
        <div className="flex justify-between gap-4 mb-8">
          <div className="flex items-center justify-center w-full h-96 bg-slate-600 ">
            <h2>New User</h2>
          </div>
          <div className="flex items-center justify-center w-full bg-slate-600 ">
            <h2>Old User and Contract</h2>
          </div>
        </div>
        <div className="flex justify-between gap-4 h-96">
          <div className="flex items-center justify-center w-full bg-slate-600">
            <h2>Promotion and Discount Code</h2>
          </div>
          <div className="flex items-center justify-center w-full bg-slate-600 ">
            <h2>Model Insurance </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
