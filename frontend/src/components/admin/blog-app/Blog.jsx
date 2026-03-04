import BlogCard from "./BlogCard";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;