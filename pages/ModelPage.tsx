import React from "react";
import Layout from "../components/layout";

const ModelPage = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <h1 className="text-white">Model Contract/Model</h1>
        <div className="flex w-full mb-6 h-36">
          <div className="w-4/12 bg-green-300 ">A Model</div>
          <div className="w-8/12 bg-gray-700"></div>
        </div>
        <div className="flex w-full mb-6 h-36">
          <div className="w-4/12 bg-green-300 ">B Model</div>
          <div className="w-8/12 bg-gray-700"></div>
        </div>
        <div className="flex w-full mb-6 h-36">
          <div className="w-4/12 bg-green-300 ">C Model</div>
          <div className="w-8/12 bg-gray-700"></div>
        </div>
        <a href="/newContract">
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
            create new Model
          </button>
        </a>
      </div>
    </Layout>
  );
};

export default ModelPage;
