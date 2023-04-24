import React from "react";

type ListProps = {
  name: any;
  detail: any;
};

const ListContract = (props: ListProps) => {
  return (
    <div className="flex w-full mb-4 ">
      <div className="font-bold text-white">{props.name}</div>
      <div className="pl-4 text-white">{props.detail}</div>
    </div>
  );
};

export default ListContract;
