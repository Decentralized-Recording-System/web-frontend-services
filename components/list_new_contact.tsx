import React from "react";

type ListProps = {
  id: string;
  address: string;
  score: string;
  contract: any;
};

const ListNewContact = (props: ListProps) => {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-2/12 text-gray-50">{props.id}</div>
      <div className="w-4/12 text-gray-50">{props.address}</div>
      <div className="w-2/12 text-gray-50">{props.score}</div>
      <div className="w-3/12 text-gray-50">{props.contract}</div>
    </div>
  );
};

export default ListNewContact;
