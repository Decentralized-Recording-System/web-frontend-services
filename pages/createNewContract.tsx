import React, { useState, useCallback, useEffect } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { url } from "../constant/url";
import Cookies from "js-cookie";
import { log } from "console";
const inputValue = [
  {
    type: "text",
    id: 1,
    value: "",
    key: "",
  },
];

const createNewContract = () => {
  const [loading, setLoading] = useState(false);
  const [arrValue, setArrValue] = useState(inputValue);
  const [modelName, setModelName] = useState("");
  const [objectData, setObjectData] = useState({});

  const user = Cookies.get("accessToken");
  const addInput = () => {
    setArrValue((s: any) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
          key: "",
        },
      ];
    });
  };

  const handleChangeValue = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setArrValue((s) => {
      const newArr = s.slice();

      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  const handleChangeTopic = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setArrValue((s) => {
      const newArr = s.slice();
      newArr[index].key = e.target.value;

      return newArr;
    });
  };
  const handleChangeModelName = (e: any) => {
    e.preventDefault();
    setModelName(e.target.value);
    console.log(e.target.value);
  };
  const sendModelToUser = useCallback(() => {
    setLoading(true);

    if (modelName) {
      try {
        console.log(arrValue.length);

        let oldState = [];
        for (let index = 0; index < arrValue.length; index++) {
          const key = arrValue[index].key;
          const value = arrValue[index].value;
          const result = {
            [key]: value,
          };

          // oldState = { ...oldState, ...result };
          oldState.push(result);
        }
        console.log({
          modelContractName: modelName,
          data: oldState,
        });

        // axios
        //   .post(
        //     url + "/model-contract/company/create",
        //     {
        //       modelContractName: modelName,
        //       data: [oldState],
        //     },
        //     {
        //       headers: {
        //         Authorization: "Bearer " + user,
        //       },
        //     }
        //   )
        //   .then((response) => {
        //     if (response.status == 200) {
        //       setLoading(false);
        //     } else if (response.status == 400) {
        //       console.log(response.status);
        //     }
        //   });
      } catch (error) {
        console.log(error);
      }
    }
  }, [loading, objectData, setObjectData, modelName, arrValue]);

  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <h1 className="text-black ">Model Contract/New Contract/1</h1>
        <div className="flex-col w-full h-full px-5 pt-5 bg-gray-700">
          <label className="block mb-2 text-sm font-medium text-black">
            Model Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border mb-2 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Model Name"
            required
            onChange={handleChangeModelName}
            value={modelName}
          />

          {arrValue.map((item, i) => {
            return (
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="More Topic Detail"
                  onChange={handleChangeTopic}
                  value={item.key}
                  id={`${i}`}
                  type={item.type}
                  size={40}
                />
                <input
                  className="bg-gray-50 border mb-2 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                  placeholder="More Detail"
                  onChange={handleChangeValue}
                  value={item.value}
                  id={`${i}`}
                  type={item.type}
                  size={40}
                />
              </div>
            );
          })}
          <button
            className="px-4 py-2 mt-4 mb-4 font-bold text-black bg-blue-500 rounded hover:bg-blue-700"
            onClick={addInput}
          >
            add more detail
          </button>

          <label className="block mb-2 text-sm font-medium text-black">
            Promotion Code
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Promotion Code"
            required
          />
          <button
            className="px-4 py-2 mt-4 font-bold text-black bg-blue-500 rounded hover:bg-blue-700 "
            onClick={sendModelToUser}
          >
            send
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default createNewContract;
