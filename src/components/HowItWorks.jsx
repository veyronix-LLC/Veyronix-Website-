import {
  ArrowRight,
  Check,
  MessageCircle,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    description:
      "We understand your business, your challenges and where technology can create the biggest impact.",
    points: [
      "Goals & requirements",
      "Business analysis",
      "Technical direction",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We turn the strategy into a clear visual direction and an experience built around your users.",
    points: ["UX strategy", "UI design", "Interactive prototypes"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "Our team transforms the approved concept into a fast, scalable and reliable digital product.",
    points: ["Development", "Integrations", "Testing & refinement"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We launch, monitor and optimize your system so it continues improving long after delivery.",
    points: ["Deployment", "Optimization", "Ongoing support"],
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
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
          BACKGROUND
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[20%]
          h-125
          w-125
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
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            {/* EYEBROW */}

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
              <span className="h-1.5 w-1.5 rounded-full bg-violet-twilight" />
              How it works
            </div>

            <h2
              className="
                max-w-4xl
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
              From idea
              <br />
              to <span className="text-violet-twilight">impact.</span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              font-poppins
              text-base
              leading-[1.8]
              text-onyx/50

              sm:text-lg
            "
          >
            No unnecessary complexity. Just a clear process that takes your idea
            from the first conversation to a system ready to grow.
          </p>
        </motion.div>

        {/* =====================================
            PROCESS
        ===================================== */}

        <div className="relative mt-20 lg:mt-32">
          {/* DESKTOP CONNECTING LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-6.75
              hidden
              h-px
              bg-onyx/10

              lg:block
            "
          />

          <div
            className="
              absolute
              left-0
              top-6.75
              hidden
              h-px
              w-[65%]
              bg-violet-twilight

              lg:block
            "
          />

          {/* STEPS */}

          <div
            className="
              grid
              grid-cols-1
              gap-0

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    border-b
                    border-onyx/10
                    py-10

                    sm:px-6
                    sm:nth-[1]:border-r
                    sm:nth-[2]:border-r

                    lg:border-b-0
                    lg:px-8
                    lg:first:pl-0
                    lg:last:pr-0
                    lg:border-r
                    lg:last:border-r-0
                    lg:py-0
                  "
                >
                  {/* STEP DOT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-onyx/10
                      bg-soft-linen
                      text-onyx/40
                      transition-all
                      duration-500

                      group-hover:border-violet-twilight
                      group-hover:bg-violet-twilight
                      group-hover:text-soft-linen
                    "
                  >
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  {/* NUMBER */}

                  <div
                    className="
                      mt-8
                      font-poppins
                      text-xs
                      tracking-[0.15em]
                      text-violet-twilight
                    "
                  >
                    {step.number}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-3
                      font-monument
                      text-2xl
                      text-onyx

                      sm:text-3xl
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      max-w-sm
                      font-poppins
                      text-sm
                      leading-[1.8]
                      text-onyx/45
                    "
                  >
                    {step.description}
                  </p>

                  {/* POINTS */}

                  <div className="mt-6 space-y-2.5">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="
                          flex
                          items-center
                          gap-2
                          font-poppins
                          text-xs
                          text-onyx/50
                        "
                      >
                        <span
                          className="
                            flex
                            h-4
                            w-4
                            items-center
                            justify-center
                            rounded-full
                            bg-violet-twilight/10
                            text-violet-twilight
                          "
                        >
                          <Check size={9} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6
            border-t
            border-onyx/10
            pt-8

            sm:mt-24
            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-32
          "
        >
          <div>
            <p
              className="
                font-poppins
                text-xs
                uppercase
                tracking-[0.2em]
                text-onyx/30
              "
            >
              Ready when you are
            </p>

            <p
              className="
                mt-2
                font-monument
                text-xl
                text-onyx

                sm:text-2xl
              "
            >
              Let's build something meaningful.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              h-12
              w-fit
              items-center
              gap-3
              rounded-[10px]
              bg-violet-twilight
              px-7
              font-poppins
              text-sm
              text-soft-linen
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              hover:shadow-violet-twilight/20
            "
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
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
