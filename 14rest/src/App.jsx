import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import useFilter from "./hooks/useFilter";
import Filter from "./components/Filter";
import useExpenses from "./hooks/useExpenses";

function App() {
  const INITIAL_BUDGET = 12000;

  const {
    expenses,
    editId,
    isEditing,
    undoVisible,
    editingExpense,
    deletedExpense,
    remainingAmount,
    addExpense,
    saveEditedExpense,
    editExpense,
    deleteExpense,
    undoDelete,
  } = useExpenses({INITIAL_BUDGET});

  const { filteredExpenses, filter, setFilter } = useFilter({ expenses });

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
        <span className="text-green-600">{INITIAL_BUDGET}</span>
      </h3>
      <div className="flex justify-center m-5"></div>
      <ExpenseForm
        key={editingExpense?.id || "new"}
        isEditing={isEditing}
        addExpense={addExpense}
        saveEditedExpense={saveEditedExpense}
        editingExpense={editingExpense}
      />

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

        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="flex justify-center  ">
        <ExpenseList
          remainingAmount={remainingAmount}
          expenses={filteredExpenses}
          editId={editId}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      </div>
    </>
  );
}

export default App;
