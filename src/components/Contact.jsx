import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-violet-twilight
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
          BACKGROUND ELEMENTS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-125
          w-125
          rounded-full
          border
          border-soft-linen/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-85
          w-85
          rounded-full
          border
          border-soft-linen/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-20%]
          left-[-10%]
          h-125
          w-125
          rounded-full
          bg-soft-linen/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* =====================================
            TOP CONTENT
        ===================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* =====================================
              LEFT
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
            className="flex flex-col justify-between"
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
                  text-soft-linen/60
                "
              >
                <Sparkles size={13} />
                Start a project
              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-7
                  max-w-3xl
                  font-monument
                  text-5xl
                  leading-[0.95]
                  tracking-[-0.035em]

                  sm:text-6xl

                  md:text-7xl

                  lg:text-7xl

                  xl:text-8xl
                "
              >
                Let's build
                <br />
                something
                <br />
                <span className="text-soft-linen/40">remarkable.</span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-8
                  max-w-lg
                  font-poppins
                  text-base
                  leading-[1.8]
                  text-soft-linen/55

                  sm:text-lg
                "
              >
                Have an idea, a problem that needs solving, or simply want to
                explore what's possible? Tell us about it.
              </p>
            </div>

            {/* EMAIL */}

            <a
              href="mailto:hello@veyronix.ai"
              className="
                group
                mt-12
                flex
                w-fit
                items-center
                gap-4
                font-poppins
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-soft-linen/10
                  transition-colors
                  duration-300

                  group-hover:bg-soft-linen
                  group-hover:text-violet-twilight
                "
              >
                <Mail size={17} />
              </span>

              <span>
                <span className="block text-xs text-soft-linen/40">
                  Or email us directly
                </span>

                <span className="mt-1 block text-sm">hello@veyronix.ai</span>
              </span>
            </a>
          </motion.div>

          {/* =====================================
              RIGHT — FORM
          ===================================== */}

          <motion.div
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
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-[28px]
              border
              border-soft-linen/10
              bg-soft-linen/6
              p-6
              backdrop-blur-xl

              sm:p-8

              md:p-10

              lg:p-12
            "
          >
            <form className="flex flex-col gap-7">
              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-soft-linen/40
                  "
                >
                  Your name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="
                    w-full
                    border-b
                    border-soft-linen/15
                    bg-transparent
                    px-0
                    py-3
                    font-poppins
                    text-sm
                    text-soft-linen
                    outline-none
                    placeholder:text-soft-linen/20
                    transition-colors

                    focus:border-soft-linen/60
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-soft-linen/40
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="
                    w-full
                    border-b
                    border-soft-linen/15
                    bg-transparent
                    px-0
                    py-3
                    font-poppins
                    text-sm
                    text-soft-linen
                    outline-none
                    placeholder:text-soft-linen/20
                    transition-colors

                    focus:border-soft-linen/60
                  "
                />
              </div>

              {/* COMPANY */}

              <div>
                <label
                  htmlFor="company"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-soft-linen/40
                  "
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="
                    w-full
                    border-b
                    border-soft-linen/15
                    bg-transparent
                    px-0
                    py-3
                    font-poppins
                    text-sm
                    text-soft-linen
                    outline-none
                    placeholder:text-soft-linen/20
                    transition-colors

                    focus:border-soft-linen/60
                  "
                />
              </div>

              {/* PROJECT TYPE */}

              <div>
                <label
                  htmlFor="project"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-soft-linen/40
                  "
                >
                  What do you need?
                </label>

                <select
                  id="project"
                  defaultValue=""
                  className="
                    w-full
                    border-b
                    border-soft-linen/15
                    bg-transparent
                    px-0
                    py-3
                    font-poppins
                    text-sm
                    text-soft-linen/60
                    outline-none
                    transition-colors

                    focus:border-soft-linen/60
                  "
                >
                  <option value="" disabled className="bg-violet-twilight">
                    Select a service
                  </option>

                  <option value="web" className="bg-violet-twilight">
                    Web Development
                  </option>

                  <option value="design" className="bg-violet-twilight">
                    UI / UX Design
                  </option>

                  <option value="ai" className="bg-violet-twilight">
                    AI Solutions
                  </option>

                  <option value="automation" className="bg-violet-twilight">
                    Automation
                  </option>

                  <option value="other" className="bg-violet-twilight">
                    Something else
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-soft-linen/40
                  "
                >
                  Tell us about it
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us what you're building..."
                  className="
                    w-full
                    resize-none
                    border-b
                    border-soft-linen/15
                    bg-transparent
                    px-0
                    py-3
                    font-poppins
                    text-sm
                    text-soft-linen
                    outline-none
                    placeholder:text-soft-linen/20
                    transition-colors

                    focus:border-soft-linen/60
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  mt-2
                  flex
                  h-13
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-soft-linen
                  font-poppins
                  text-sm
                  text-violet-twilight
                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  hover:shadow-xl
                "
              >
                Send project inquiry
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              <p
                className="
                  text-center
                  font-poppins
                  text-[10px]
                  leading-relaxed
                  text-soft-linen/25
                "
              >
                We'll review your project and get back to you as soon as
                possible.
              </p>
            </form>
          </motion.div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-24
            border-t
            border-soft-linen/10
            pt-8

            lg:mt-32
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                font-poppins
                text-xs
                uppercase
                tracking-[0.18em]
                text-soft-linen/25
              "
            >
              Veyronix — Digital systems for what's next.
            </p>

            <p
              className="
                font-poppins
                text-xs
                text-soft-linen/25
              "
            >
              Let's make something extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
