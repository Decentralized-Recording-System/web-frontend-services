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

const SignUser = () => {
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
        console.log(url + "/company/users/" + companyData);

        axios
          .get(url + "/contract/company/" + companyData, {
            headers: {
              Authorization: "Bearer " + user,
            },
          })
          .then((data) => {
            setUserData(data["data"]["data"]);
            console.log(data["data"]["data"]);

            setLoading(false);
          });
      }
    } catch (error) {}
  }, [companyData]);
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full min-h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Sign User </h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex-col w-full h-full pb-4 bg-gray-700 rounded-md">
            <div className="grid grid-cols-1 px-4 divide-y ">
              <h1 className="mt-4 mb-4 text-2xl text-white">Sign User</h1>
              <ListSentEmail
                _id={"Number"}
                contractId={"Contract ID"}
                contractValue={"Contract Value"}
                status={"status"}
                nonFunction={false}
              />

              {userData &&
                userData
                  .filter((item) => {
                    return item.userStatus === "active";
                  })
                  .map((item: ObjectCompanyModel, index: number) => {
                    return (
                      <ListBlockchainActive
                        _id={index + 1}
                        contractId={item.contractId}
                        contractValue={item.contractValue}
                        status={item.userStatus}
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

export default SignUser;
