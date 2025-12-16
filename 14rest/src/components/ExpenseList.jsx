import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseList() {
 const { remainingAmount, filteredExpenses } =  useContext(ExpenseContext);
  return (
    <div className="bg-gray-300 p-5 rounded-xl shadow-md min-w-6/12 ">
      {filteredExpenses.length === 0 &&  <p className=" text-center ">Not expenses found</p>}
      {filteredExpenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          exp={exp}
        />
      ))}
      <p className="text-lg font-semibold">Remaining Balance: {remainingAmount}</p>
    </div>
  );
}

export default ExpenseList;
