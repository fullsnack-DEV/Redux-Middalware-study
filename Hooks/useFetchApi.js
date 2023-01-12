//custom Hook
import axios from "axios";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import * as API from "../API/Api";
export default function useFetchApi(endpoint) {
  //input endpoint

  const [data, Setdata] = useState();
  const [loading, SetLoading] = useState(false);
  const [status, Setstatus] = useState();

  useEffect(() => {
    //check id compoenent is mounted

    const fetchData = async (endpoint) => {
      SetLoading(true);
      const response = await API.getAllProducts(endpoint);
      SetLoading(false);
      Setdata(response.data);
      Setstatus(response.status);
    };

    fetchData(endpoint);

    const cleanUp = () => {
      console.log("clean up");
    };
    return cleanUp;
  }, [endpoint]);

  return { data, loading, status };
}
