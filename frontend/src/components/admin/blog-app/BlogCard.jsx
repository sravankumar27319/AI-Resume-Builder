const BlogCard = ({ category, image, date, readTime, title, description }) => {
  return (
   <div
  className="
    overflow-hidden rounded-2xl bg-white shadow-sm
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.01]
    hover:shadow-md
  " 
>
      
      {/* Image */}
      <div className="relative h-56 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Read More */}
        <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
          Read More
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;