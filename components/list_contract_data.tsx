import React from "react";

type ListProps = {
  name: any;
  detail: any;
};

const ListContract = (props: ListProps) => {
  return (
    <div className="flex flex-col w-full mb-6 ">
      <div className="text-white">{props.name}</div>
      <div className="text-white">{props.detail}</div>
    </div>
  );
};

export default ListContract;
