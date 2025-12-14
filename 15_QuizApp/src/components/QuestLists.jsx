
function QuestLists({Questions,setUserAnswer,userAnswer}) {
    const handleOptions = (optionIndex) =>{
        setUserAnswer(optionIndex);
    }
  return (
    <div key={Questions.id} >
        <p className='text-2xl m-5'>Q{Questions.id}: {Questions.question} </p>
      <ul className='w-full grid md:grid-cols-2 gap-2' >
       {
        Questions.options.map((Opt,index)=>(
                <li key={index} ><button onClick={()=>handleOptions(index)} 
        className={`w-full p-3 border rounded-xl text-xl text-white ${userAnswer === index ? "bg-green-500 " : "bg-blue-400" } `}
                >{Opt}</button></li>
        ))
       }
      </ul>
       

    </div>
  )
}

export default QuestLists
