import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

import Container from "./ui/Container";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">The Invite Aura</h2>

            <p className="mt-4 text-gray-400 leading-7">
              Luxury AI-powered wedding invitations crafted to make your
              special day unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#C8A96A]">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#C8A96A]">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-[#C8A96A]">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-[#C8A96A]">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#C8A96A]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-4 space-y-4">

              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle size={18} />
                <a
                  href="https://wa.me/918459506110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A96A]"
                >
                  +91 84595 06110
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a
                  href="mailto:theinviteaura@gmail.com"
                  className="hover:text-[#C8A96A]"
                >
                  theinviteaura@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Nagpur, Maharashtra</span>
              </div>

            </div>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} The Invite Aura. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;