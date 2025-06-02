import { useEffect, useState } from "react";

export function useProducts(){
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/public/randomusers/13")
        .then((res)=>{
            if(!res.ok) throw new Error("Failed to fetch special chai");
           return res.json()
        })
        .then((data)=>{
            console.log(data);
            setUser(data.data);
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message || "Something went wrong");
            setLoading(false)
        })
        
    },[])

    return {user,loading,error}
}
