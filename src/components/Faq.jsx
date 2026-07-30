import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const faqs = [
  {
    question: "How long does it take to deliver an invitation?",
    answer:
      "Most invitations are delivered within 24 hours after receiving all the required details.",
  },
  {
    question: "Can I request changes after the preview?",
    answer:
      "Yes. We provide revisions so your invitation looks exactly the way you want.",
  },
  {
    question: "Do you create cinematic invitation reels?",
    answer:
      "Yes. We design premium AI-powered cinematic invitation reels along with digital invitations.",
  },
  {
    question: "Will my invitation work on WhatsApp?",
    answer:
      "Absolutely. Every invitation is optimized for WhatsApp, Instagram and mobile devices.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply contact us on WhatsApp, share your wedding details and we'll begin creating your invitation.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before ordering your premium wedding invitation."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="mx-auto mt-20 max-w-4xl space-y-6">
                    {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <GlassCard className="overflow-hidden p-0">

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index ? -1 : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-7
                    text-left
                  "
                >

                  <h3 className="pr-6 text-xl font-semibold text-[#171717]">
                    {faq.question}
                  </h3>

                  <div className="text-[#C8A96A]">

                    {activeIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}

                  </div>

                </button>

                <AnimatePresence initial={false}>

                  {activeIndex === index && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div className="border-t border-gray-200 px-7 py-6">

                        <p className="leading-8 text-gray-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

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
                💬 Still Have Questions?
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                We're Here To Help You
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
                If you have any other questions about our AI wedding invitations,
                cinematic reels or delivery process, feel free to contact us.
                We'll be happy to guide you.
              </p>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default FAQ;