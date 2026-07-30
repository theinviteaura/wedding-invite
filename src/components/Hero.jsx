import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  Heart,
  CheckCircle2,
} from "lucide-react";

import heroImage from "../assets/hero.png";

import { hero, contact } from "../data/siteData";

import Button from "./ui/Button";
import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDF8F2] min-h-screen flex items-center">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] rounded-full bg-[#C8A96A]/10 blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#E9D6A4]/20 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      </div>

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8
            }}
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: .2
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-lg border border-[#C8A96A]/20"
            >

              <Sparkles
                size={18}
                className="text-[#C8A96A]"
              />

              <span className="tracking-[0.2em] uppercase text-sm font-semibold text-[#C8A96A]">

                {hero.badge}

              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.3,
                duration:.8
              }}

              className="mt-10 text-[58px] lg:text-[78px] leading-[1.02] font-bold text-[#171717]"

            >

              {hero.title}

            </motion.h1>

            {/* Description */}

            <motion.p

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.45
              }}

              className="mt-8 text-lg leading-9 text-gray-600 max-w-xl"

            >

              {hero.description}

            </motion.p>

            {/* Trust */}

            <motion.div

              initial={{
                opacity:0
              }}

              animate={{
                opacity:1
              }}

              transition={{
                delay:.6
              }}

              className="flex flex-wrap gap-5 mt-8"

            >

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={20}
                  className="text-[#C8A96A]"
                />

                <span className="text-gray-700">

                  Premium Designs

                </span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={20}
                  className="text-[#C8A96A]"
                />

                <span className="text-gray-700">

                  Delivered in 24 Hours

                </span>

              </div>

            </motion.div>            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Button
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                variant="primary"
                icon={<ArrowRight size={18} />}
              >
                {hero.primaryButton}
              </Button>

              <Button
                variant="secondary"
                icon={<Play size={18} />}
              >
                {hero.secondaryButton}
              </Button>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="grid grid-cols-3 gap-6 mt-16"
            >
              <GlassCard className="p-6 text-center">

                <h3 className="text-4xl font-bold text-[#171717]">
                  100+
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Luxury Invitations
                </p>

              </GlassCard>

              <GlassCard className="p-6 text-center">

                <h3 className="text-4xl font-bold text-[#171717]">
                  24H
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Fast Delivery
                </p>

              </GlassCard>

              <GlassCard className="p-6 text-center">

                <h3 className="text-4xl font-bold text-[#171717]">
                  5★
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Client Experience
                </p>

              </GlassCard>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >

            {/* Floating Card */}

            <GlassCard className="absolute top-10 -left-10 p-5 w-56 z-20">

              <div className="flex items-center gap-3">

                <Heart
                  size={22}
                  className="text-[#C8A96A]"
                />

                <div>

                  <h4 className="font-semibold text-[#171717]">

                    Wedding Stories

                  </h4>

                  <p className="text-sm text-gray-500">

                    Crafted with AI

                  </p>

                </div>

              </div>

            </GlassCard>

            {/* Main Image */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="The Invite Aura"
                className="rounded-[36px] shadow-[0_40px_80px_rgba(0,0,0,.18)]"
              />

              <div className="absolute inset-0 rounded-[36px] ring-1 ring-[#C8A96A]/20" />
            </motion.div>            {/* Floating Rating Card */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.1,
              }}
              className="absolute -bottom-10 -right-8 z-20"
            >
              <GlassCard className="p-5 w-64">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">

                      Client Rating

                    </p>

                    <h3 className="text-3xl font-bold text-[#171717] mt-1">

                      5.0

                    </h3>

                  </div>

                  <div className="flex">

                    <Star
                      size={20}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />

                    <Star
                      size={20}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />

                    <Star
                      size={20}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />

                    <Star
                      size={20}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />

                    <Star
                      size={20}
                      fill="#C8A96A"
                      className="text-[#C8A96A]"
                    />

                  </div>

                </div>

                <div className="mt-4 h-[1px] bg-gray-200" />

                <p className="mt-4 text-sm leading-7 text-gray-600">

                  Trusted by couples who want cinematic and premium
                  AI wedding invitations.

                </p>

              </GlassCard>

            </motion.div>

            {/* Decorative Glow */}

            <div className="absolute -z-10 top-20 right-10 w-[260px] h-[260px] rounded-full bg-[#C8A96A]/20 blur-[120px]" />

            <div className="absolute -z-10 bottom-10 left-0 w-[220px] h-[220px] rounded-full bg-[#EEDDB5]/40 blur-[120px]" />

          </motion.div>

        </div>

      </Container>      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
      >
        <span className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-4">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="w-[34px] h-[56px] rounded-full border-2 border-[#C8A96A]/40 flex justify-center pt-2"
        >
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="w-2 h-2 rounded-full bg-[#C8A96A]"
          />
        </motion.div>
      </motion.div>

      {/* Decorative Lines */}

      <div className="absolute top-0 left-20 h-full w-px bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent hidden xl:block" />

      <div className="absolute top-0 right-20 h-full w-px bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent hidden xl:block" />

    </section>
  );
}

export default Hero;