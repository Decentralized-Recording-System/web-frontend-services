import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/6 bg-slate-800">
        <Sidebar />
      </div>
      <div className="w-5/6">{children}</div>
    </div>
  );
};

export default Layout;
