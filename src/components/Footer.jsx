import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Container from "./ui/Container";
import Button from "./ui/Button";

import Logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#C8A96A]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8A96A]/5 blur-[150px]" />

      </div>

      <Container className="relative py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]"
        >

          {/* Brand */}
          <div>

            <img
              src={Logo}
              alt="The Invite Aura"
              className="h-24 w-24 rounded-full shadow-2xl"
            />

            <h2 className="mt-6 text-3xl font-bold tracking-wide">
              The Invite Aura
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Luxury AI-powered wedding invitations crafted with cinematic
              storytelling to make your wedding unforgettable.
            </p>
                        <div className="mt-8">
              <Button size="lg">
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">

              <li>
                <a href="#home" className="text-gray-400 transition hover:text-[#C8A96A]">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="text-gray-400 transition hover:text-[#C8A96A]">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="text-gray-400 transition hover:text-[#C8A96A]">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#pricing" className="text-gray-400 transition hover:text-[#C8A96A]">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 transition hover:text-[#C8A96A]">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-8 space-y-6">
                            <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                  <MessageCircle size={18} />
                </div>

                <a
                  href="https://wa.me/918459506110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-[#C8A96A]"
                >
                  +91 84595 06110
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                  <Mail size={18} />
                </div>

                <a
                  href="mailto:theinviteaura@gmail.com"
                  className="text-gray-400 transition hover:text-[#C8A96A]"
                >
                  theinviteaura@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                  <MapPin size={18} />
                </div>

                <span className="text-gray-400">
                  Nagpur, Maharashtra
                </span>
              </div>

            </div>

          </div>

        </motion.div>

        <div className="my-12 h-px w-full bg-white/10" />
                <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} The Invite Aura. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Crafted with ❤️ using AI & Creativity
          </p>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;