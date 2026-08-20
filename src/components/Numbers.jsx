import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Digital experiences built for ambitious businesses.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Businesses Automated",
    description: "Processes transformed through smart automation.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Focused on delivering results that actually matter.",
  },
];

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Numbers = () => {
  return (
    <section className="bg-violet-twilight px-6 py-20 text-soft-linen sm:px-8 md:px-10 lg:px-16 xl:px-25">
      <div className="mx-auto max-w-[1600px]">
        {/* =================================
            HEADER
        ================================= */}

        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-poppins text-sm uppercase tracking-[0.2em] text-soft-linen/50">
            Our Impact
          </p>

          <h2 className="font-monument text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Numbers that
            <br />
            <span className="text-soft-linen/50">speak for us.</span>
          </h2>
        </div>

        {/* =================================
            STATS
        ================================= */}

        <div className="grid grid-cols-1 border-t border-soft-linen/20 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`
                py-10

                md:px-8
                md:py-12

                ${
                  index !== 0
                    ? "border-t border-soft-linen/20 md:border-l md:border-t-0"
                    : ""
                }

                lg:px-10
              `}
            >
              {/* NUMBER */}

              <div className="font-monument text-6xl tracking-tight sm:text-7xl lg:text-8xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* LABEL */}

              <h3 className="mt-6 font-poppins text-lg font-medium">
                {stat.label}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-2 max-w-xs font-poppins text-sm leading-relaxed text-soft-linen/50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
