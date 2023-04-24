import React from "react";

type ListProps = {
  id: any;
  address: any;
  score: any;
  updateCount: any;
  date: any;
};

const ListNewContact = (props: ListProps) => {
  return (
    <div className="flex items-center justify-center h-10 px-3">
      <div className="w-2/12 text-gray-50 ">{props.id}</div>
      <div className="w-4/12 text-gray-50">{props.address}</div>
      <div className="w-2/12 text-gray-50">{props.score}</div>
      <div className="w-3/12 text-gray-50">{props.updateCount}</div>
      <div className="w-3/12 text-gray-50">{props.date}</div>
    </div>
  );
};

export default ListNewContact;
