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
      dashboard
      <button
        className="flex items-center justify-center w-full py-1 mt-3 bg-blue-700"
        onClick={logOut}
      >
        Sign in
      </button>
    </Layout>
  );
};

export default Dashboard;
