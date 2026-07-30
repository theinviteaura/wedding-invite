import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918459506110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
      "
    >      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_15px_35px_rgba(37,211,102,0.35)]
        "
      >
        <MessageCircle size={30} />
      </div>

      <span
        className="
          hidden
          rounded-full
          bg-[#171717]
          px-4
          py-2
          text-sm
          font-medium
          text-white
          shadow-lg
          lg:block
        "
      >
        Chat on WhatsApp
      </span>

    </motion.a>
  );
}

export default FloatingWhatsApp;
