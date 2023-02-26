import React from "react";
import Layout from "../components/layout";
import ListNewContact from "../components/list_new_contact";

const OldUser = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Old User </h1>
        </div>
        <div className="flex-col w-full h-full bg-gray-700 ">
          <div className="grid grid-cols-1 px-4 divide-y ">
            <ListNewContact
              id={"ID"}
              address={"Address"}
              score={"Score"}
              contract={"Contract"}
            />
            <a href="/oldUserForm">
              <ListNewContact
                id={"1"}
                address={"0xvdfhfghfjgyikuyouuhkl"}
                score={"15"}
                contract={"detail"}
              />
            </a>

            <ListNewContact
              id={"2"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"detail"}
            />
            <ListNewContact
              id={"3"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"detail"}
            />
            <ListNewContact
              id={"4"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"detail"}
            />
            <ListNewContact
              id={"5"}
              address={"0xvdfhfghfjgyikuyouuhkl"}
              score={"15"}
              contract={"detail"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OldUser;
