import { useCallback, useEffect, useRef, useState } from "react";
import { Translate } from "@phosphor-icons/react";
import { Logo } from "./Logo.jsx";

const navigationByLocale = {
  ar: [
    { label: "الأسعــــار", href: "/pricing" },
    { label: "المميــــزات", href: "/#why-viabook-title" },
    { label: "المنتــــج", href: "/#top" },
  ],
  en: [
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/#why-viabook-title" },
    { label: "Product", href: "/#top" },
  ],
};

const labelsByLocale = {
  ar: {
    navigation: "التنقل الرئيسي",
    mobileNavigation: "التنقل على الجوال",
    login: "تسجيل دخــــــول",
    loginMobile: "تسجيل الدخول",
    start: "ابــــدأ مجانا",
    startMobile: "ابدأ مجانا",
    language: "Switch to English",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  en: {
    navigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    login: "Log in",
    loginMobile: "Log in",
    start: "Start for free",
    startMobile: "Start for free",
    language: "التبديل إلى العربية",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const NAV_HIDE_THRESHOLD = 18;
const NAV_SHOW_THRESHOLD = 8;
const NAV_ALWAYS_VISIBLE_RANGE = 80;
const COMPACT_NAV_MAX = 1200;

export function Header({ locale, onToggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");
  const headerRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const scrollFrameRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrollDistanceRef = useRef(0);
  const scrollDirectionRef = useRef(null);
  const navigation = navigationByLocale[locale];
  const labels = labelsByLocale[locale];

  const openMenu = useCallback(() => {
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsClosing(true);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus({ preventScroll: true });

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    const closeAboveBreakpoint = () => {
      if (window.innerWidth > COMPACT_NAV_MAX) {
        setIsClosing(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeAboveBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeAboveBreakpoint);
    };
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (isOpen) setIsHidden(false);
  }, [isOpen]);

  useEffect(() => {
    const updateHeader = () => {
      scrollFrameRef.current = 0;
      const scrollY = Math.max(window.scrollY, 0);
      const scrollDelta = scrollY - lastScrollYRef.current;
      const scrollDirection = scrollDelta > 0 ? "down" : scrollDelta < 0 ? "up" : null;
      const scrolled = scrollY > 24;
      const canAutoHide = window.innerWidth > COMPACT_NAV_MAX;
      const header = headerRef.current;
      const sampleY = scrolled
        ? Math.min(window.innerHeight - 1, 32)
        : Math.min(window.innerHeight - 1, 62);
      const themedBackground = header
        ? document
            .elementsFromPoint(window.innerWidth / 2, sampleY)
            .filter((element) => !header.contains(element))
            .map((element) => element.closest("[data-nav-theme]"))
            .find(Boolean)
        : null;
      const nextTheme = themedBackground?.dataset.navTheme ?? "light";

      setIsScrolled(scrolled);
      setNavTheme((currentTheme) =>
        currentTheme === nextTheme ? currentTheme : nextTheme,
      );

      if (!canAutoHide) {
        setIsHidden(false);
        scrollDistanceRef.current = 0;
        scrollDirectionRef.current = null;
      } else if (scrollY <= NAV_ALWAYS_VISIBLE_RANGE) {
        setIsHidden(false);
        scrollDistanceRef.current = 0;
      } else if (scrollDirection) {
        if (scrollDirectionRef.current !== scrollDirection) {
          scrollDirectionRef.current = scrollDirection;
          scrollDistanceRef.current = 0;
        }

        scrollDistanceRef.current += Math.abs(scrollDelta);

        if (
          scrollDirection === "down" &&
          scrollDistanceRef.current >= NAV_HIDE_THRESHOLD
        ) {
          setIsHidden(true);
          scrollDistanceRef.current = 0;
        } else if (
          scrollDirection === "up" &&
          scrollDistanceRef.current >= NAV_SHOW_THRESHOLD
        ) {
          setIsHidden(false);
          scrollDistanceRef.current = 0;
        }
      }

      lastScrollYRef.current = scrollY;
    };

    const requestUpdate = () => {
      if (!scrollFrameRef.current) {
        scrollFrameRef.current = window.requestAnimationFrame(updateHeader);
      }
    };

    lastScrollYRef.current = Math.max(window.scrollY, 0);
    updateHeader();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (scrollFrameRef.current) window.cancelAnimationFrame(scrollFrameRef.current);
    };
  }, []);

  const headerClassName = [
    "site-header",
    "motion-enter",
    "motion-delay-header",
    `nav-theme-${navTheme}`,
    isScrolled ? "is-scrolled" : "",
    isHidden ? "is-hidden" : "",
    isOpen ? "is-menu-open" : "",
    isClosing ? "is-menu-closing" : "",
  ].filter(Boolean).join(" ");

  const glassClassName = [
    "site-header-glass",
    `nav-theme-${navTheme}`,
    isScrolled ? "is-scrolled" : "",
    isHidden ? "is-hidden" : "",
    isOpen ? "is-menu-open" : "",
    isClosing ? "is-menu-closing" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <div className={glassClassName} aria-hidden="true" />
      <header ref={headerRef} className={headerClassName}>
      <div className="header-actions">
        <a className="header-cta header-cta-muted" href="#preview">{labels.login}</a>
        <a className="header-cta header-cta-primary" href="#preview">{labels.start}</a>
        <button
          className="language-button"
          type="button"
          aria-label={labels.language}
          title={labels.language}
          onClick={onToggleLanguage}
        >
          <Translate size={24} weight="regular" aria-hidden="true" />
        </button>
      </div>

      <div className="header-leading">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={labels.navigation}>
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>

      <button
        type="button"
        className={`menu-button${isOpen ? " is-open" : ""}${isClosing ? " is-closing" : ""}`}
        aria-label={isOpen ? labels.closeMenu : labels.openMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          if (isOpen) closeMenu();
          else openMenu();
        }}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        id="mobile-navigation"
        className={`mobile-menu${isOpen ? " is-open" : ""}${isClosing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        onTransitionEnd={(event) => {
          if (
            event.target === event.currentTarget &&
            event.propertyName === "clip-path" &&
            !isOpen
          ) {
            setIsClosing(false);
          }
        }}
      >
        <div className="mobile-menu-inner">
          <nav aria-label={labels.mobileNavigation}>
            {navigation.map((item, index) => (
              <a
                key={item.label + "-mobile"}
                href={item.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a
              className="mobile-menu-secondary"
              href="#preview"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {labels.loginMobile}
            </a>
            <a
              className="mobile-menu-primary"
              href="#preview"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {labels.startMobile}
            </a>
            <button
              className="mobile-menu-language"
              type="button"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                onToggleLanguage();
                closeMenu();
              }}
            >
              <Translate size={20} weight="regular" aria-hidden="true" />
              <span>{labels.language}</span>
            </button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}