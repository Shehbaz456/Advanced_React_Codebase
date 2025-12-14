import { useState } from "react";
import QList from "./constant/questionQuiz.json";
import QuestLists from "./components/QuestLists";

function QuizApp() {
  const [userAnswer,setUserAnswer] = useState([]);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleUserAnswer = (optionAnsIndex) =>{
    let updated = [...userAnswer];
    updated[currentQuestion] = optionAnsIndex;
    setUserAnswer(updated);
    console.log("userAnswer optionAnsIn",userAnswer,optionAnsIndex); 
  }

  const NextQuestionBtn = () =>{
    if(currentQuestion === QList.questions.length - 1){
      setShowResult(true);
      return
    }
    setCurrentQuestion(prev => prev + 1);
  }
  const PreviousQuestionBtn = () =>{
    setCurrentQuestion(prev => prev - 1);
  }
  const handleRetakeQuiz = () =>{
    setCurrentQuestion(0);
    setShowResult(false);
    setUserAnswer([])
  }

  const handleShowResult =()=>{
     setShowResult(true);
  }

  if(showResult){
    let score=0;
    QList.questions.forEach((q,i)=>{
      if(q.answer === userAnswer[i]) return score++;
    } )
    return (
      <div className="bg-gray-300" >
         <h1 className="text-center text-3xl font-bold" >Quiz App</h1>
         <h3 className="text-center text-2xl" >Result Score : {score} / {QList.questions.length} </h3>
         <div className="flex justify-center align-baseline">
         <button onClick={handleRetakeQuiz} className=" mt-6 px-4 py-3 bg-purple-600 text-white font-bold rounded-lg 
      hover:bg-purple-700 disabled:bg-gray-400" >Re-Take Quiz</button>
         </div>
      </div>
    )
  }
  return (
   
    <div className="bg-gray-300  min-h-screen p-32 " >
      <h1 className="text-center text-3xl font-bold " >Quiz App</h1>
      <div className="flex justify-center " >
      <div className="md:min-w-6/12 ">
        <QuestLists  Questions={QList.questions[currentQuestion]} setUserAnswer={handleUserAnswer} userAnswer={userAnswer[currentQuestion]} />
      </div>
      </div>
      <div className="flex justify-center gap-5">
      <button onClick={PreviousQuestionBtn} className="mt-6 px-4 py-3 bg-gray-600 text-white font-bold rounded-lg 
         hover:bg-gray-700 disabled:bg-gray-400" disabled={currentQuestion===0} > ← previous </button> 
      { (currentQuestion === QList.questions.length - 1) ? (
        <div className="flex justify-center gap-5">
      <button onClick={handleShowResult} className="mt-6 px-4 py-3 bg-green-600 text-white font-bold rounded-lg 
         hover:bg-green-700 disabled:bg-gray-400" > Show result  → </button> 
         </div>
      ):(
      <button onClick={NextQuestionBtn} className="mt-6 px-4 py-3 bg-purple-600 text-white font-bold rounded-lg 
      hover:bg-purple-700 disabled:bg-gray-400" > Next → </button> 
      ) } 
      </div>   
    </div>

  )
}

export default QuizApp;

