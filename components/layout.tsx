import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="w-1/6 h-full bg-slate-800">
        <Sidebar />
      </div>
      <div className="w-5/6 h-full ">{children}</div>
    </div>
  );
};

export default Layout;
