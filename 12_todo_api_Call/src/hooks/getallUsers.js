import { useEffect, useState } from "react";

export const useUsers = (page=1) => {
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllUser() {
      try {
        let res = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}`);
        if (!res.ok) {
          console.log("resp not OK", res);
          setError(`Error: ${res.status} ${res.statusText}`);
          setLoading(false);
        }

        let usersResponse = await res.json();
        setMeta(usersResponse.data)
        console.log("data users", usersResponse);
        setUsers(usersResponse.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchAllUser();
  }, [page]);
  return { users,meta, loading, error };
};
