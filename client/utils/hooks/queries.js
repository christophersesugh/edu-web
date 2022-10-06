import { useQuery } from "@tanstack/react-query";
import { client } from "../api-client";

function useFetchQuery(endpoint = "courses", key = "courses", query = "") {
  return useQuery({
    queryKey: [key],
    queryFn: () =>
      client(`${endpoint}?query=${query}`).then((result) => result.data),
  });
}

export { useFetchQuery };
