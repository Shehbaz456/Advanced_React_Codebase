import React,{useEffect, useState,useRef} from "react";

function InfiScrollObserver() {
  const [data, setData] = useState([...new Array(70)]);
  const [loading,setLoading] = useState(false);

  const ListRef = useRef([]);
  
  function loadMore() {
    setLoading(true);
    setTimeout(()=>{
        setData((prev)=>[...prev,...new Array(10)])
        setLoading(false);
    },200)
  }
  
  useEffect(()=>{
    const Observer = new IntersectionObserver(function(entries){
           if(entries[0].isIntersecting){
            Observer.unobserve(entries[0].target);
            loadMore();
           }
    });

    const lastElment =  ListRef.current[ ListRef.current.length - 1];
    Observer.observe(lastElment);

    return () =>{
        // Observer.disconnect();
        Observer.unobserve(lastElment)
    }
  
  },[data.length])

  return (
    <>
     <div className='flex justify-center align-middle m-7 overflow-auto scroll-view-element-window'  style={{ height: "400px" }} >
    <ul>
        {
            data.map((_,index)=>(
                <li ref={(el)=>ListRef.current[index]=el} className='bg-gray-400 w-2xl border' key={index} >{index + 1}</li>
            ))
        }
        {loading && <div className='loading bg-gray-400 w-2xl border'>Loading...</div>}
    </ul>
    </div>
    </>
  );
}

export default InfiScrollObserver;
