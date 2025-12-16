import { useContext } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import ExpenseContext from "./context/ExpenseContext";

function App() {
  const { expenses,
    undoVisible,
    editingExpense,
    deletedExpense, 
    undoDelete} = useContext(ExpenseContext);

  console.log("exp", expenses);
  return (
    <> 
      <div>
        <h1 className="text-3xl font-bold text-black mt-5 text-center ">
          Expense Tracker
        </h1>
      </div>
      <h3 className="text-xl m-4 text-center font-bold ">
        Total Budget money:{" "}
        <span className="text-green-600">12000</span>
      </h3>
      <div className="flex justify-center m-5"></div>

      <ExpenseForm key={editingExpense?.id || "new"} />

      {undoVisible && deletedExpense && (
        <div className="flex justify-center my-3">
          <div className="bg-gray-500 text-black px-4 py-2 rounded-lg flex gap-4 items-center">
            <span>Expense deleted</span>
            <button
              onClick={undoDelete}
              className="text-yellow-400 underline font-semibold"
            >
              Undo
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center m-4">
        <h2 className="text-xl  font-semibold min-w-5/12 ">Expenses</h2>

        <Filter />
        
      </div>
      <div className="flex justify-center  ">
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
