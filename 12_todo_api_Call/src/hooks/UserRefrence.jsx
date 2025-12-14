import React, { useRef, useState } from 'react'

function UserRefrence() {
    const [num,setNum] = useState(0);
    const inputone = useRef();
    
    const getNumBox =()=>{
        console.log(inputone);
        inputone.current.style.width="200px";
        console.log("Hello Num");
    }
    
    const getTextBox=()=>{
        console.log("Hello Text");
        inputone.current.style.width="100px";
    };

  return (
    <>
    <div>
      <h2>Learn Code Online</h2>
      <input className='border-4 border-amber-300' style={{width:"100px"}} type='number' ref={inputone} value={num} onChange={(e)=> setNum(e.target.value) } />
      <input type='text'  value={num} onChange={(e)=> setNum(e.target.value) } />
      <h3>Value : {num}</h3>      
      <button className='btn rounded-full shadow-xl/30 bg-blue-500 p-2 m-4' onClick={()=>getNumBox()} >Rupees</button>
      <button className='btn rounded-full shadow-xl/30 bg-gray-500 p-2 m-4' onClick={()=>getTextBox()} >dollar</button>
    </div>
    </>
  )
}

export default UserRefrence
