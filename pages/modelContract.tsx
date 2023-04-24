import React from "react";
import Layout from "../components/layout";

const modelContract = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <h1 className="text-white">Model Contract</h1>
        <a href="/ModelPage">
          <div className="flex w-full mb-6 h-36">
            <div className="w-4/12 bg-green-500 ">Model</div>
            <div className="w-8/12 bg-gray-700"></div>
          </div>
        </a>
        <a href="/modelNewContract">
          <div className="flex w-full mb-6 h-36">
            <div className="w-4/12 bg-green-500 ">New Contract</div>
            <div className="w-8/12 bg-gray-700"></div>
          </div>
        </a>
        <a href="/oldContract">
          <div className="flex w-full mb-6 h-36">
            <div className="w-4/12 bg-green-500 ">Old Contract</div>
            <div className="w-8/12 bg-gray-700"></div>
          </div>
        </a>
      </div>
    </Layout>
  );
};

export default modelContract;
