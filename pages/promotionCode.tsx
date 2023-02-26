import React from "react";
import Layout from "../components/layout";
import ListNewContact from "../components/list_new_contact";
import ListNewPromotion from "../components/list_new_promotion";

const PromotionCode = () => {
  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">Promotion </h1>
        </div>
        <div className="flex-col w-full h-full bg-gray-700 ">
          <div className="grid grid-cols-1 px-4 divide-y ">
            <ListNewPromotion
              id={"ID"}
              address={"Address"}
              used={"used"}
              start={"start/expire"}
              status={"status"}
            />
            <a href="/createPomotion">
              <ListNewPromotion
                id={"1"}
                address={"0xdfgdgdfgdfhdfdf"}
                used={"80/100"}
                start={"01/08"}
                status={"on/off"}
              />
            </a>

            <ListNewPromotion
              id={"2"}
              address={"0xdfgdgdfgdfhdfdf"}
              used={"80/100"}
              start={"01/08"}
              status={"on/off"}
            />
            <ListNewPromotion
              id={"3"}
              address={"0xdfgdgdfgdfhdfdf"}
              used={"80/100"}
              start={"01/08"}
              status={"on/off"}
            />
            <ListNewPromotion
              id={"4"}
              address={"0xdfgdgdfgdfhdfdf"}
              used={"80/100"}
              start={"01/08"}
              status={"on/off"}
            />
            <ListNewPromotion
              id={"5"}
              address={"0xdfgdgdfgdfhdfdf"}
              used={"80/100"}
              start={"01/08"}
              status={"on/off"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PromotionCode;
