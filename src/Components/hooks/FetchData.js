import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const { data } = await axios.get(
          `https://foode-order.onrender.com/api/v1/${url}`
        );
        if (!data.status === "success") throw new Error(data.statusText);
        setIsPending(false);
        setData(data.data.pizza);
        setError(null);
        // toast.success(data.status);
      } catch (error) {
        setError(`${error.message} Could not Fetch Data `);
        setIsPending(false);
        // toast.error(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
