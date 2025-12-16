import ExpenseContext from "./ExpenseContext";
import useExpenses from "../hooks/useExpenses";
import useFilter from "../hooks/useFilter";
import { useMemo } from "react";

function ExpenseContextProvider({ children }) {
  const INITIAL_BUDGET = 12000;
  const {
    expenses,
    remainingAmount,
    editId,
    editingExpense,
    undoVisible,
    deletedExpense,
    addExpense,
    saveEditedExpense,
    editExpense,
    deleteExpense,
    undoDelete,
  } = useExpenses({ INITIAL_BUDGET });
  const { filteredExpenses, filter, setFilter } = useFilter({ expenses });

  const value = useMemo(
    () => ({
      expenses,
      remainingAmount,
      editId,
      editingExpense,
      undoVisible,
      deletedExpense,
      filteredExpenses,
      filter,

      addExpense,
      saveEditedExpense,
      editExpense,
      deleteExpense,
      undoDelete,
      setFilter,
    }),
    [
      expenses,
      remainingAmount,
      editId,
      editingExpense,
      undoVisible,
      deletedExpense,
      filteredExpenses,
      filter,
      addExpense,
      deleteExpense,
      editExpense,
      saveEditedExpense,
      setFilter,
      undoDelete,
    ]
  );

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
export default ExpenseContextProvider;
