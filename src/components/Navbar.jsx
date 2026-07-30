import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "./ui/Container";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-bold text-[#171717]"
          >
            The Invite Aura
          </a>

          {/* PART 2 STARTS BELOW */}

          <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#171717] transition-colors duration-300 hover:text-[#C8A96A]"
              >
                {link.label}
              </a>
            ))}

            <Button size="sm">
              Get Started
            </Button>

          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[#171717] transition-colors duration-300 hover:bg-black/5 lg:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-2 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-xl lg:hidden"
            >              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-[#171717] transition-colors duration-300 hover:text-[#C8A96A]"
                  >
                    {link.label}
                  </a>
                ))}

                <Button
                  className="mt-2 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </Container>
          </header>
  );
}

export default Navbar;