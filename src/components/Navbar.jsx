function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-extrabold tracking-wider text-[#C8A96A]">
          The Invite Aura
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700">
          <a href="#">Home</a>
          <a href="#">Invitations</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <a
          href="https://wa.me/918459506110"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C8A96A] text-white px-6 py-3 rounded-full hover:bg-[#B89458] transition-all duration-300"
        >
          Book Now
        </a>

      </div>
    </nav>
  );
}

export default Navbar;