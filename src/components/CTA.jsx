import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Container from "./ui/Container";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[#FAF8F5]" />

      <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <GlassCard className="relative overflow-hidden p-12 md:p-20">

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#C8A96A]/10
                via-transparent
                to-[#EAD9B2]/10
              "
            />

            <div className="relative text-center">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#C8A96A]/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-[#C8A96A]
                "
              >
                <Sparkles size={16} />
                Let's Create Something Beautiful
              </span>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-[#171717] md:text-6xl">
                Your Dream Wedding Invitation
                <br />
                Starts Here
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Share your wedding details with us and receive a premium
                AI-crafted invitation that your guests will never forget.
              </p>

              {/* PART 2 STARTS BELOW */}

              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                                <Button
                  size="lg"
                  className="group"
                >
                  <MessageCircle
                    size={20}
                    className="mr-2"
                  />

                  Start Your Invitation

                  <ArrowRight
                    size={18}
                    className="
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                >
                  View Portfolio
                </Button>

              </div>

              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-8
                  text-sm
                  text-gray-600
                "
              >

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
                  Delivered Within 24 Hours
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
                  Unlimited Revisions
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
                  WhatsApp Ready
                </div>

              </div>
                          </div>

            <div
              className="
                pointer-events-none
                absolute
                -top-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-[#C8A96A]/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-12
                -left-12
                h-52
                w-52
                rounded-full
                bg-[#EAD9B2]/20
                blur-3xl
              "
            />

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default CTA;