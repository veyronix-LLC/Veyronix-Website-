import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  // =========================================
  // NAVBAR SCROLL BEHAVIOR
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= 10) {
        setShowNavbar(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const difference = currentScrollY - lastScrollY.current;

      // Ignore tiny movements
      if (Math.abs(difference) < 5) {
        return;
      }

      // Scrolling down
      if (difference > 0) {
        setShowNavbar(false);

        // Close menus
        setIsOpen(false);
        setServicesOpen(false);
      }

      // Scrolling up
      else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================
  // CLOSE MENUS
  // =========================================

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const closeServices = () => {
    setServicesOpen(false);
  };

  // =========================================
  // COMPONENT
  // =========================================

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-transform
        duration-300
        ease-out

        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* =====================================
          NAVBAR CONTAINER
      ===================================== */}

      <div
        className="
          w-full
          overflow-hidden
          rounded-b-[30px]
          bg-soft-linen
          px-6
          py-5
          shadow-md

          sm:px-8
          md:px-10
          lg:px-16
          xl:px-25
        "
      >
        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <div className="hidden lg:block">
          {/* =================================
              TOP ROW
          ================================= */}

          <div className="flex items-center justify-between">
            {/* LOGO */}

            <a href="/" onClick={closeMenus}>
              <img src={Logo} alt="Veyronix" className="h-9 xl:h-10" />
            </a>

            {/* =================================
                DESKTOP LINKS
            ================================= */}

            <ul
              className="
                flex
                items-center
                gap-6
                text-[16px]
                font-extralight

                xl:gap-7.5
              "
            >
              {/* SERVICES */}

              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    text-[16px]
                    font-extralight
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  Services
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className={`
                      transition-transform
                      duration-300

                      ${servicesOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>
              </li>

              {/* SOLUTIONS */}

              <li>
                <a
                  href="#solutions"
                  className="
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  Solutions
                </a>
              </li>

              {/* HOW IT WORKS */}

              <li>
                <a
                  href="#how-it-works"
                  className="
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  How It Works
                </a>
              </li>

              {/* PRICING */}

              <li>
                <a
                  href="#pricing"
                  className="
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  Pricing
                </a>
              </li>

              {/* ABOUT */}

              <li>
                <a
                  href="#about"
                  className="
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  About Us
                </a>
              </li>
            </ul>

            {/* =================================
                DESKTOP CTA
            ================================= */}

            <button
              type="button"
              className="
                flex
                h-10
                cursor-pointer
                items-center
                gap-2
                rounded-[10px]
                bg-violet-twilight
                px-4
                text-[16px]
                font-extralight
                text-soft-linen

                transition-transform
                hover:scale-[1.03]
              "
            >
              Let's Talk
              <ArrowRight size={16} />
            </button>
          </div>

          {/* =================================
              DESKTOP SERVICES MENU
          ================================= */}

          <div
            className={`
              grid
              overflow-hidden
              transition-all
              duration-300
              ease-out

              ${
                servicesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0">
              <div
                className="
                  mt-5
                  border-t
                  border-black/10
                  pt-5
                  pb-1
                "
              >
                {/* MENU HEADER */}

                <div className="mb-5">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-violet-twilight
                    "
                  >
                    Services
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      opacity-50
                    "
                  >
                    What we can build for you
                  </p>
                </div>

                {/* =================================
                    SERVICE CARDS
                ================================= */}

                <div className="grid grid-cols-2 gap-3">
                  {/* WEB DEVELOPMENT */}

                  <a
                    href="#web-development"
                    onClick={closeServices}
                    className="
                      group
                      rounded-2xl
                      p-5
                      transition-colors

                      hover:bg-violet-twilight
                      hover:text-soft-linen
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-normal
                        "
                      >
                        Web Development
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-sm
                        opacity-50
                      "
                    >
                      High-performance websites and digital experiences.
                    </p>
                  </a>

                  {/* UI / UX */}

                  <a
                    href="#ui-ux"
                    onClick={closeServices}
                    className="
                      group
                      rounded-2xl
                      p-5
                      transition-colors

                      hover:bg-violet-twilight
                      hover:text-soft-linen
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-normal
                        "
                      >
                        UI / UX Design
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-sm
                        opacity-50
                      "
                    >
                      Interfaces designed around people and products.
                    </p>
                  </a>

                  {/* AI */}

                  <a
                    href="#ai"
                    onClick={closeServices}
                    className="
                      group
                      rounded-2xl
                      p-5
                      transition-colors

                      hover:bg-violet-twilight
                      hover:text-soft-linen
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-normal
                        "
                      >
                        AI Solutions
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-sm
                        opacity-50
                      "
                    >
                      Intelligent systems built for modern businesses.
                    </p>
                  </a>

                  {/* BRANDING */}

                  <a
                    href="#branding"
                    onClick={closeServices}
                    className="
                      group
                      rounded-2xl
                      p-5
                      transition-colors

                      hover:bg-violet-twilight
                      hover:text-soft-linen
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-normal
                        "
                      >
                        Branding
                      </span>

                      <ArrowRight
                        size={18}
                        className="
                          opacity-0
                          transition-all
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-sm
                        opacity-50
                      "
                    >
                      Distinctive identities that make brands memorable.
                    </p>
                  </a>
                </div>

                {/* =================================
                    VIEW ALL SERVICES
                ================================= */}

                <div
                  className="
                    mt-3
                    border-t
                    border-black/10
                    pt-4
                  "
                >
                  <a
                    href="#services"
                    onClick={closeServices}
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      text-sm
                      opacity-50
                      transition-opacity
                      hover:opacity-100
                    "
                  >
                    View all services
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            MOBILE TOP ROW
        ===================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            lg:hidden
          "
        >
          {/* LOGO */}

          <a href="/" onClick={closeMenus}>
            <img src={Logo} alt="Veyronix" className="h-9" />
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-[10px]
              bg-violet-twilight
              text-soft-linen
            "
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}

        <div
          className={`
            grid
            overflow-hidden
            transition-all
            duration-300
            ease-out
            lg:hidden

            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0">
            <div
              className="
                mt-5
                border-t
                border-black/10
                pt-5
              "
            >
              <ul
                className="
                  flex
                  flex-col
                  gap-5
                  text-[16px]
                  font-extralight
                "
              >
                {/* MOBILE SERVICES */}

                <li>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                    "
                  >
                    Services
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`
                        transition-transform
                        duration-300

                        ${servicesOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {/* MOBILE SERVICE ITEMS */}

                  <div
                    className={`
                      grid
                      overflow-hidden
                      transition-all
                      duration-300

                      ${
                        servicesOpen
                          ? "mt-4 grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="min-h-0">
                      <div
                        className="
                          flex
                          flex-col
                          gap-4
                          border-l
                          border-violet-twilight/20
                          pl-4
                        "
                      >
                        <a href="#web-development" onClick={closeMenus}>
                          Web Development
                        </a>

                        <a href="#ui-ux" onClick={closeMenus}>
                          UI / UX Design
                        </a>

                        <a href="#ai" onClick={closeMenus}>
                          AI Solutions
                        </a>

                        <a href="#branding" onClick={closeMenus}>
                          Branding
                        </a>

                        <a
                          href="#services"
                          onClick={closeMenus}
                          className="
                            text-violet-twilight
                          "
                        >
                          View all services →
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* SOLUTIONS */}

                <li>
                  <a href="#solutions" onClick={closeMenus}>
                    Solutions
                  </a>
                </li>

                {/* HOW IT WORKS */}

                <li>
                  <a href="#how-it-works" onClick={closeMenus}>
                    How It Works
                  </a>
                </li>

                {/* PRICING */}

                <li>
                  <a href="#pricing" onClick={closeMenus}>
                    Pricing
                  </a>
                </li>

                {/* ABOUT */}

                <li>
                  <a href="#about" onClick={closeMenus}>
                    About Us
                  </a>
                </li>
              </ul>

              {/* =================================
                  MOBILE CTA
              ================================= */}

              <button
                type="button"
                className="
                  mt-6
                  flex
                  h-11
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-[10px]
                  bg-violet-twilight
                  text-soft-linen
                "
              >
                Let's Talk
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
