import React, { useEffect, useState } from 'react'

export const useUser = () => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError]  = useState(null);

    useEffect(()=>{
        
      async function fetchData() {
        try {
        let resp = await fetch("https://api.freeapi.app/api/v1/public/randomusers/13");
        console.log("resp OK",resp);
        
        if (!resp.ok) {
          console.log("resp not OK",resp);
          setError(`Error: ${resp.status} ${resp.statusText}`);
          setLoading(false);
          return;
        }
        let data = await resp.json();
        console.log("data get api call",data);
        console.log("data setuser data.data",data.data);
        setUser(data.data);
        setLoading(false);
    } catch (err) {
        console.log("Error of api call",err);
        setError(err.message);
        setLoading(false);
        }
      }
      fetchData();
    },[])
  return {user,loading,error}
}


