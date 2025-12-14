import formatDisplayDate from "../utils/formatDisplayDate";
function ExpenseItem({exp,editId,editExpense,deleteExpense}) {
  return (
      <div key={exp.id} className="flex justify-between p-3 bg-gray-50 rounded-lg mb-3">
        <div>
          <p className="font-medium">{exp.title} </p>
          <p className="text-sm text-gray-500">category: {exp.category!=="" ? exp.category : "NA"}  <span className="text-sm text-gray-500" >( {formatDisplayDate(exp.date)} )</span> </p>
          
        </div>
        <div className="flex items-center gap-3">  
          <p className="text-xl font-bold text-gray-700">₹ {exp.amountSpend} </p>
            <button disabled={editId===exp.id} onClick={()=>editExpense(exp)} className={`px-3 py-1 ${editId===exp.id ? "bg-gray-400":"bg-yellow-400" }   text-white rounded-lg`}>
            Edit
          </button>
          <button onClick={()=>deleteExpense(exp.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg">
            Delete
          </button>
        </div>
      </div>
  )
}

export default ExpenseItem;
