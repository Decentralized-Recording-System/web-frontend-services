import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { url } from "../../constant/url";
import axios from "axios";
import { ObjectDetailData, ObjectPromotionData } from "../../model/type";
import Cookies from "js-cookie";
import ListDetail from "../../components/list_detail";
import Loader from "../../components/Loader";

const newUserForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<ObjectDetailData[]>();
  const [promotionCode, setPromotionCode] = useState<ObjectPromotionData[]>();
  const user = Cookies.get("accessToken");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>({});
  const dropdownSelect = () => {
    setOpen(!open);
  };
  const selectData = (data: any) => {
    setData(data);
    setOpen(false);
  };
  const sendContract = (address: any, promotionCodeId: any) => {
    try {
      axios
        .post(
          url + "/promotion-code/sent",
          {
            address: address,
            promotionCodeId: promotionCodeId,
          },
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    try {
      if (id) {
        setLoading(true);
        axios
          .get(url + `/company/users/${id}`, {
            headers: {
              Authorization: "Bearer " + user,
            },
          })
          .then((data) => {
            setUserData(data["data"]);
            setLoading(false);
          });
      }
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    try {
      if (id) {
        setLoading(true);
        axios
          .get(url + `/promotion-code`, {
            headers: {
              Authorization: "Bearer " + user,
            },
          })
          .then((data) => {
            console.log(data["data"]["data"]);

            setPromotionCode(data["data"]["data"]);
            setLoading(false);
          });
      }
    } catch (error) {}
  }, [id]);
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Create New User Form</h1>
        </div>
        <div className="flex-col w-full h-full bg-gray-700 ">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 px-4 divide-y">
              <div className="flex items-center justify-between h-32">
                <div className="flex-col text-white">
                  <h1>Address</h1>
                  <p>{id}</p>
                </div>
                <div className="flex-col text-white">
                  <h1>Score</h1>
                  <p>80</p>
                </div>
              </div>
              <div className="flex-col items-center justify-center text-white">
                <h1>Tip</h1>
                <ListDetail
                  braking={"braking"}
                  dangerousBrake={"dangerousBrake"}
                  dangerousTurn={"dangerousTurn"}
                  dangerousSpeed={"dangerousSpeed"}
                  averageSpeed={"averageSpeed"}
                  drivingTime={"drivingTime"}
                  date={"date"}
                  score={"score"}
                />
                <div className="flex-col h-56 bg-slate-400">
                  <div className="flex-col">
                    {userData &&
                      userData.map((item: ObjectDetailData, index: number) => {
                        return (
                          <ListDetail
                            braking={item.braking}
                            dangerousBrake={item.dangerousBrake}
                            dangerousTurn={item.dangerousTurn}
                            dangerousSpeed={item.dangerousSpeed}
                            averageSpeed={item.averageSpeed}
                            drivingTime={item.drivingTime}
                            date={item.date}
                            score={item.score}
                          />
                        );
                      })}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Promotion
                  </label>

                  <button
                    id="dropdownDividerButton"
                    data-dropdown-toggle="dropdownDivider"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={dropdownSelect}
                  >
                    {data.id != null ? data.name : <p>Select Your promotion</p>}
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {open ? (
                    <div
                      id="dropdownDivider"
                      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDividerButton"
                      >
                        {promotionCode &&
                          promotionCode.map((item: ObjectPromotionData) => {
                            return (
                              <li>
                                <button
                                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  onClick={() =>
                                    selectData({
                                      name: item.promotionCodeName,
                                      id: item.promotionCodeId,
                                    })
                                  }
                                >
                                  {item.promotionCodeName}
                                </button>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <button
                  className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 "
                  onClick={() => sendContract(id, data.id)}
                >
                  Send Contract
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default newUserForm;
