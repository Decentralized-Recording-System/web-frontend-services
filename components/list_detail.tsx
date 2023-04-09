import React from "react";
import { ObjectDetailData } from "../model/type";

const ListDetail = (props: ObjectDetailData) => {
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-2/12 text-gray-50">{props.braking}</div>
      <div className="w-3/12 text-gray-50">{props.dangerousBrake}</div>
      <div className="w-2/12 text-gray-50">{props.dangerousTurn}</div>
      <div className="w-3/12 text-gray-50">{props.dangerousSpeed}</div>
      <div className="w-2/12 text-gray-50">{props.averageSpeed}</div>
      <div className="w-2/12 text-gray-50">{props.drivingTime}</div>
      <div className="w-2/12 text-gray-50">{props.date}</div>
      <div className="w-2/12 text-gray-50">{props.score}</div>
    </div>
  );
};

export default ListDetail;
