import React from "react";

type ListProps = {
  name: any;
};

const ListModel = (props: ListProps) => {
  return (
    <div className="flex w-1/6 mb-6 h-36">
      <div className="w-9/12 bg-green-500 ">{`${props.name} Model`}</div>
      <div className="w-3/12 bg-gray-700"></div>
    </div>
  );
};

export default ListModel;
