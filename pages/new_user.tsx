import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import ListNewContact from "../components/list_new_contact";
import { url } from "../constant/url";
import { useAuth } from "../context/authContext";
import { ObjectData } from "../model/type";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import Loader from "../components/Loader";

const NewUser = () => {
  const [userData, setUserData] = useState<ObjectData[]>();
  const user = Cookies.get("accessToken");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(url + "/company/users", {
          headers: {
            Authorization: "Bearer " + user,
          },
        })
        .then((data) => {
          setUserData(data["data"]);
          setLoading(false);
        });
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <div className="flex-col items-center justify-center w-full h-full px-4 bg-slate-900">
        <div className="h-24">
          <h1 className="text-white">New User </h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex-col w-full h-full bg-gray-700 ">
            <div className="grid grid-cols-1 px-4 divide-y ">
              <ListNewContact
                id={"ID"}
                address={"Address"}
                score={"Score"}
                date={"Date"}
                updateCount={"Update Count"}
              />
              {userData &&
                userData.map((item: ObjectData, index: number) => {
                  return (
                    <Link href={`newUserForm/${item.address}`}>
                      <ListNewContact
                        id={index + 1}
                        address={item.address}
                        score={item.lastScore}
                        date={item.lastDate}
                        updateCount={item.updateCount}
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const { user } = useAuth();
//   const res = await fetch(url + "/company/users", {
//     headers: {
//       Authorization: "Bearer " + user,
//     },
//     // ---------------------------^ this req is the browser request to the getServersideProps
//   });
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }

export default NewUser;
