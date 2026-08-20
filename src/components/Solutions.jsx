import { ArrowUpRight, Zap, Workflow, Brain, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Zap,
    number: "01",
    title: "Move Faster",
    description:
      "Replace slow manual processes with digital systems designed to keep your business moving.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Work Smarter",
    description:
      "Connect your tools, automate repetitive work and create workflows that run without constant intervention.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Think Bigger",
    description:
      "Use modern technology and AI to turn opportunities into products, systems and new possibilities.",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Scale Further",
    description:
      "Build foundations that can grow with your business instead of holding it back.",
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="
        relative
        overflow-hidden
        bg-onyx
        px-6
        py-24
        text-soft-linen

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
          BACKGROUND ELEMENT
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-150
          w-150
          rounded-full
          bg-violet-twilight/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-50
          -left-37.5
          h-125
          w-125
          rounded-full
          bg-violet-twilight/10
          blur-3xl
        "
      />

      {/* =====================================
          CONTAINER
      ===================================== */}

      <div className="relative mx-auto max-w-[1600px]">
        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >
          {/* LEFT */}

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
          >
            <div
              className="
                mb-6
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
              Built for what's next
            </div>

            <h2
              className="
                max-w-4xl
                font-monument
                text-4xl
                leading-[0.98]
                tracking-[-0.03em]

                sm:text-5xl

                md:text-6xl

                lg:text-7xl

                xl:text-8xl
              "
            >
              Technology that
              <br />
              works <span className="text-violet-twilight">for you.</span>
            </h2>
          </motion.div>

          {/* RIGHT */}

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
              delay: 0.15,
            }}
            className="flex items-end"
          >
            <p
              className="
                max-w-lg
                font-poppins
                text-base
                leading-[1.8]
                text-soft-linen/45

                sm:text-lg
              "
            >
              We don't believe technology should add complexity. We build
              systems that remove it — giving ambitious businesses the speed,
              clarity and infrastructure to grow.
            </p>
          </motion.div>
        </div>

        {/* =====================================
            SOLUTION GRID
        ===================================== */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            border-t
            border-soft-linen/10

            sm:mt-24
            sm:grid-cols-2

            lg:mt-32
            lg:grid-cols-4
          "
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.number}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  border-b
                  border-soft-linen/10
                  p-6
                  transition-colors
                  duration-500
                  hover:bg-soft-linen/3

                  sm:p-8
                  sm:nth-[2n]:border-l
                  
                  lg:border-b-0
                  lg:border-l
                  lg:p-10
                  lg:first:border-l-0
                "
              >
                {/* NUMBER */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-poppins
                      text-xs
                      text-soft-linen/25
                    "
                  >
                    {solution.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-soft-linen/10
                      text-soft-linen/50
                      transition-all
                      duration-500

                      group-hover:border-violet-twilight
                      group-hover:bg-violet-twilight
                      group-hover:text-soft-linen
                    "
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="mt-16">
                  <h3
                    className="
                      font-monument
                      text-2xl
                      leading-tight

                      sm:text-3xl
                    "
                  >
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      font-poppins
                      text-sm
                      leading-[1.8]
                      text-soft-linen/40
                    "
                  >
                    {solution.description}
                  </p>
                </div>

                {/* HOVER LINE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-violet-twilight
                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* =====================================
            BOTTOM STATEMENT
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
            duration: 0.7,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6

            sm:mt-24

            lg:mt-32
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              max-w-xl
              font-monument
              text-2xl
              leading-tight
              text-soft-linen/80

              sm:text-3xl
            "
          >
            Your business shouldn't have to
            <span className="text-violet-twilight"> slow down</span> because
            your technology does.
          </p>

          <a
            href="#contact"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              font-poppins
              text-sm
              text-soft-linen
            "
          >
            Let's build something
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-violet-twilight
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
