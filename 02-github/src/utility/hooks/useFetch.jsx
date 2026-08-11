import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){            // define an async function to fetch data
        const res = await fetch(url);
        const jsonRes = await res.json();
        setData(jsonRes);
    }
    fetchData();    // call the async function to fetch data
  },[])

  return data;
}

export default useFetch;