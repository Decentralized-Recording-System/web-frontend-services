import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import Cookies from "js-cookie";
import { url } from "../constant/url";
import { ObjectCompanyModel } from "../model/type";
import ListOldContract from "../components/list_oldUser";
import Loader from "../components/Loader";
import ListBlockchainActive from "../components/list_blockchain_status_active";
import ListBlockchainPending from "../components/list_blockchain_status_pending";
import ListSentEmail from "../components/list_send_email_status_sent";
import ListUnSentEmail from "../components/list_send_email_status_unsend";

const OwnerContract = () => {
  const [userData, setUserData] = useState<ObjectCompanyModel[]>();
  const [companyData, setCompanyData] = useState<any>();
  const user = Cookies.get("accessToken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(url + "/company/data", {
          headers: {
            Authorization: "Bearer " + user,
          },
        })
        .then((data) => {
          setCompanyData(data["data"]["data"]["_id"]);
          console.log(data["data"]["data"]["_id"]);
        });

      if (companyData) {
        axios
          .get(url + "/contract/company/" + companyData, {
            headers: {
              Authorization: "Bearer " + user,
            },
          })
          .then((data) => {
            setUserData(data["data"]["data"]);
            setLoading(false);
          });
      }
    } catch (error) {}
  }, [companyData]);

  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full min-h-full px-4 bg-slate-900">
        <div className="h-full py-6 pl-4 font-bold text">
          <h1 className="text-white">My Own Contract </h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex-col w-full h-full pb-4 rounded-md">
            <div className="grid grid-cols-1 px-4 divide-y ">
              <div className="w-full bg-gray-800">
                <ListSentEmail
                  _id={"Number"}
                  contractId={"Contract ID"}
                  contractValue={"Contract Value"}
                  status={"status"}
                  nonFunction={false}
                />
              </div>

              {userData &&
                userData
                  .filter(
                    (item) =>
                      item.status == "active" && item.userStatus == "active"
                  )
                  .map((item: ObjectCompanyModel, index: number) => {
                    console.log(item);
                    return (
                      <ListBlockchainActive
                        _id={index + 1}
                        contractId={item.contractId}
                        contractValue={item.contractValue}
                        status={item.status}
                        nonFunction={true}
                      />
                    );
                  })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OwnerContract;
