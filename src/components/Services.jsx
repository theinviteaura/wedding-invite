import { motion } from "framer-motion";
import {
  Sparkles,
  Video,
  Smartphone,
  Wand2,
  CalendarHeart,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

const services = [
  {
    icon: Wand2,
    title: "AI Wedding Invitations",
    description:
      "Luxury AI invitations crafted exclusively for your wedding with premium storytelling and elegant presentation.",
  },
  {
    icon: Video,
    title: "Cinematic Invitation Reels",
    description:
      "Beautiful cinematic wedding invitation reels for Instagram, WhatsApp and every social platform.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Ready Invite",
    description:
      "Optimized digital invitations that look premium on every smartphone and are instantly shareable.",
  },
  {
    icon: CalendarHeart,
    title: "Save The Date",
    description:
      "Elegant save-the-date invitations with timeless luxury aesthetics.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Custom Design",
    description:
      "Every invitation is uniquely designed according to your wedding story.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description:
      "Premium typography, cinematic visuals and unforgettable presentation.",
  },
];

function Services() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-40 w-[450px] h-[450px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 w-[450px] h-[450px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Our Services"
          title="Luxury Wedding Invitation Solutions"
          subtitle="Everything you need to create a premium digital wedding invitation."
        />
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
                  {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <GlassCard
                  className="
                    h-full
                    p-8
                    relative
                    overflow-hidden
                    group
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#C8A96A]/0
                      via-[#C8A96A]/5
                      to-[#C8A96A]/10
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  />

                  <div
                    className="
                      relative
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#C8A96A]/10
                      flex
                      items-center
                      justify-center
                      group-hover:scale-110
                      group-hover:rotate-6
                      transition-all
                      duration-500
                    "
                  >
                    <Icon
                      size={30}
                      className="text-[#C8A96A]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[#C8A96A] font-semibold">
                    Explore Service

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </GlassCard>

              </motion.div>
            );
          })}
                  </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <GlassCard className="p-12 text-center">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8A96A]/10 text-[#C8A96A] font-semibold">
              <Sparkles size={18} />
              Premium Experience
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#171717]">
              Let's Create Your Dream Wedding Invitation
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              From elegant invitation cards to cinematic wedding reels,
              we craft every design with creativity, emotion and luxury.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button>
                Book Your Invitation
              </Button>

              <Button variant="outline">
                View Portfolio
              </Button>

            </div>

          </GlassCard>
        </motion.div>
              </Container>

    </section>
  );
}

export default Services;