
// function Questionlist({question,setUserAnswer,userAnswer}) {
//   console.log("Question list",question);
//   console.log("Question option",question.options);
//     const handleSelect = (option) => {
//     console.log(option);
//     // setUserAnswer(option);   // store selected option for this question
//   };


//   return (
//     <>
//       <div key={question.id}>
//       <h2 className="text-xl font-semibold text-gray-800 mb-4"> {question.question} </h2>
//            {/* <ul className="grid md:grid-cols-2  gap-4 w-full">
//         {question.options.map((opt, index) => (
//           <li key={index} className="list-none w-full">
//             <button
//               onClick={() => handleSelect(index)}
//               className="
//                 w-full px-4 py-3 
//                 bg-blue-500 text-white font-medium 
//                 rounded-lg hover:bg-blue-600 
//                 transition-all duration-200
//               "
//             >
//               {opt}
//             </button>
//           </li>
//         ))}
//       </ul> */}

//       <ul className="grid grid-cols-2 gap-4 w-full">
//         {question.options.map((opt, index) => (
//           <li key={index} className="list-none w-full">

//             <button
//               onClick={() => handleSelect(index)}
//               className={`
//                 w-full px-4 py-3 font-medium rounded-lg transition-all duration-200 
//                 ${userAnswer === index 
//                     ? "bg-green-500 text-white"     // selected option
//                     : "bg-blue-500 text-white hover:bg-blue-600" // default
//                 }
//               `}
//             >
//               {opt}
//             </button>

//           </li>
//         ))}
//       </ul>

//       </div>
//     </>
//   )
// }

// export default Questionlist;




function Questionlist({ question, setUserAnswer, userAnswer }) {
  const handleSelect = (optionIndex) => {
    console.log("question handle select q",question);
    
    console.log("option index  : ",optionIndex);  
    console.log("userAns : ",userAnswer);  
    setUserAnswer(optionIndex); // store selected option for this question
  };

  return (
    <div key={question.id}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
       Q{question.id}: {question.question}
      </h2>

      {/* 2x2 Grid Options */}
      <ul className="grid md:grid-cols-2 gap-4 w-full">
        {question.options.map((opt, index) => (
          <li key={index} className="list-none w-full">
            <button
              onClick={() => handleSelect(index)}
              className={`
                w-full px-4 py-3 font-medium rounded-lg transition-all duration-200 text-white
                ${ userAnswer === index  ? "bg-green-500 " : "bg-blue-400" }
              `}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <p>{(question.answer) + 1}</p>
    </div>
  );
}

export default Questionlist;
