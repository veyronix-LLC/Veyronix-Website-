import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import AsciiGraphic from "./AsciiGraphic";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-soft-linen

        px-6
        pt-32
        pb-16

        sm:px-8
        sm:pt-36

        md:px-10

        lg:px-16
        lg:pt-32
        lg:pb-10

        xl:px-25
      "
    >
      {/* =====================================
          BACKGROUND ELEMENTS
      ===================================== */}

      {/* Main glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[5%]
          h-150
          w-150
          rounded-full
          bg-violet-twilight/6
          blur-3xl

          lg:right-[-8%]
          lg:top-[10%]
        "
      />

      {/* Small decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-10%]
          bottom-[-20%]
          h-100
          w-100
          rounded-full
          bg-violet-twilight/4
          blur-3xl
        "
      />

      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-9rem)]
          max-w-[1600px]
          items-center

          grid-cols-1
          gap-16

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-0
        "
      >
        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            justify-center

            lg:pr-8

            xl:pr-12
          "
        >
          {/* =================================
              EYEBROW
          ================================= */}

          <motion.div
            variants={itemVariants}
            className="
              mb-7
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-violet-twilight/15
              bg-violet-twilight/4
              px-3.5
              py-2
              font-poppins
              text-xs
              tracking-wide
              text-violet-twilight

              sm:mb-8
              sm:text-sm
            "
          >
            <Sparkles size={13} />
            Digital systems for ambitious businesses
          </motion.div>

          {/* =================================
              HEADLINE
          ================================= */}

          <motion.h1
            variants={itemVariants}
            className="
              max-w-4xl
              font-monument
              text-[3.25rem]
              leading-[0.92]
              tracking-[-0.045em]
              text-onyx

              sm:text-6xl

              md:text-7xl

              lg:text-[4.7rem]

              xl:text-[6.3rem]
            "
          >
            Build.
            <br />
            Automate.
            <br />
            Scale <span className="text-violet-twilight">Beyond.</span>
          </motion.h1>

          {/* =================================
              DESCRIPTION
          ================================= */}

          <motion.p
            variants={itemVariants}
            className="
              mt-8
              max-w-lg
              font-poppins
              text-base
              leading-[1.75]
              text-onyx/50

              sm:mt-9
              sm:text-lg

              lg:max-w-xl
            "
          >
            We design, build and automate digital experiences that help
            ambitious businesses move faster and scale further.
          </motion.p>

          {/* =================================
              CTA
          ================================= */}

          <motion.div
            variants={itemVariants}
            className="
              mt-9
              flex
              flex-wrap
              gap-3

              sm:mt-10
              sm:gap-4
            "
          >
            {/* PRIMARY */}

            <button
              className="
                group
                flex
                h-12
                cursor-pointer
                items-center
                gap-2
                rounded-[10px]
                bg-violet-twilight
                px-6
                font-poppins
                text-sm
                text-soft-linen

                transition-all
                duration-300

                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-violet-twilight/20

                sm:h-13
                sm:px-8
                sm:text-base
              "
            >
              Know About Us
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* SECONDARY */}

            <button
              className="
                group
                flex
                h-12
                cursor-pointer
                items-center
                gap-2
                rounded-[10px]
                border
                border-violet-twilight
                px-6
                font-poppins
                text-sm
                text-violet-twilight

                transition-all
                duration-300

                hover:bg-violet-twilight
                hover:text-soft-linen

                sm:h-13
                sm:px-8
                sm:text-base
              "
            >
              Learn More
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>

          {/* =================================
              SERVICES META
          ================================= */}

          <motion.div
            variants={itemVariants}
            className="
              mt-10
              hidden
              items-center
              gap-4
              font-poppins
              text-xs
              text-onyx/30

              sm:flex
              sm:gap-5
            "
          >
            <span>Strategy</span>

            <span className="h-1 w-1 rounded-full bg-onyx/20" />

            <span>Design</span>

            <span className="h-1 w-1 rounded-full bg-onyx/20" />

            <span>Development</span>

            <span className="h-1 w-1 rounded-full bg-onyx/20" />

            <span>Automation</span>
          </motion.div>
        </div>

        {/* =====================================
    RIGHT — ASCII
===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    relative
    flex
    h-90
    w-full
    items-center
    justify-center

    sm:h-110

    md:h-125

    lg:h-140

    xl:h-162.5
  "
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      relative
      flex
      h-full
      w-full
      items-center
      justify-center
    "
          >
            <div
              className="
        h-full
        w-full
        max-w-175
      "
            >
              <AsciiGraphic />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =====================================
          BOTTOM SCROLL INDICATOR
      ===================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          font-poppins
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-onyx/25

          lg:flex
        "
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-8
            w-px
            origin-top
            bg-onyx/20
          "
        />
      </motion.div>
    </section>
  );
};

export default Hero;
