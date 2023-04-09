import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { url } from "../../constant/url";
import axios from "axios";
import { ObjectDetailData } from "../../model/type";
import Cookies from "js-cookie";
import ListDetail from "../../components/list_detail";
import Loader from "../../components/Loader";

const newUserForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<ObjectDetailData[]>();
  const user = Cookies.get("accessToken");
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
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Promotion"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Content
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Content"
                    required
                  />
                </div>
                <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
                  Request
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
