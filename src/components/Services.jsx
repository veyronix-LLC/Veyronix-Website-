import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications designed to turn ideas into digital experiences.",
    tags: ["React", "Next.js", "Web Apps"],
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Thoughtful interfaces and experiences that make complex products feel simple, intuitive and beautiful.",
    tags: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Intelligent systems that automate repetitive work, improve decision-making and unlock new possibilities.",
    tags: ["AI Agents", "Automation", "Integrations"],
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Distinctive visual identities that give ambitious businesses a recognizable and memorable presence.",
    tags: ["Identity", "Strategy", "Visual Systems"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
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
        lg:py-32

        xl:px-25
        xl:py-40
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[20%]
          h-125
          w-125
          rounded-full
          bg-violet-twilight/5
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
            gap-8

            lg:grid-cols-[1fr_1fr]
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
              <Sparkles size={13} />
              What we do
            </div>

            <h2
              className="
                max-w-2xl
                font-monument
                text-4xl
                leading-[0.98]
                tracking-[-0.03em]
                text-onyx

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              We turn
              <br />
              <span className="text-violet-twilight">ideas</span> into systems.
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              items-end
            "
          >
            <p
              className="
                max-w-lg
                font-poppins
                text-base
                leading-[1.8]
                text-onyx/50

                sm:text-lg
              "
            >
              From strategy and design to development and automation, we build
              digital systems that don't just look good — they work.
            </p>
          </motion.div>
        </div>

        {/* =====================================
            SERVICE LIST
        ===================================== */}

        <div
          className="
            mt-20
            border-t
            border-onyx/10

            sm:mt-24

            lg:mt-32
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={`#${service.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("/", "")}`}
                className="
                  group
                  grid
                  grid-cols-[40px_1fr_auto]
                  items-center
                  gap-5
                  border-b
                  border-onyx/10
                  py-8

                  sm:grid-cols-[60px_1fr_auto]
                  sm:gap-8
                  sm:py-10

                  lg:grid-cols-[80px_1fr_1.2fr_auto]
                  lg:gap-10
                  lg:py-12

                  xl:py-14
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    self-start
                    pt-1
                    font-poppins
                    text-xs
                    text-onyx/30

                    sm:text-sm
                  "
                >
                  {service.number}
                </span>

                {/* TITLE */}

                <div>
                  <h3
                    className="
                      font-monument
                      text-2xl
                      leading-tight
                      text-onyx
                      transition-colors
                      duration-300

                      group-hover:text-violet-twilight

                      sm:text-3xl

                      md:text-4xl

                      lg:text-5xl
                    "
                  >
                    {service.title}
                  </h3>

                  {/* MOBILE DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      max-w-lg
                      font-poppins
                      text-sm
                      leading-relaxed
                      text-onyx/45

                      lg:hidden
                    "
                  >
                    {service.description}
                  </p>

                  {/* MOBILE TAGS */}

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2

                      lg:hidden
                    "
                  >
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-onyx/10
                          px-3
                          py-1
                          font-poppins
                          text-[10px]
                          text-onyx/40
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DESKTOP DESCRIPTION */}

                <div className="hidden lg:block">
                  <p
                    className="
                      max-w-md
                      font-poppins
                      text-sm
                      leading-[1.7]
                      text-onyx/45

                      xl:text-base
                    "
                  >
                    {service.description}
                  </p>

                  <div className="mt-5 flex gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-onyx/10
                          px-3
                          py-1
                          font-poppins
                          text-[10px]
                          text-onyx/40
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ARROW */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-onyx/10
                    transition-all
                    duration-300

                    group-hover:border-violet-twilight
                    group-hover:bg-violet-twilight
                    group-hover:text-soft-linen

                    sm:h-12
                    sm:w-12
                  "
                >
                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>
              </a>
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
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            justify-end

            lg:mt-16
          "
        >
          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-3
              font-poppins
              text-sm
              text-violet-twilight
            "
          >
            Explore all our services
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
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
