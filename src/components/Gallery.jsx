function Gallery() {
  return (
    <section className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Our Wedding Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="h-72 rounded-3xl bg-white shadow-lg flex items-center justify-center">
            Wedding Invite 1
          </div>

          <div className="h-72 rounded-3xl bg-white shadow-lg flex items-center justify-center">
            Wedding Invite 2
          </div>

          <div className="h-72 rounded-3xl bg-white shadow-lg flex items-center justify-center">
            Wedding Invite 3
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;