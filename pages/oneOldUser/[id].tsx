import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { url } from "../../constant/url";
import axios from "axios";
import {
  ObjectContractData,
  ObjectDetailData,
  ObjectPromotionData,
} from "../../model/type";
import Cookies from "js-cookie";
import ListDetail from "../../components/list_detail";
import Loader from "../../components/Loader";
import ListContract from "../../components/list_contract_data";

const OneOldUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<ObjectContractData>();
  const [promotionCode, setPromotionCode] = useState<ObjectPromotionData[]>();
  const user = Cookies.get("accessToken");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>({});
  const sendEmail = (contractId: any) => {
    axios
      .post(
        url + "/contract/company/email/" + contractId,
        {},
        {
          headers: {
            Authorization: "Bearer " + user,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          router.push("/olduser");
        } else if (response.status == 400) {
          console.log(response.status);
        }
      });
  };
  useEffect(() => {
    try {
      if (id) {
        setLoading(true);
        axios
          .get(url + `/contract/company/own-contract/${id}`, {
            headers: {
              Authorization: "Bearer " + user,
            },
          })
          .then((data) => {
            console.log(data["data"]["data"]);

            setUserData(data["data"]["data"]);

            setLoading(false);
          });
      }
    } catch (error) {}
  }, [id]);

  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full min-h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">View User Data</h1>
        </div>

        <div className="flex-col w-full h-full pb-2 bg-gray-700">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 px-4 divide-y">
              <div className="flex items-center justify-between h-32">
                <div className="flex-col text-white">
                  <h1>Address</h1>
                  <p>{id}</p>
                </div>
              </div>
              <div className="flex items-center justify-between h-32">
                <div className="flex-col text-white">
                  <h1>Contract Value</h1>
                  <p>{userData?.contractValue}</p>
                </div>
              </div>
              <div className="flex-col items-center justify-center text-white">
                <div className="flex-col px-4 pt-2 pb-1 bg-slate-400">
                  {userData &&
                    userData.contractData.map((item: any) => {
                      for (const [key, value] of Object.entries(item)) {
                        return <ListContract name={key} detail={value} />;
                      }
                    })}
                </div>
              </div>
              <div className="flex items-center justify-between h-32">
                <div className="flex-col text-white">
                  <h1>Start </h1>
                  <p>{userData?.start.slice(0, 10)}</p>
                </div>
                <div className="flex-col text-white">
                  <h1>Expire </h1>
                  <p>{userData?.expire.slice(0, 10)}</p>
                </div>
              </div>
              <button
                className="w-1/5 px-4 py-2 mt-4 font-bold text-black bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => sendEmail(userData?.contractId)}
              >
                Send Email
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OneOldUser;
