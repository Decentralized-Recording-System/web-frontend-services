import React from "react";

type ListProps = {
  name: any;
};

const ListModel = (props: ListProps) => {
  return (
    <div className="flex w-full mb-6 h-36">
      <div className="w-4/12 bg-green-300 ">{`${props.name} Model`}</div>
      <div className="w-8/12 bg-gray-700"></div>
    </div>
  );
};

export default ListModel;
