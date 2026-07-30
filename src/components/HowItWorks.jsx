import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  RefreshCcw,
  Send,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Share Your Details",
    description:
      "Send us your wedding details, names, wedding date, photos and preferred invitation style.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Design Creation",
    description:
      "Our creative team designs a premium AI-powered invitation with cinematic visuals.",
  },
  {
    step: "03",
    icon: RefreshCcw,
    title: "Review & Revisions",
    description:
      "Preview your invitation and request revisions until everything looks perfect.",
  },
  {
    step: "04",
    icon: Send,
    title: "Delivered Within 24 Hours",
    description:
      "Receive your final high-quality invitation ready for WhatsApp and social media.",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-40 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="How It Works"
          title="From Your Idea To A Luxury Invitation"
          subtitle="Creating your premium wedding invitation is simple, fast and completely hassle-free."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="relative mt-24">
                      {/* Timeline */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#C8A96A]/40 via-[#C8A96A]/20 to-transparent lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className={`flex flex-col items-center gap-10 ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >

                  <div className="flex-1">

                    <GlassCard className="group relative overflow-hidden p-8">

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
                          "
                        >
                          <Icon
                            size={30}
                            className="text-[#C8A96A]"
                          />
                        </div>

                        <span className="mt-6 inline-block text-sm font-semibold tracking-[0.25em] text-[#C8A96A]">
                          STEP {step.step}
                        </span>

                        <h3 className="mt-3 text-3xl font-bold text-[#171717]">
                          {step.title}
                        </h3>

                        <p className="mt-5 leading-8 text-gray-600">
                          {step.description}
                        </p>

                      </div>

                    </GlassCard>

                  </div>

                  <div className="relative z-10 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#C8A96A] text-xl font-bold text-white shadow-xl lg:flex">
                    {step.step}
                  </div>

                  <div className="hidden flex-1 lg:block" />

                </motion.div>
              );
            })}
                    </div>

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
              ✨ Fast • Premium • Hassle Free
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#171717]">
              Your Dream Invitation Is Just 4 Steps Away
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              From your first message to the final delivery, we make the
              complete process simple, creative and premium so you can enjoy
              your wedding journey without any stress.
            </p>

          </div>

        </GlassCard>

      </motion.div>
            </Container>

    </section>
  );
}

export default HowItWorks;