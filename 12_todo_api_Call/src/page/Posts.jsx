import React, { useState } from "react";
import { usePosts } from "../hooks/getposts";
import Post from "../components/Post";

function Posts() {
  const { posts, loading, error } = usePosts();

  const [currentPage, setCurrentPage] = useState(1);
  let limit = 8;
  let skip = currentPage * limit;
  let start = skip - limit;

  const PaginatedPost = posts.slice(start, skip);

  const totalPages = Math.ceil(posts.length / limit);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  if (loading) return <p className="text-center text-xl py-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-xl py-10 text-red-600">Error: {error}</p>
    );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-12">
      <h1 className="text-4xl font-extrabold mb-8 inline-block px-4 py-2 rounded-xl shadow-sm">
        Users Posts
      </h1>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PaginatedPost.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-3 flex-wrap" >
        {Array.from({ length: totalPages }).map((_, index) => {
          let pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 rounded-lg text-lg font-semibold border transition 
                ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 hover:bg-gray-300"
                }
              `}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
