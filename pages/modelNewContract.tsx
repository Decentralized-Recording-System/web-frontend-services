import React from "react";
import Layout from "../components/layout";
import ListNewContact from "../components/list_new_contact";

const modelNewContract = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Model Contract/New Contract</h1>
        </div>
        <div className="flex-col w-full h-full bg-gray-700 ">
          <div className="grid grid-cols-1 px-4 divide-y ">
            <ListNewContact
              id={"ID"}
              address={"Address"}
              score={"Score"}
              contract={"Info"}
            />

            <a href="/createNewContract">
              <ListNewContact
                id={"1"}
                address={"0xvdfhfghfjgyikuyouuhkl"}
                score={"15"}
                contract={"Info"}
              />
            </a>

            <ListNewContact
              id={"2"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"Info"}
            />
            <ListNewContact
              id={"3"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"Info"}
            />
            <ListNewContact
              id={"4"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"Info"}
            />
            <ListNewContact
              id={"5"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"Info"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default modelNewContract;
