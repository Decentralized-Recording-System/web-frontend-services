import axios from "axios";
import React from "react";
import { url } from "../constant/url";
import user from "../pages/user";

type ListProps = {
  _id: any;
  contractId: any;
  contractValue: any;
  status: any;
};

const ListBlockchainPending = (props: ListProps) => {
  const sendEmail = () => {
    console.log(props.contractId);
    console.log(url + "/contract/company/email/" + props.contractId);

    axios
      .post(
        url + "/contract/company/email/" + props.contractId,
        {},
        {
          headers: {
            Authorization: "Bearer " + user,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
        } else if (response.status == 400) {
          console.log(response.status);
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-10">
      <div className="w-1/12 text-gray-50">{props._id}</div>
      <div className="w-4/12 text-gray-50">{props.contractId}</div>
      <div className="w-2/12 text-gray-50">{props.contractValue}</div>
      {props.status === "pending" ? (
        <div className="w-2/12 text-gray-50">
          <div className="flex justify-center w-2/6 h-full px-4 bg-blue-700 rounded-md">
            {props.status}
          </div>
        </div>
      ) : (
        <div className="w-2/12 text-gray-50"> {"User" + props.status}</div>
      )}
      <div className="w-2/12 text-gray-50"></div>
    </div>
  );
};

export default ListBlockchainPending;
