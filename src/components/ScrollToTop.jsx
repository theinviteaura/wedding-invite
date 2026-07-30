import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {visible && (
                <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-28
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#171717]
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#C8A96A]
          "
        >
          <ChevronUp size={24} />
        </motion.button>
      )}

    </AnimatePresence>
  );
}

export default ScrollToTop;