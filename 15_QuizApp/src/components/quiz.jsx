

// import { useState } from 'react';
// import Questionlist from './components/Questionlist';
// import QList from "./constant/questionQuiz.json";

// function App() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [showResult, setShowResult] = useState(false);

//   const handleAnswer = (ansIndex) => {
//     const updated = [...userAnswers];
//     updated[currentQuestion] = ansIndex;
//     setUserAnswers(updated);
//     console.log("handle answer updated and current Q answerIndex userAns: ",updated,currentQuestion,ansIndex,userAnswers);
//     // console.log("handle answer updated : ",updated);
    
//   };

//   const nextQuestion = () => {
//     if (currentQuestion === QList.questions.length - 1) {
//       setShowResult(true);
//       return;
//     }
//     setCurrentQuestion(currentQuestion + 1);
//   };
//   const PreviousQuestion = () => {
//     setCurrentQuestion(currentQuestion - 1);
//   };

//   const restart = () => {
//     setCurrentQuestion(0);
//     setShowResult(false);
//     setUserAnswers([]);
//   };

//   // -------------------  RESULT PAGE --------------------
//   if (showResult) {
//     let score = 0;
//     QList.questions.forEach((q, i) => {
//       if (q.answer === userAnswers[i]) score++;
//     });

//     return (
//       <div className="p-6 max-w-xl mx-auto text-center">
//         <h1 className="text-3xl font-bold mb-6">Quiz Result</h1>

//         <p className="text-xl font-semibold mb-3">
//           Score: {score} / {QList.questions.length}
//         </p>

//         <button 
//           onClick={restart}
//           className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//         >
//           Restart Quiz
//         </button>
//       </div>
//     );
//   }

//   // -------------------  QUESTION PAGE --------------------
//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Quiz App</h1>

//       <Questionlist 
//         question={QList.questions[currentQuestion]} 
//         setUserAnswer={handleAnswer}
//         userAnswer={userAnswers[currentQuestion]}
//       />
//       <div className='flex gap-5 justify-center ' >
//       <button
//         onClick={PreviousQuestion}
//         className="mt-6  px-4 py-3 bg-gray-500 text-white font-bold rounded-lg 
//         hover:bg-gray-700 disabled:bg-gray-400"
//         disabled={currentQuestion === 0 }
//       > ← previous </button>
//       <button
//         onClick={nextQuestion}
//         className="mt-6 px-4 py-3 bg-purple-600 text-white font-bold rounded-lg 
//         hover:bg-purple-700 disabled:bg-gray-400"
//         disabled={userAnswers[currentQuestion] === undefined}
//       >
//         {currentQuestion === QList.questions.length - 1 ? "Show Result" : "Next → "}
//       </button>
//       </div>
//     </div>
//   );
// }

// export default App;
