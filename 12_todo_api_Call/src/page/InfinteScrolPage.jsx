import { useEffect, useRef, useState } from "react";
import { useUsers } from "../hooks/getallUsers.js";
import ProfileCard from "./ProfileCard";

function InfiniteScrollPage() {
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);

  const { users, meta, loading, error } = useUsers(page);
  const loaderRef = useRef(null);

  // Append users safely (prevents duplicate merges + removes warnings)
  useEffect(() => {
    if (!users || users.length === 0) return;

    setAllUsers((prev) => {
      // Prevent adding identical page results (React warning fix)
      if (prev.length > 0) {
        const lastPrevId = prev[prev.length - 1].login.uuid;
        const lastNewId = users[users.length - 1].login.uuid;

        if (lastPrevId === lastNewId) return prev;
      }

      return [...prev, ...users];
    });
  }, [users]);

  // Infinite scroll observer
  useEffect(() => {
    if (!meta?.nextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [meta?.nextPage, loading]);

  if (error) return <p>Error in fetching user {error}</p>;

  return (
    <div className="bg-gray-400">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Users</h1>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-4
        "
      >
        {allUsers.map((user) => (
          <ProfileCard key={user.login.uuid} user={user} />
        ))}
      </div>

      {/* Loader for Intersection Observer */}
      <div
        ref={loaderRef}
        className="w-full text-center py-6 text-gray-500"
      >
        {loading
          ? "Loading more users..."
          : meta?.nextPage
          ? "Scroll to load more"
          : "No more users"}
      </div>
    </div>
    </div>
  );
}

export default InfiniteScrollPage;
