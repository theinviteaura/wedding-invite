import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+918459506110",
    description: "Chat with us for quick responses and order updates.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "theinviteaura@gmail.com",
    description: "Send your wedding details anytime.",
  },
  {
    icon: MapPin,
    title: "Nagpur",
    value: "Nagpur, Maharashtra",
    description: "Serving clients all across India.",
  },
];

function Contact() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Contact"
          title="Let's Create Your Dream Invitation"
          subtitle="Get in touch today and let's design a beautiful AI-powered wedding invitation together."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <GlassCard className="group h-full p-8 transition-all duration-300 hover:-translate-y-2">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#C8A96A]/10
                      text-[#C8A96A]
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-lg font-semibold text-[#C8A96A]">
                    {item.value}
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

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
                💍 Ready To Get Started?
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                Let's Design Something Unforgettable
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
                Share your wedding details with us and we'll create a premium
                AI-powered invitation that perfectly matches your celebration.
              </p>

              <div className="mt-10 flex justify-center">
                <Button size="lg">
                  <MessageCircle size={20} className="mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default Contact;