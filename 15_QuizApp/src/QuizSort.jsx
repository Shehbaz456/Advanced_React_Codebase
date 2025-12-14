// import { useState } from "react";
import { useState } from "react";
import QuestionsList from "./components/QuestionsList";
import QList from "./constant/quizobj.json";
function QuizSort() {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [userAnswer,setUserAnswer] = useState([]);
  console.log("QList",QList);

  const handleUserAnswer = (userAnsOption)=>{
    let updated = [...userAnswer];
    updated[currentQuestion] = userAnsOption;
    setUserAnswer(updated);
  }

 const handlePrevBtn = () =>{
  // handlePrevBtn
  setCurrentQuestion(prev=>prev - 1);
 }
 const handleNextBtn = () =>{
  setCurrentQuestion(prev=>prev + 1);
 }

  return (
    <>
    <div className="flex justify-center">
    <div className=" min-w-6/12 bg-gray-300 p-5  rounded-2xl" >
    <h1 className="text-2xl font-bold" >Quiz App</h1>
    <QuestionsList Questions={QList.questions[currentQuestion]} setUserAnswer={handleUserAnswer} currentQuestion={currentQuestion} userAnswer={userAnswer[currentQuestion]}  />
    <div className="flex justify-center gap-5">
    <button onClick={handlePrevBtn} className="mt-6 px-4 py-3 bg-gray-600 text-white font-bold rounded-lg 
         hover:bg-gray-700 disabled:bg-gray-400" disabled={currentQuestion===0} >Previous</button>
    <button onClick={handleNextBtn} className="mt-6 px-4 py-3 bg-purple-600 text-white font-bold rounded-lg 
      hover:bg-purple-700 disabled:bg-gray-400" disabled={currentQuestion === QList.questions.length - 1 } >Next</button>
    </div>
    </div>
     </div>
   
    </>
  )
}

export default QuizSort
