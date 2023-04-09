import React from "react";

type ListProps = {
  _id: any;
  contractId: any;
  contractValue: any;
};

const ListOldContract = (props: ListProps) => {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-2/12 text-gray-50">{props._id}</div>
      <div className="w-4/12 text-gray-50">{props.contractId}</div>
      <div className="w-2/12 text-gray-50">{props.contractValue}</div>
    </div>
  );
};

export default ListOldContract;
