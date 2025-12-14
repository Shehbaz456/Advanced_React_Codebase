import React from 'react'

function QuestionsList({Questions,currentQuestion,setUserAnswer,userAnswer}) {
    console.log("Question child: ",Questions);
    const handleAnswerOptions =(optionAns)=>{
        setUserAnswer(optionAns);
    }
    
  return (
    <div>
    <h3 className='text-2xl m-2' > Q{currentQuestion + 1}: {Questions.question}</h3>  
    <ul className='grid md:grid-cols-2 gap-5 mt-6 '>
        {
            Questions.options.map((opt,index)=>(
                <li key={index}><button onClick={()=>handleAnswerOptions(index)} className={`
                w-full px-4 py-3 font-medium rounded-lg transition-all duration-200 text-white
                ${ userAnswer === index  ? "bg-green-500 " : "bg-blue-400" }
              `} >{opt}</button> </li>
            ))
        }
    </ul>
    </div>
  )
}

export default QuestionsList
