import React,{useEffect, useState,useRef} from "react";

function InfiScrollOIntersertionObserver() {
  const [data, setData] = useState([...new Array(70)]);
  const [loading,setLoading] = useState(false);

  const arrayListRef = useRef([]);
  
  
  useEffect(()=>{
    const Observer = new IntersectionObserver(function(entries){
      console.log(entries);
      entries.forEach((entry)=>{
        if (entry.isIntersecting) {
          entry.target.style.backgroundColor = "red";
        }else{
          entry.target.style.backgroundColor = "blue";
        }
      })
    },{ 
      threshold:0.6,
      rootMargin:"200px",
      root:document.querySelector(".scroll-view-element-window")
     });


    arrayListRef.current.forEach((el) => {
      Observer.observe(el);
    });
    // console.log("arrayListRef",arrayListRef.current);

    

  },[])

  return (
    <>
     <div className='flex justify-center align-middle m-7 overflow-auto scroll-view-element-window'  style={{ height: "400px" }} >
    <ul>
        {
            data.map((_,index)=>(
                <li ref={(el)=>arrayListRef.current[index]=el} className='bg-gray-400 w-2xl border' key={index} >{index + 1}</li>
            ))
        }
        {loading && <div className='loading'>Loading...</div>}
    </ul>
    </div>
    </>
  );
}
