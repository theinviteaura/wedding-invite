import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Sparkles,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

const plans = [
  {
    name: "Basic",
    icon: Sparkles,
    price: "₹999",
    badge: "",
    features: [
      "AI Wedding Invitation",
      "HD Quality",
      "WhatsApp Ready",
      "2 Revisions",
      "24 Hours Delivery",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    price: "₹1999",
    badge: "Most Popular",
    features: [
      "Luxury AI Invitation",
      "Cinematic Reel",
      "Premium Animations",
      "Unlimited Revisions",
      "Priority Support",
      "24 Hours Delivery",
    ],
  },
  {
    name: "Luxury",
    icon: Crown,
    price: "Custom",
    badge: "",
    features: [
      "Everything In Premium",
      "Fully Custom Design",
      "Luxury Storytelling",
      "Exclusive Concepts",
      "VIP Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-40 h-[420px] w-[420px] rounded-full bg-[#C8A96A]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-[#EAD9B2]/20 blur-[150px]" />

      </div>

      <Container>

        <SectionTitle
          badge="Pricing"
          title="Choose Your Perfect Package"
          subtitle="Premium wedding invitation packages crafted for every couple."
        />

        {/* PART 2 STARTS BELOW */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <GlassCard
                  className={`
                    relative
                    h-full
                    overflow-hidden
                    p-8
                    group
                    ${
                      plan.badge
                        ? "border-2 border-[#C8A96A] scale-[1.02]"
                        : ""
                    }
                  `}
                >

                  {plan.badge && (
                    <span
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-[#C8A96A]
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      {plan.badge}
                    </span>
                  )}

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
                    "
                  >
                    <Icon
                      size={30}
                      className="text-[#C8A96A]"
                    />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-[#171717]">
                    {plan.name}
                  </h3>

                  <p className="mt-4 text-5xl font-bold text-[#C8A96A]">
                    {plan.price}
                  </p>

                  <div className="mt-10 space-y-5">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={18}
                          className="text-[#C8A96A]"
                        />

                        <span className="text-gray-600">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>

                  <Button className="mt-10 w-full">
                    Get Started
                  </Button>

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
                💎 Premium Experience
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#171717]">
                Not Sure Which Package Is Right For You?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
                Tell us about your wedding and we'll recommend the perfect
                invitation package based on your style, budget and vision.
              </p>

              <div className="mt-10">

                <Button>
                  Contact Us
                </Button>

              </div>

            </div>

          </GlassCard>

        </motion.div>
              </Container>

    </section>
  );
}

export default Pricing;