import { memo } from "react";

const ProductsCard = memo(
  function ProductsCard({ title,description,category,thumbnail}) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 overflow-hidden">
      <img src={thumbnail} loading="lazy" alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-3">
          {category}
        </span>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description?.slice(0, 140)}{description && description.length > 140 ? "..." : ""}
        </p>
      </div>
    </article>
  );
}
);

export default ProductsCard;
