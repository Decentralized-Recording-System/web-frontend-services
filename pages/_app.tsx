import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader";
import { AuthProvider } from "../context/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (router) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (router) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (router) => {
      setIsLoading(false);
    });
  }, [Router]);
  return (
    <>
      <AuthProvider>
        {isLoading && <Loader />}
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
