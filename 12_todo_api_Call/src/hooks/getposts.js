import { useEffect, useState } from "react"
import axios from "axios"
export const usePosts = ()=>{
  const [posts,setPost] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    async function fetchPosts(){
    try {
        let res = await axios("https://jsonplaceholder.typicode.com/posts");
        console.log("Api call hooks :",res.data);
        if(!res.status===200){
            throw new Error("failed to fetch Posts");
        }
       setPost(res.data);
        
    } catch (err) {
        setError(err);
        console.log(`Erorr ${err}`);
        
    } finally{
       setLoading(false);
    }
  }
    fetchPosts()
  },[])
  
  return {posts,loading,error}
}


