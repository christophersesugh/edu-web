import React from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "config/firebase";
import { useAsync } from "./use-async";

type UseFetchProps = {
  key: string;
  value: string;
};

// useFetch with query parameters
function useFetchWithQuery({ key = "", value = "" }: UseFetchProps) {
  const { data, isLoading, isSuccess, run, isError, reset, error } = useAsync();
  React.useEffect(() => {
    const q = query(collection(db, "courses"), where(key, "==", value));
    if (isError) {
      run(reset());
    } else {
      run(getDocs(q));
    }
  }, [isError, key, reset, run, value]);
  return [data, isError, error, isLoading, isSuccess];
}

//useFetch without query parameters
function useFetch() {
  const { data, isLoading, isSuccess, run, isError, reset, error } = useAsync();
  React.useEffect(() => {
    const dbSnapshot = collection(db, "courses");
    if (isError) {
      run(reset());
    } else {
      run(getDocs(dbSnapshot));
    }
  }, [isError, reset, run]);
  return [data, error, isError, isLoading, isSuccess];
}

export { useFetchWithQuery, useFetch };
