import { useState } from "react";
import { useUsers } from "../hooks/getallUsers.js";
import ProfileCard from "./ProfileCard";

function GetUsers() {
  const [page, setPage] = useState(1);
  const { users, meta, loading, error } = useUsers(page);

  if (page < 0) return;

  if (loading) return <p>Loding...</p>;
  if (error) return <p>Error in fatching user {error}</p>;
  console.log("User Call", users);
  console.log("meta Data", meta);
  console.log("meta Data", meta.totalPages);
  console.log("meta Data", meta.previousPage);
  // console.log("set Page",setPage);
  // console.log("Page",page);

  return (
    <div className="bg-gray-400 p-3">
      {/* {
        users.map((user)=>(
            <ProfileCard key={user.login.uuid} user={user} />
        ))
      } */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Users</h1>

        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-8
      "
        >
          {users.map((user) => (
            <ProfileCard key={user.login.uuid} user={user} />
          ))}
        </div>
      </div>

      {/* pagenation */}
      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 my-10">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          disabled={!meta.previousPage}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <p className="text-lg font-semibold">
          page {meta.page} / {meta.totalPages}
        </p>

        {/* Next Button */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          disabled={!meta.nextPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GetUsers;
