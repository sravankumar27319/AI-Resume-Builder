const FeaturedBlog = () => {
  return (
    <section className="bg-gray-50 py-5">
      <div className="mx-auto max-w-9xl px-6">
        
       <div className=" grid items-center gap-10 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-blue-600 px-8 py-14 md:grid-cols-2 md:px-8 md:py-10 min-h-[200px] md:min-h-[500px]">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              ⭐ Featured Article
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              The Future of Resume Writing is Here
            </h1>

            <p className="mt-4 max-w-xl text-sm text-white/90 md:text-base">
              Discover how AI is transforming the job application process and
              helping candidates stand out in competitive markets.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Read Full Article
              <span>→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Featured"
              className="w-full rounded-2xl object-cover shadow-lg"
            />

            {/* Badge */}
            <span className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow">
              MUST READ
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;