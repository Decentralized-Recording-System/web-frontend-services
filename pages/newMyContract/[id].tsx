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

const newUserForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<ObjectContractData>();
  const [promotionCode, setPromotionCode] = useState<ObjectPromotionData[]>();
  const user = Cookies.get("accessToken");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>({});

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
        <div className="h-full py-6 pl-4 font-bold text">
          <h1 className="text-white">View User Contract Data</h1>
        </div>

        <div className="flex-col w-full h-full pb-2 bg-gray-800 rounded-lg">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 px-4 ">
              <div className="flex items-center justify-between py-3">
                <div className="flex text-white">
                  <h1 className="font-bold">Address</h1>
                  <p className="pl-4">{id}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex mb-2 text-white">
                  <h1 className="font-bold">Contract Value</h1>
                  <p className="pl-4">{userData?.contractValue}</p>
                </div>
              </div>
              <div className="flex-col items-center justify-center text-white">
                <h1 className="mb-2 font-bold">Contract Detail</h1>
                <div className="flex-col px-3 pt-2 pb-1 bg-slate-700 rounded-xl">
                  {userData &&
                    userData.contractData.map((item: any) => {
                      for (const [key, value] of Object.entries(item)) {
                        return <ListContract name={key} detail={value} />;
                      }
                    })}
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex text-white">
                  <h1 className="font-bold">Start </h1>
                  <p className="pl-4">{userData?.start.slice(0, 10)}</p>
                </div>
                <div className="flex text-white">
                  <h1 className="font-bold">Expire </h1>
                  <p className="pl-4">{userData?.expire.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default newUserForm;
