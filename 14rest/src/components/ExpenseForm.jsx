import { useContext, useState} from "react";
import ExpenseContext from "../context/ExpenseContext";
function ExpenseForm() {
  const { editId, editingExpense, addExpense, saveEditedExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState(editingExpense?.title ?? "");
  const [amount, setAmount] = useState(editingExpense?.amountSpend ?? "");
  const [category, setCategory] = useState(editingExpense?.category ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { title, amount, category };
    (editId!==null) ? saveEditedExpense(payload) : addExpense(payload);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-300 p-5 rounded-xl shadow-md ">
        <h2 className="text-xl font-semibold mb-4">
          {editId!==null ? "Edit Expense" : "Add Expense"}
        </h2>

        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            className="p-3 border rounded-lg"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Expense title"
          />
          <input
            className="p-3 border rounded-lg"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <select
            className="border-2 rounded-xl p-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
          </select>

          <button
            className={`${
              editId!==null ? "bg-green-400" : "bg-blue-400"
            } text-white p-3 rounded-lg`}
          >
            { editId!==null ? "Save Edit" : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
