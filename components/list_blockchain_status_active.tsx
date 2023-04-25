import router from "next/router";
import React from "react";

type ListProps = {
  _id: any;
  contractId: any;
  contractValue: any;
  status: any;
  nonFunction: any;
};

const ListBlockchainActive = (props: ListProps) => {
  const sendEmail = (data: any) => {
    router.push(`/newMyContract/${data}`);
  };
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-1/12 text-gray-50">{props._id}</div>
      <div className="w-4/12 text-gray-50">{props.contractId}</div>
      <div className="w-2/12 text-gray-50">{props.contractValue}</div>
      {props.status === "active" ? (
        <div className="w-2/12 text-gray-50">
          <div className="flex justify-center w-1/3 h-full px-3 bg-green-500 rounded-md">
            {props.status}
          </div>
        </div>
      ) : (
        <div className="w-2/12 text-gray-50"> {"User" + props.status}</div>
      )}
      <div className="w-2/12 text-gray-50">
        {props.status === "active" && props.nonFunction === true ? (
          <button
            onClick={() => sendEmail(props.contractId)}
            className="w-2/4 h-full px-3 bg-indigo-700 rounded-md"
          >
            <p>View Detail</p>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListBlockchainActive;

