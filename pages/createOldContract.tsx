import React from "react";
import Layout from "../components/layout";

const createOldContract = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Model Contract/Old Contract/1</h1>
        </div>
        <div className="flex-col w-full h-full bg-gray-700 ">
          <div className="grid grid-cols-1 px-4 divide-y">
            <div className="flex items-center justify-between h-32">
              <div className="flex-col text-white">
                <h1>Address</h1>
                <p>Addre0xfhgjhfgjfgjfgss</p>
              </div>
              <div className="flex-col text-white">
                <h1>Score</h1>
                <p>80</p>
              </div>
            </div>
            <div className="flex-col items-center justify-center text-white">
              <h1>Insurance Contract</h1>
              <div className="flex-col h-56 bg-slate-400">
                <div className="flex "></div>
              </div>

              <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default createOldContract;
