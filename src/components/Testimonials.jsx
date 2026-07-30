import { motion } from "framer-motion";
import {
  Star,
  Quote,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const testimonials = [
  {
    name: "Rahul & Sneha",
    location: "Nagpur",
    review:
      "The Invite Aura created a beautiful invitation that amazed all our family and friends. The quality and creativity were beyond our expectations.",
  },
  {
    name: "Aman & Priya",
    location: "Pune",
    review:
      "The cinematic invitation reel looked absolutely premium. Everything was delivered on time and the experience was amazing.",
  },
  {
    name: "Rohit & Pooja",
    location: "Mumbai",
    review:
      "Professional service, elegant designs and quick delivery. Highly recommended for modern wedding invitations.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Testimonials"
          title="What Our Couples Say"
          subtitle="Real experiences from couples who trusted The Invite Aura for their special day."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                      <Quote size={28} />
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={18}
                          className="fill-[#C8A96A] text-[#C8A96A]"
                        />
                      ))}
                    </div>

                  </div>

                  <p className="mt-8 leading-8 text-gray-600 italic">
                    "{testimonial.review}"
                  </p>

                  <div className="mt-10 border-t border-gray-200 pt-6">

                    <h3 className="text-xl font-bold text-[#171717]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {testimonial.location}
                    </p>

                  </div>

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
                ⭐ Trusted By Happy Couples
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                Creating Memories That Last Forever
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
                Every invitation we create is designed with care, creativity
                and attention to detail. Our goal is to make your wedding
                announcement unforgettable for every guest.
              </p>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default Testimonials;