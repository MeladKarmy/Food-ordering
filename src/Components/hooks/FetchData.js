import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const { token } = useSelector((state) => state.Auth.token);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const { data } = await axios.get(
          `https://foode-order.onrender.com/api/v1/${url}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
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
    return () => {
      setData(null);
    };
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
