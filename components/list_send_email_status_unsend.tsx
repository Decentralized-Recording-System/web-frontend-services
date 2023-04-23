import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../constant/url";
import Cookies from "js-cookie";

type ListProps = {
  _id: any;
  contractId: any;
  contractValue: any;
  status: any;
  userId: any;
};

const ListUnSentEmail = (props: ListProps) => {
  const user = Cookies.get("accessToken");
  const [status, setStatus] = useState<any>(false);
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
          setStatus(true);
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
      {props.status === "notSend" ? (
        <div className="w-2/12 text-gray-50">
          <button
            onClick={sendEmail}
            className="flex justify-center w-2/6 h-full px-4 bg-blue-700 rounded-md"
          >
            <p>UnSend</p>
          </button>
        </div>
      ) : (
        <div className="w-2/12 text-gray-50">
          <p>{props.status}</p>
        </div>
      )}
      <div className="w-2/12 text-gray-50">
        {props.status === "notSend" ? (
          <button
            onClick={sendEmail}
            className="w-2/4 h-full px-3 bg-indigo-700 rounded-md"
          >
            <p>Send Email</p>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListUnSentEmail;
