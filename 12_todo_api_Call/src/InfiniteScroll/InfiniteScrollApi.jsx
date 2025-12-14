import React,{useState} from 'react'

const THRESHOLD = 20;

function InfiniteScrollApi(){
    const [data,setData] = useState([...new Array(40)]);
    const [loading,setLoading] = useState(false);

    function loadMore() {
        setLoading(true);
        setTimeout(()=>{
            setData((prev)=>[...prev , ...new Array(10) ])
            setLoading(false);
        },1000)
    }

    function handleScroll(event) {
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        // console.log("scroll dev scrollTop ",event.target);
     
        const remainingScroll = Math.floor(scrollHeight - ( Math.floor(scrollTop) + clientHeight ));

        if (remainingScroll<THRESHOLD && !loading) {
            loadMore();
        }
    }

  return (
    <>
    <div onScroll={handleScroll} className='flex justify-center align-middle m-7 overflow-auto'  style={{ height: "400px" }} >
    <ul>
        {
            data.map((_,index)=>(
                <li className='bg-gray-400 w-2xl border' key={index} >{index + 1}</li>
            ))
        }
        {loading && <div className='loading'>Loading...</div>}
    </ul>
    </div>
    </>
  )
}

export default InfiniteScrollApi
