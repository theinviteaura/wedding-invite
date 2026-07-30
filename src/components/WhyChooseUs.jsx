import { motion } from "framer-motion";
import {
  Sparkles,
  Clock3,
  Smartphone,
  ShieldCheck,
  Wand2,
  HeartHandshake,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const features = [
  {
    icon: Sparkles,
    title: "AI Powered Creativity",
    description:
      "Luxury AI-generated wedding invitations with cinematic storytelling.",
  },
  {
    icon: Clock3,
    title: "24 Hours Delivery",
    description:
      "Fast delivery without compromising premium quality and elegance.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Ready",
    description:
      "Perfectly optimized for mobile sharing and social platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every invitation is carefully designed with attention to every detail.",
  },
  {
    icon: Wand2,
    title: "Fully Custom Design",
    description:
      "Designed according to your wedding theme and personal style.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "We're with you until you're completely satisfied with your invitation.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Why Choose Us"
          title="Why Couples Love The Invite Aura"
          subtitle="Premium quality, fast delivery and cinematic creativity that make every wedding invitation unforgettable."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature, index) => {
            const Icon = feature.icon;

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
                    relative
                    h-full
                    overflow-hidden
                    p-8
                    group
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#C8A96A]/0
                      to-[#C8A96A]/10
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#C8A96A]/10
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      <Icon
                        size={30}
                        className="text-[#C8A96A]"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                      {feature.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {feature.description}
                    </p>

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
          <GlassCard className="relative overflow-hidden p-12 text-center">

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
                  rounded-full
                  bg-[#C8A96A]/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-[#C8A96A]
                "
              >
                💍 Crafted With Passion
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                Every Invitation Is Designed To Impress
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
                We don't just create invitations—we design memorable digital
                experiences that reflect your love story with premium visuals,
                cinematic presentation and elegant craftsmanship.
              </p>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default WhyChooseUs;