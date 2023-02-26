import React from "react";

type ListProps = {
  id: string;
  address: string;
  used: string;
  start: string;
  status: string;
};

const ListNewPromotion = (props: ListProps) => {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-2/12 text-gray-50">{props.id}</div>
      <div className="w-3/12 text-gray-50">{props.address}</div>
      <div className="w-2/12 text-gray-50">{props.used}</div>
      <div className="w-3/12 text-gray-50">{props.start}</div>
      <div className="w-2/12 text-gray-50">{props.status}</div>
    </div>
  );
};

export default ListNewPromotion;
