import React, { useState, useEffect } from "react";

function useExpenses({ INITIAL_BUDGET }) {
  const [editId, setEditId] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);
  const [deletedExpense, setDeletedExpense] = useState(null);
  const [undoVisible, setUndoVisible] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem("expenses");
      if (!saved || saved === "undefined") {
        return [];
      }
      return JSON.parse(saved);
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalSpent = expenses.reduce((acc, exp) => acc + exp.amountSpend, 0);
  const remainingAmount = INITIAL_BUDGET - totalSpent;

  const addExpense = ({ title, amount,category }) => {
    const numericAmount = Number(amount);
    if (numericAmount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }
    if (numericAmount > remainingAmount) {
      alert("Not sufficient balance");
      return;
    }
    // Add exp
    const NewExpense = {
      id: Date.now(),
      title,
      amountSpend: numericAmount,
      category: category,
      date: new Date().toISOString(),
    };
    setExpenses((prev) => [...prev, NewExpense]);
  };

  const editExpense = (expenses) => {
    setEditingExpense(expenses);
    setEditId(expenses.id);
  };

  const saveEditedExpense = ({ title, amount, category }) => {
    const numericAmount = Number(amount);
    setExpenses((prev) =>
      prev.map((exp) =>
        exp.id === editId
          ? { ...exp, title: title, amountSpend: numericAmount, category:category }
          : exp
      )
    );
    setEditId(null);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => {
      const expenseToDelete = prev.find((exp) => exp.id === id);
      setDeletedExpense(expenseToDelete);
      setUndoVisible(true);

      // Auto-hide undo after 5 seconds
      setTimeout(() => {
        setUndoVisible(false);
        setDeletedExpense(null);
      }, 5000);

      return prev.filter((exp) => exp.id !== id);
    });
  };

  const undoDelete = () => {
    if (deletedExpense) {
      setExpenses((prev) => [...prev, deletedExpense]);
      setDeletedExpense(null);
      setUndoVisible(false);
    }
  };

  return {
    expenses,
    remainingAmount,
    editId,
    isEditing: editId !== null,
    editingExpense,
    undoVisible,
    addExpense,
    saveEditedExpense,
    editExpense,
    deletedExpense,
    deleteExpense,
    undoDelete,
  };
}

export default useExpenses;
