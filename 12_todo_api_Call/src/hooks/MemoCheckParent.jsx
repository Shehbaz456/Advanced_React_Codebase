import React, { useState } from 'react'

function MemoCheckParent() {
    const [count,setCount]= useState(0);
    const [text,setText]= useState("");
  return (
    <div>
      <h1>Memo Check Parent</h1>
      <h3>Count {count}</h3>
      <button onChange={(e)=>setCount(e.target.text)} >Increses Count</button>
      <input type='text' placeholder='Enter text' />
    </div>
  )
}

export default MemoCheckParent
