import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-onyx px-6 pb-6 pt-20 text-soft-linen sm:px-8 md:px-10 lg:px-16 xl:px-25">
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================
            TOP
        ===================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-14
            border-b
            border-soft-linen/10
            pb-16

            md:grid-cols-2

            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            lg:gap-10
          "
        >
          {/* =====================================
              BRAND
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Logo}
              alt="Veyronix"
              className="h-9 brightness-0 invert"
            />

            <p
              className="
                mt-6
                max-w-sm
                font-poppins
                text-sm
                leading-[1.8]
                text-soft-linen/40
              "
            >
              We design, build and automate digital systems that help ambitious
              businesses move faster and scale further.
            </p>

            {/* SOCIALS */}

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
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
                  duration-300
                  hover:border-soft-linen/30
                  hover:bg-soft-linen
                  hover:text-onyx
                "
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
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
                  duration-300
                  hover:border-soft-linen/30
                  hover:bg-soft-linen
                  hover:text-onyx
                "
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
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
                  duration-300
                  hover:border-soft-linen/30
                  hover:bg-soft-linen
                  hover:text-onyx
                "
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </motion.div>

          {/* =====================================
              COMPANY
          ===================================== */}

          <FooterColumn
            title="Company"
            links={[
              ["About Us", "#about"],
              ["How It Works", "#how-it-works"],
              ["Pricing", "#pricing"],
              ["Contact", "#contact"],
            ]}
          />

          {/* =====================================
              SERVICES
          ===================================== */}

          <FooterColumn
            title="Services"
            links={[
              ["Web Development", "#web-development"],
              ["UI / UX Design", "#ui-ux"],
              ["AI Solutions", "#ai"],
              ["Automation", "#automation"],
            ]}
          />

          {/* =====================================
              CONTACT
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            <span
              className="
                font-poppins
                text-xs
                uppercase
                tracking-[0.18em]
                text-soft-linen/30
              "
            >
              Get in touch
            </span>

            <a
              href="mailto:hello@veyronix.com"
              className="
                group
                mt-5
                flex
                w-fit
                items-center
                gap-2
                font-poppins
                text-sm
                text-soft-linen/70
                transition-colors
                hover:text-soft-linen
              "
            >
              hello@veyronix.com
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            {/* START PROJECT */}

            <a
              href="#contact"
              className="
                group
                mt-8
                flex
                w-fit
                items-center
                gap-2
                font-poppins
                text-sm
                text-violet-twilight
              "
            >
              Start a project
              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================
            LARGE BRAND STATEMENT
        ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden
            py-16

            sm:py-20

            lg:py-24
          "
        >
          <h2
            className="
              select-none
              font-monument
              text-[15vw]
              leading-[0.75]
              tracking-[-0.06em]
              text-soft-linen/[0.035]

              lg:text-[13vw]
            "
          >
            VEYRONIX
          </h2>
        </motion.div>

        {/* =====================================
            BOTTOM BAR
        ===================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-soft-linen/10
            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-poppins
              text-[11px]
              text-soft-linen/25
            "
          >
            © {new Date().getFullYear()} Veyronix. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="
                font-poppins
                text-[11px]
                text-soft-linen/25
                transition-colors
                hover:text-soft-linen/60
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                font-poppins
                text-[11px]
                text-soft-linen/25
                transition-colors
                hover:text-soft-linen/60
              "
            >
              Terms
            </a>

            {/* BACK TO TOP */}

            <button
              onClick={scrollToTop}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-2
                font-poppins
                text-[11px]
                text-soft-linen/40
                transition-colors
                hover:text-soft-linen
              "
            >
              Back to top
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-soft-linen/10
                  transition-all
                  duration-300

                  group-hover:bg-soft-linen
                  group-hover:text-onyx
                "
              >
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =====================================
   FOOTER COLUMN
===================================== */

const FooterColumn = ({ title, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span
        className="
          font-poppins
          text-xs
          uppercase
          tracking-[0.18em]
          text-soft-linen/30
        "
      >
        {title}
      </span>

      <ul className="mt-5 flex flex-col gap-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="
                group
                flex
                w-fit
                items-center
                gap-1
                font-poppins
                text-sm
                text-soft-linen/55
                transition-colors
                hover:text-soft-linen
              "
            >
              {label}

              <ArrowUpRight
                size={12}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:opacity-100
                "
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Footer;
