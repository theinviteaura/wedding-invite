import { motion } from "framer-motion";
import {
  ImageIcon,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

const portfolioItems = [
  {
    title: "Royal Wedding Invitation",
    category: "AI Invitation",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Invitation Reel",
    category: "Cinematic Reel",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Save The Date",
    category: "Premium Design",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Traditional Invitation",
    category: "Wedding Card",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  },
];

function Portfolio() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#FCFAF7]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-32 w-[420px] h-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Our Portfolio"
          title="Luxury Wedding Stories"
          subtitle="A glimpse of our premium AI wedding invitations and cinematic reels."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
                      {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <GlassCard
                className="
                  group
                  overflow-hidden
                  p-0
                  h-full
                "
              >
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-[340px]
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      w-14
                      h-14
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <PlayCircle
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <div className="absolute bottom-6 left-6">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        text-white
                        text-sm
                      "
                    >
                      <ImageIcon size={16} />
                      {item.category}
                    </span>

                    <h3
                      className="
                        mt-4
                        text-3xl
                        font-bold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                </div>

                <div className="p-8">

                  <p className="text-gray-600 leading-8">
                    Crafted with cinematic storytelling,
                    premium typography and luxury AI
                    design for unforgettable wedding
                    invitations.
                  </p>

                  <button
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      text-[#C8A96A]
                      font-semibold
                      transition-all
                      hover:gap-3
                    "
                  >
                    View Project

                    <ArrowRight size={18} />

                  </button>

                </div>

              </GlassCard>

            </motion.div>
          ))}
                  </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <GlassCard className="p-12 text-center relative overflow-hidden">

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#C8A96A]/5
                via-transparent
                to-[#C8A96A]/5
              "
            />

            <div className="relative">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#C8A96A]/10
                  px-5
                  py-2
                  text-[#C8A96A]
                  font-semibold
                "
              >
                ✨ Premium Collection
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                Every Wedding Has A Beautiful Story
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
                Explore our premium collection of AI wedding invitations,
                cinematic invitation reels and luxury digital experiences
                crafted exclusively for your special day.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <Button>
                  View Full Portfolio
                </Button>

                <Button variant="outline">
                  Start Your Invitation
                </Button>

              </div>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default Portfolio;