import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Veyronix took an idea that was difficult to explain and turned it into a product that felt obvious from day one.",
    name: "Alex Morgan",
    role: "Founder & CEO",
    company: "Nexora",
  },
  {
    quote:
      "The biggest difference was how quickly they understood our business. They weren't just building what we asked for — they were solving the problem behind it.",
    name: "Daniel Carter",
    role: "Co-Founder",
    company: "Vertex Labs",
  },
  {
    quote:
      "Our new system eliminated hours of repetitive work every week. The team was incredibly easy to work with throughout the entire process.",
    name: "Sarah Williams",
    role: "Operations Director",
    company: "Orbis",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
          right-[-15%]
          top-[15%]
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
        >
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
            Client stories
          </div>

          <div
            className="
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
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
              Don't take
              <br />
              our word for it.
            </h2>

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
              The best measure of our work isn't what we say about it. It's what
              happens to the businesses we build it for.
            </p>
          </div>
        </motion.div>

        {/* =====================================
            FEATURED TESTIMONIAL
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[30px]
            bg-violet-twilight
            p-8
            text-soft-linen

            sm:p-10

            md:p-14

            lg:mt-24
            lg:p-20

            xl:p-24
          "
        >
          {/* Decorative circle */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-96
              w-96
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
              h-72
              w-72
              rounded-full
              border
              border-soft-linen/10
            "
          />

          {/* Quote icon */}

          <div
            className="
              relative
              mb-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-soft-linen/10
            "
          >
            <Quote size={20} />
          </div>

          {/* Quote */}

          <blockquote
            className="
              relative
              max-w-6xl
              font-monument
              text-2xl
              leading-[1.15]
              tracking-[-0.02em]

              sm:text-3xl

              md:text-4xl

              lg:text-5xl

              xl:text-6xl
            "
          >
            "{testimonials[0].quote}"
          </blockquote>

          {/* Person */}

          <div
            className="
              relative
              mt-12
              flex
              items-center
              justify-between
              gap-6
            "
          >
            <div>
              <p className="font-poppins text-sm font-medium">
                {testimonials[0].name}
              </p>

              <p className="mt-1 font-poppins text-xs text-soft-linen/50">
                {testimonials[0].role} · {testimonials[0].company}
              </p>
            </div>

            <div
              className="
                hidden
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-soft-linen/20

                sm:flex
              "
            >
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* =====================================
            SUPPORTING TESTIMONIALS
        ===================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4

            md:grid-cols-2
          "
        >
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                rounded-3xl
                border
                border-onyx/10
                p-7
                transition-all
                duration-500

                hover:border-violet-twilight/30
                hover:bg-violet-twilight/3

                sm:p-9
              "
            >
              {/* TOP */}

              <div className="flex items-center justify-between">
                <Quote size={18} className="text-violet-twilight" />

                <ArrowUpRight
                  size={18}
                  className="
                    text-onyx/20
                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-violet-twilight
                  "
                />
              </div>

              {/* QUOTE */}

              <p
                className="
                  mt-8
                  max-w-xl
                  font-poppins
                  text-base
                  leading-[1.8]
                  text-onyx/65

                  sm:text-lg
                "
              >
                "{testimonial.quote}"
              </p>

              {/* PERSON */}

              <div className="mt-10">
                <p className="font-poppins text-sm font-medium text-onyx">
                  {testimonial.name}
                </p>

                <p className="mt-1 font-poppins text-xs text-onyx/40">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
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
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-onyx/10
            pt-8

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-24
          "
        >
          <p
            className="
              font-poppins
              text-xs
              uppercase
              tracking-[0.18em]
              text-onyx/30
            "
          >
            More projects. More impact.
          </p>

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
            Work with us
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
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
