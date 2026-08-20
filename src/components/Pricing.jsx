import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Launch",
    description: "For businesses ready to establish a strong digital presence.",
    price: "Starting from",
    amount: "$1,500",
    featured: false,

    features: [
      "Strategy & discovery",
      "UI / UX design",
      "Responsive website",
      "Frontend development",
      "Basic integrations",
      "Launch support",
    ],
  },

  {
    name: "Scale",
    description:
      "For ambitious businesses looking to build systems that scale.",
    price: "Starting from",
    amount: "$3,500",
    featured: true,

    features: [
      "Everything in Launch",
      "Advanced UI / UX",
      "Custom web applications",
      "API & database integration",
      "Business automation",
      "Analytics & optimization",
      "Post-launch support",
    ],
  },

  {
    name: "Custom",
    description:
      "For complex products, AI systems and highly specialized solutions.",
    price: "Let's talk",
    amount: "Custom",
    featured: false,

    features: [
      "Everything in Scale",
      "AI integrations",
      "Advanced automation",
      "Custom backend systems",
      "Third-party integrations",
      "Dedicated development",
      "Long-term partnership",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-soft-linen
        px-6
        py-24

        sm:px-8
        sm:py-28

        md:px-10

        lg:px-16
        lg:py-36

        xl:px-25
        xl:py-44
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[25%]
          h-150
          w-150
          rounded-full
          bg-violet-twilight/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* =====================================
            HEADER
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-2
              font-poppins
              text-xs
              uppercase
              tracking-[0.2em]
              text-violet-twilight
            "
          >
            <Sparkles size={13} />
            Pricing
          </div>

          {/* Heading */}

          <h2
            className="
              font-monument
              text-4xl
              leading-[0.98]
              tracking-[-0.03em]
              text-onyx

              sm:text-5xl

              md:text-6xl

              lg:text-7xl

              xl:text-8xl
            "
          >
            Choose how
            <br />
            <span className="text-violet-twilight">you want to grow.</span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-xl
              font-poppins
              text-base
              leading-[1.8]
              text-onyx/50

              sm:text-lg
            "
          >
            Every business is different. Our plans give you a starting point,
            while every project is tailored around your goals, requirements and
            growth.
          </p>
        </motion.div>

        {/* =====================================
            PRICING GRID
        ===================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4

            md:mt-20
            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                relative
                flex
                min-h-155
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                p-7
                transition-all
                duration-500

                sm:p-9

                ${
                  plan.featured
                    ? `
                      border-violet-twilight
                      bg-violet-twilight
                      text-soft-linen
                      shadow-xl
                      shadow-violet-twilight/10
                    `
                    : `
                      border-onyx/10
                      bg-soft-linen
                      text-onyx
                      hover:border-violet-twilight/30
                    `
                }
              `}
            >
              {/* Featured badge */}

              {plan.featured && (
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-soft-linen/10
                    px-3
                    py-1.5
                    font-poppins
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-soft-linen" />
                  Most popular
                </div>
              )}

              {/* =====================================
                  PLAN HEADER
              ===================================== */}

              <div>
                <p
                  className={`
                    font-poppins
                    text-sm
                    font-medium

                    ${
                      plan.featured ? "text-soft-linen" : "text-violet-twilight"
                    }
                  `}
                >
                  {plan.name}
                </p>

                <p
                  className={`
                    mt-4
                    max-w-sm
                    font-poppins
                    text-sm
                    leading-[1.7]

                    ${plan.featured ? "text-soft-linen/60" : "text-onyx/50"}
                  `}
                >
                  {plan.description}
                </p>
              </div>

              {/* =====================================
                  PRICE
              ===================================== */}

              <div className="mt-10">
                <p
                  className={`
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]

                    ${plan.featured ? "text-soft-linen/40" : "text-onyx/30"}
                  `}
                >
                  {plan.price}
                </p>

                <p
                  className="
                    mt-2
                    font-monument
                    text-4xl
                    tracking-[-0.03em]

                    sm:text-5xl
                  "
                >
                  {plan.amount}
                </p>
              </div>

              {/* =====================================
                  CTA
              ===================================== */}

              <a
                href="#contact"
                className={`
                  group
                  mt-8
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-[10px]
                  font-poppins
                  text-sm
                  transition-all
                  duration-300

                  ${
                    plan.featured
                      ? `
                        bg-soft-linen
                        text-violet-twilight
                        hover:scale-[1.02]
                      `
                      : `
                        bg-violet-twilight
                        text-soft-linen
                        hover:scale-[1.02]
                      `
                  }
                `}
              >
                Start a project
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* =====================================
                  DIVIDER
              ===================================== */}

              <div
                className={`
                  my-8
                  h-px

                  ${plan.featured ? "bg-soft-linen/15" : "bg-onyx/10"}
                `}
              />

              {/* =====================================
                  FEATURES
              ===================================== */}

              <div>
                <p
                  className={`
                    mb-5
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]

                    ${plan.featured ? "text-soft-linen/40" : "text-onyx/30"}
                  `}
                >
                  What's included
                </p>

                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full

                          ${
                            plan.featured
                              ? "bg-soft-linen/10"
                              : "bg-violet-twilight/10"
                          }
                        `}
                      >
                        <Check
                          size={11}
                          className={
                            plan.featured
                              ? "text-soft-linen"
                              : "text-violet-twilight"
                          }
                        />
                      </span>

                      <span
                        className={`
                          font-poppins
                          text-sm

                          ${
                            plan.featured
                              ? "text-soft-linen/70"
                              : "text-onyx/60"
                          }
                        `}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =====================================
                  BOTTOM NOTE
              ===================================== */}

              <div className="mt-auto pt-8">
                <p
                  className={`
                    font-poppins
                    text-xs
                    leading-relaxed

                    ${plan.featured ? "text-soft-linen/35" : "text-onyx/30"}
                  `}
                >
                  Final pricing depends on project scope, complexity and
                  timeline.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-3xl
            border
            border-onyx/10
            p-6

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
        >
          <div>
            <p className="font-poppins text-sm font-medium text-onyx">
              Not sure which plan fits?
            </p>

            <p className="mt-1 font-poppins text-xs text-onyx/40">
              Tell us what you're trying to build and we'll recommend the right
              approach.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              shrink-0
              items-center
              gap-2
              font-poppins
              text-sm
              text-violet-twilight
            "
          >
            Talk to us
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
