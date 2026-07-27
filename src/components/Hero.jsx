import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-screen bg-[#FDF8F2] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center px-8">

        <div>
          <p className="uppercase tracking-[5px] text-[#C8A96A] mb-4">
            The Invite Aura
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold text-[#1B1B1B] leading-tight">
            AI Powered <br />
            Wedding Invitations
          </h1>

          <p className="mt-6 text-gray-600 text-xl leading-8 max-w-xl">
            Luxury Digital Invitations crafted with cinematic storytelling.
          </p>

          <button className="mt-8 bg-[#C8A96A] hover:bg-[#B08D57] transition-all duration-300 text-white px-8 py-4 rounded-full shadow-xl hover:scale-105">
            View Collection
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={hero}
            alt="Wedding"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;