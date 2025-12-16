import {useState} from "react";
function useFilter({expenses}) {
      const [filter, setFilter] = useState("All");
 let filteredExpenses = expenses.filter((item) => {
    const itemDate = new Date(item.date);
    const now = new Date();

    if (["Food","Transport","Shopping"].includes(filter))
      return item.category === filter;

    // THIS MONTH
    if (filter === "ThisMonth") {
      return (
        itemDate.getMonth() === now.getMonth() &&
        itemDate.getFullYear() === now.getFullYear()
      );
    }

    // LAST MONTH
    if (filter === "LastMonth") {
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
      return (
        itemDate.getMonth() === lastMonth.getMonth() &&
        itemDate.getFullYear() === lastMonth.getFullYear()
      );
    }
    return true;
  });
  return {filteredExpenses,filter,setFilter}
}

export default useFilter;
