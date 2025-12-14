
function Filter({filter,setFilter}) {
  return (
    <div className="flex justify-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg min-w-5/12"
          >
            <option value="All">All</option>
            <option value="ThisMonth">This Month</option>
            <option value="LastMonth">Last Month</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
  )
}

export default Filter
