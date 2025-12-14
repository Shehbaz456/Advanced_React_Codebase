import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Post({ post }) {
  if (!post) return null;

  return (
    <div
      className="
        bg-gray-300 backdrop-blur-lg
        rounded-3xl shadow-xl border border-gray-100
        p-6 lg:p-8 transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:-translate-y-2 hover:scale-105
        flex flex-col justify-between relative overflow-hidden animate-fadeIn
      "
    >
      {/* Optional: Avatar/Chip */}
      <div className="mb-2 flex items-center gap-2">
        <span className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-800">
          {post.user?.name?.[0] ?? "U"}
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-bold">
          {post.category || "General"}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-blue-800 tracking-tight line-clamp-2">
        {post.title}
      </h2>

      <p className="text-gray-600 text-base mb-4 line-clamp-3">
        {post.body}
      </p>

      <button
        className="
          mt-2 py-2 px-5 inline-flex items-center gap-2
          bg-linear-to-r from-blue-500 to-indigo-500
          text-white font-semibold rounded-xl shadow
          hover:from-blue-600 hover:to-indigo-600
          transition-all focus:ring-2 focus:ring-indigo-400
        "
      >
        Read More <FaRegArrowAltCircleRight size={18} />
      </button>
    </div>
  );
}

export default Post;
