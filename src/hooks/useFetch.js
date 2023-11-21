import { useState, useEffect } from "react";
export function useFetch(fetchFun, initial) {
  let [api, setApi] = useState(initial);
  let [isError, setIsError] = useState("");
  let [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsloading(true);
      try {
        let fetchLink = await fetchFun();
        setApi(fetchLink);
        setIsloading(false);
      } catch (error) {
        setIsError(error.message);
        setIsloading(false);
      }
    }
    getData();
  }, []);
  return { api, isError, isLoading };
}
