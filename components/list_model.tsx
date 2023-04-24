import React from "react";

type ListProps = {
  name: any;
};

const ListModel = (props: ListProps) => {
  return (
    <div className="flex content-center mb-6 text-center ">
      <div className="px-4 py-3 mr-3 font-bold text-white bg-green-500 border-4 border-green-400 rounded-2xl">{`${props.name} Model`}</div>
    </div>
  );
};

export default ListModel;
