import ExpenseItem from "./ExpenseItem";

function ExpenseList({
  expenses,
  remainingAmount,
  deleteExpense,
  editId,
  editExpense,
  undoDelete
}) {
  return (
    <div className="bg-gray-300 p-5 rounded-xl shadow-md min-w-6/12 ">
      {expenses.length === 0 &&  <p className=" text-center ">Not expenses found</p>}
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          exp={exp}
          editId={editId}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
          undoDelete={undoDelete}
        />
      ))}
      <p className="text-lg font-semibold">Remaining Balance: {remainingAmount}</p>
    </div>
  );
}

export default ExpenseList;
