import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import ListModel from "../components/list_model";
import Cookies from "js-cookie";
import { ObjectModel } from "../model/type";
import axios from "axios";
import { url } from "../constant/url";
import Loader from "../components/Loader";
import Link from "next/link";

const ModelPage = () => {
  const [model, setModel] = useState<ObjectModel[]>();
  const user = Cookies.get("accessToken");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(url + "/model-contract/company", {
          headers: {
            Authorization: "Bearer " + user,
          },
        })
        .then((data) => {
          setModel(data["data"]["data"]);
          setLoading(false);
        });
    } catch (error) {}
  }, []);
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="h-full py-6 pl-4 font-bold text">
              <h1 className="text-white">Model Contract/Model</h1>
            </div>

            <div className="flex flex-wrap">
              {model &&
                model.map((data) => {
                  return <ListModel name={data.modelContractName} />;
                })}
            </div>
            <Link href="/createNewContract">
              <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
                create new Model
              </button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ModelPage;
