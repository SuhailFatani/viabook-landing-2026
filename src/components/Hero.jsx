import { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { ProjectPreview } from "./ProjectPreview.jsx";
import { CompaniesMarquee } from "./CompaniesMarquee.jsx";
import { BookingControlSection } from "./BookingControlSection.jsx";
import { ScrollShowcaseSection } from "./ScrollShowcaseSection.jsx";
import { WhyViabookSection } from "./WhyViabookSection.jsx";
import { AllToolsSection } from "./AllToolsSection.jsx";
import { ScaleBusinessSection } from "./ScaleBusinessSection.jsx";
import { FaqSection } from "./FaqSection.jsx";
import { FinalCtaSection } from "./FinalCtaSection.jsx";
import { Footer } from "./Footer.jsx";

const heroContent = {
  ar: {
    badge: "اطلاق تجريبي",
    title: ["استقبل حجوزاتـــــك", "بدون ما تتابـــــع كل خطوة."],
    description: [
      "فيابـــــوك ينظّم الحجز ويقلل التعارضات.",
      "ومع قدرات الذكاء الاصطناعي اللي نطوّرها، يصير الإعداد والمتابعة اليومية أسرع وأخف على فريقك.",
    ],
    cta: "ابدأ مجانا",
    titleMeta: "ViaBook — استقبل حجوزاتك بدون متابعة كل خطوة",
    descriptionMeta:
      "فيابوك ينظّم الحجوزات ويقلل التعارضات ويجمع تشغيل نشاطك في مكان واحد.",
  },
  en: {
    badge: "Booking Infrastructure",
    badgeLabel: "New",
    title: ["Booking Infrastructure for", "Growing Platforms"],
    description: [
      "Let AI handle the complexity. From initial setup to dynamic daily scheduling,",
      "empower your business with an intelligent engine that scales with you.",
    ],
    cta: "Start for free",
    titleMeta: "ViaBook — Booking infrastructure for growing platforms",
    descriptionMeta:
      "ViaBook helps growing platforms manage setup, daily scheduling, bookings, and operations.",
  },
};

export function Hero() {
  const [locale, setLocale] = useState("ar");
  const content = heroContent[locale];
  const isArabic = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = content.titleMeta;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", content.descriptionMeta);
  }, [content.descriptionMeta, content.titleMeta, isArabic, locale]);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const pageEndRevealItems = revealItems.filter((item) =>
      item.hasAttribute("data-reveal-page-end"),
    );
    const standardRevealItems = revealItems.filter(
      (item) => !item.hasAttribute("data-reveal-page-end"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );

    const pageEndObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          pageEndObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.01 },
    );

    standardRevealItems.forEach((item) => {
      if (!item.classList.contains("is-revealed")) observer.observe(item);
    });

    pageEndRevealItems.forEach((item) => {
      if (!item.classList.contains("is-revealed")) pageEndObserver.observe(item);
    });

    return () => {
      observer.disconnect();
      pageEndObserver.disconnect();
    };
  }, [locale]);

  return (
    <main id="top" className="page-shell" dir={isArabic ? "rtl" : "ltr"}>
      <Header
        key={"header-" + locale}
        locale={locale}
        onToggleLanguage={() =>
          setLocale((currentLocale) => (currentLocale === "ar" ? "en" : "ar"))
        }
      />
      <section className="hero-panel" data-nav-theme="dark" aria-labelledby="hero-title">
        <div className="hero-gradient" aria-hidden="true">
          <img src="/assets/hero-gradient.svg" alt="" />
        </div>


        <div className="site-header-spacer" aria-hidden="true" />

        <div key={"hero-" + locale} className="hero-main">
          <div className="hero-intro">
            <div
              className={
                "announcement-pill motion-enter motion-delay-badge" +
                (isArabic ? "" : " announcement-pill-english")
              }
            >
              {content.badgeLabel ? <span>{content.badgeLabel}</span> : null}
              <p>{content.badge}</p>
            </div>

            <div className="hero-copy motion-enter motion-delay-copy">
              <h1 id="hero-title">
                {content.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p>
                {content.description.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>

            <a className="primary-cta motion-enter motion-delay-cta" href="#preview">
              {content.cta}
            </a>
          </div>

          <div className="preview-reveal motion-enter motion-delay-preview">
            <ProjectPreview />
          </div>
        </div>
      </section>
      <CompaniesMarquee locale={locale} />
      <BookingControlSection locale={locale} />
      <ScrollShowcaseSection locale={locale} />
      <WhyViabookSection locale={locale} />
      <AllToolsSection locale={locale} />
      <ScaleBusinessSection locale={locale} />
      <FaqSection locale={locale} />
      <FinalCtaSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}