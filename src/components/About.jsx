import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Think beyond the brief",
    description:
      "We don't just execute requirements. We question, explore and find the opportunity behind the problem.",
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every interaction has a reason. We combine thoughtful design with technology that actually moves the business forward.",
  },
  {
    number: "03",
    title: "Build to scale",
    description:
      "We create systems that are ready for what's next — not solutions you'll have to rebuild six months later.",
  },
];

const About = () => {
  return (
    <section
      id="about"
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
          bottom-[-15%]
          left-[-10%]
          h-150
          w-150
          rounded-full
          bg-violet-twilight/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* =====================================
            INTRO
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
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          {/* EYEBROW */}

          <div>
            <div
              className="
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
              About Veyronix
            </div>
          </div>

          {/* MAIN STATEMENT */}

          <div>
            <h2
              className="
                max-w-6xl
                font-monument
                text-4xl
                leading-none
                tracking-[-0.035em]
                text-onyx

                sm:text-5xl

                md:text-6xl

                lg:text-7xl

                xl:text-8xl
              "
            >
              We believe technology should make ambitious ideas{" "}
              <span className="text-violet-twilight">inevitable.</span>
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                font-poppins
                text-base
                leading-[1.8]
                text-onyx/50

                sm:mt-10
                sm:text-lg
              "
            >
              Veyronix is a digital systems studio focused on creating
              meaningful experiences, intelligent automation and scalable
              technology for businesses that refuse to stand still.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-8
                flex
                w-fit
                items-center
                gap-3
                font-poppins
                text-sm
                text-violet-twilight
              "
            >
              Start a conversation
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-twilight
                  text-soft-linen
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* =====================================
            DIVIDER
        ===================================== */}

        <div className="my-20 h-px bg-onyx/10 lg:my-28" />

        {/* =====================================
            PRINCIPLES
        ===================================== */}

        <div>
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
          >
            <p
              className="
                font-poppins
                text-xs
                uppercase
                tracking-[0.2em]
                text-onyx/30
              "
            >
              What drives us
            </p>
          </motion.div>

          <div
            className="
              mt-10
              grid
              grid-cols-1

              md:grid-cols-3
            "
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  border-t
                  border-onyx/10
                  px-0
                  py-8

                  md:border-l
                  md:border-t-0
                  md:px-8
                  md:py-0

                  first:md:border-l-0
                  first:md:pl-0
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    font-poppins
                    text-xs
                    tracking-[0.15em]
                    text-violet-twilight
                  "
                >
                  {principle.number}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-6
                    max-w-xs
                    font-monument
                    text-2xl
                    leading-tight
                    tracking-[-0.02em]
                    text-onyx

                    sm:text-3xl
                  "
                >
                  {principle.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-sm
                    font-poppins
                    text-sm
                    leading-[1.8]
                    text-onyx/45
                  "
                >
                  {principle.description}
                </p>

                {/* ARROW */}

                <div
                  className="
                    mt-8
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-onyx/10
                    text-onyx/30
                    transition-all
                    duration-300

                    group-hover:border-violet-twilight
                    group-hover:bg-violet-twilight
                    group-hover:text-soft-linen
                  "
                >
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================
            BIG CLOSING STATEMENT
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-24
            overflow-hidden
            rounded-[30px]
            bg-violet-twilight
            px-7
            py-12
            text-soft-linen

            sm:px-10
            sm:py-16

            md:px-16
            md:py-20

            lg:mt-32
            lg:px-20
            lg:py-24
          "
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h3
              className="
                max-w-4xl
                font-monument
                text-3xl
                leading-[1.05]
                tracking-[-0.03em]

                sm:text-4xl

                md:text-5xl

                lg:text-6xl
              "
            >
              Your next big idea deserves more than ordinary.
            </h3>

            <a
              href="#contact"
              className="
                group
                flex
                w-fit
                shrink-0
                items-center
                gap-3
                rounded-[10px]
                bg-soft-linen
                px-6
                py-3
                font-poppins
                text-sm
                text-violet-twilight
                transition-transform
                duration-300

                hover:scale-[1.03]
              "
            >
              Let's build it
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
