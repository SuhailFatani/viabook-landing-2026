import { useEffect, useState } from "react";
import { CaretDown, CheckCircle } from "@phosphor-icons/react";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

const companies = [
  { name: "Dell", src: "/assets/company-logos/dell.svg" },
  { name: "Zendesk", src: "/assets/company-logos/zendesk.svg" },
  { name: "Rakuten", src: "/assets/company-logos/rakuten.svg" },
  { name: "Pacific Funds", src: "/assets/company-logos/pacific-funds.svg" },
  { name: "NCR", src: "/assets/company-logos/ncr.svg" },
  { name: "Lattice", src: "/assets/company-logos/lattice-wordmark.svg" },
  { name: "TED", src: "/assets/company-logos/ted.svg" },
];

const contentByLocale = {
  ar: {
    eyebrow: "الخطط",
    title: "الأسعار",
    description: "ابدأ مجانًا، وطوّر خطتك في أي وقت.",
    trustedBy: "موثوق به من فرق تنمو حول العالم",
    cta: "ابدأ مجانًا",
    month: "شهريًا",
    plans: [
      {
        name: "المجانية",
        audience: "للأفراد",
        price: "$0",
        features: [
          "استخدام نطاق مخصص",
          "خيارات متقدمة للهوية",
          "تحسينات نماذج الذكاء الاصطناعي",
        ],
      },
      {
        name: "الاحترافية",
        audience: "للأنشطة المتنامية",
        price: "$122",
        featureLabel: "كل مزايا الخطة المجانية، بالإضافة إلى:",
        features: [
          "بحث مدعوم بالذكاء الاصطناعي",
          "استخدام نطاق مخصص",
          "خيارات متقدمة للهوية",
          "تحسينات نماذج الذكاء الاصطناعي",
          "تقنيات ضغط البيانات",
        ],
      },
      {
        name: "المؤسسات",
        audience: "للفرق الكبيرة",
        price: "مخصصة",
        featureLabel: "كل مزايا الخطة الاحترافية، بالإضافة إلى:",
        featured: true,
        features: [
          "بحث مدعوم بالذكاء الاصطناعي",
          "استخدام نطاق مخصص",
          "خيارات متقدمة للهوية",
          "تحسينات نماذج الذكاء الاصطناعي",
          "تطبيقات التعلم بالنقل",
          "معالجة الصور تلقائيًا",
          "نماذج توليدية متقدمة",
          "مقاييس أداء مخصصة",
        ],
      },
    ],
    titleMeta: "الأسعار | ViaBook",
    descriptionMeta: "اختر خطة ViaBook المناسبة لنشاطك وابدأ مجانًا.",
  },
  en: {
    eyebrow: "Plans",
    title: "Pricing",
    description: "Start for free, upgrade anytime.",
    trustedBy: "Trusted by teams growing around the world",
    cta: "Start for free",
    month: "month",
    plans: [
      {
        name: "Free",
        audience: "For individuals",
        price: "$0",
        features: [
          "Use a custom domain",
          "Advanced branding options",
          "LLM optimizations",
        ],
      },
      {
        name: "Premium",
        audience: "For growing businesses",
        price: "$122",
        featureLabel: "All Free features plus:",
        features: [
          "AI search",
          "Use a custom domain",
          "Advanced branding options",
          "LLM optimizations",
          "Data compression techniques",
        ],
      },
      {
        name: "Enterprise",
        audience: "For global teams",
        price: "Custom",
        featureLabel: "All Premium features plus:",
        featured: true,
        features: [
          "AI search",
          "Use a custom domain",
          "Advanced branding options",
          "LLM optimizations",
          "Transfer learning applications",
          "Image rotation and flipping",
          "Generative adversarial networks",
          "Evaluation metrics for performance",
        ],
      },
    ],
    titleMeta: "Pricing | ViaBook",
    descriptionMeta: "Choose the ViaBook plan that fits your business and start for free.",
  },
};

const pricingSectionsByLocale = {
  ar: {
    compareTitle: "مقارنة الخطط",
    planPrices: [
      { price: "$0", suffix: "شهريًا" },
      { price: "$122", suffix: "شهريًا" },
      { price: "مخصص$", suffix: "" },
    ],
    groups: [
      {
        title: "الميزات",
        rows: [
          { label: "استخدام نطاق مخصص", values: [true, true, true] },
          { label: "البحث بالذكاء الاصطناعي", values: [true, true, true] },
          { label: "المستخدمين", values: ["1", "$12 لكل مستخدم/شهريا", "-"] },
        ],
      },
      {
        title: "الميزات",
        rows: [
          { label: "استخدام نطاق مخصص", values: [true, true, true] },
          { label: "البحث بالذكاء الاصطناعي", values: [true, true, true] },
          { label: "المستخدمين", values: ["1", "-", "مخصص"] },
        ],
      },
      {
        title: "الميزات",
        rows: [
          { label: "استخدام نطاق مخصص", values: [true, true, true] },
          { label: "البحث بالذكاء الاصطناعي", values: [true, true, true] },
          { label: "المستخدمين", values: ["-", "$12 لكل مستخدم/شهريا", "-"] },
        ],
      },
      {
        title: "الدعم",
        rows: [
          { label: "استخدام نطاق مخصص", values: [true, true, true] },
          { label: "البحث بالذكاء الاصطناعي", values: [true, true, true] },
          { label: "المستخدمين", values: ["1", "-", "مخصص"] },
        ],
      },
    ],
    faqEyebrow: "الأسئلة الشائعة",
    faqTitle: "كل ما تحتاج معرفته عن خطط ڤيابوك.",
    faqs: [
      {
        question: "هل أقدر أبدأ بالخطة المجانية؟",
        answer: "نعم. تقدر تبدأ مجانًا وتجهز صفحة الحجز وتستقبل حجوزاتك، ثم تنتقل إلى الخطة المناسبة عندما يكبر نشاطك.",
      },
      {
        question: "هل أقدر أغيّر خطتي لاحقًا؟",
        answer: "أكيد. تستطيع الترقية أو تغيير الخطة في أي وقت، وتبقى بياناتك وحجوزاتك محفوظة بدون ما تبدأ من جديد.",
      },
      {
        question: "هل الأسعار تشمل أعضاء الفريق؟",
        answer: "الخطة المجانية تشمل مستخدمًا واحدًا، بينما تختلف حدود أعضاء الفريق حسب الخطة. تفاصيل المؤسسات تُحدد حسب احتياج الفريق.",
      },
      {
        question: "كيف أعرف أن خطة المؤسسات مناسبة لي؟",
        answer: "إذا عندك عدة فروع أو فرق كبيرة أو تحتاج صلاحيات وتكاملات ودعمًا مخصصًا، تواصل معنا ونبني لك عرضًا مناسبًا.",
      },
    ],
  },
  en: {
    compareTitle: "Compare plans",
    planPrices: [
      { price: "$0", suffix: "Month" },
      { price: "$122", suffix: "Month" },
      { price: "$Custom", suffix: "" },
    ],
    groups: [
      {
        title: "Features",
        rows: [
          { label: "Use a custom domain", values: [true, true, true] },
          { label: "LLM-optimizations", values: [true, true, true] },
          { label: "Users", values: ["1", "$12 per user/month", "Custom"] },
        ],
      },
      {
        title: "AI features",
        rows: [
          { label: "Use a custom domain", values: [true, true, true] },
          { label: "LLM-optimizations", values: [false, false, true] },
          { label: "Users", values: ["1", "$12 per user/month", "Custom"] },
        ],
      },
      {
        title: "Support",
        rows: [
          { label: "Use a custom domain", values: [true, true, true] },
          { label: "LLM-optimizations", values: [false, false, true] },
          { label: "Users", values: ["1", "$12 per user/month", "Custom"] },
        ],
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Everything you need to know about ViaBook plans.",
    faqs: [
      {
        question: "Can I start on the Free plan?",
        answer: "Yes. Launch your booking page and start accepting bookings for free, then upgrade when your business needs more.",
      },
      {
        question: "Can I change my plan later?",
        answer: "Absolutely. Upgrade or change your plan at any time without losing your bookings, customers, or setup.",
      },
      {
        question: "Are team members included?",
        answer: "The Free plan includes one user. Team limits vary by plan, while Enterprise access is tailored to your organization.",
      },
      {
        question: "When should I choose Enterprise?",
        answer: "Enterprise is designed for multi-location operations, larger teams, custom integrations, and dedicated support.",
      },
    ],
  },
};
function PricingCard({ plan, content, index }) {
  const hasMonthlyPrice = plan.price !== "Custom" && plan.price !== "مخصصة";

  return (
    <article
      className={`pricing-card${plan.featured ? " is-featured" : ""}`}
      style={{ "--pricing-card-delay": `${180 + index * 90}ms` }}
    >
      <div className="pricing-card-content">
        <header className="pricing-card-header">
          <div>
            <h2>{plan.name}</h2>
            <p>{plan.audience}</p>
          </div>
          <div className="pricing-card-price">
            <strong>{plan.price}</strong>
            {hasMonthlyPrice ? <span>{content.month}</span> : null}
          </div>
        </header>

        <div className="pricing-card-features">
          {plan.featureLabel ? <h3>{plan.featureLabel}</h3> : null}
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <CheckCircle size={20} weight="regular" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a className="pricing-card-cta" href="#pricing-plans">
        {content.cta}
      </a>
    </article>
  );
}

function ComparisonValue({ value, includedLabel, excludedLabel }) {
  if (value === true) {
    return (
      <img
        className="pricing-check-icon"
        src="/assets/pricing/circle-check.svg"
        alt=""
        aria-label={includedLabel}
      />
    );
  }

  if (value === false) {
    return <span aria-label={excludedLabel}>-</span>;
  }

  return <span>{value}</span>;
}

function PricingComparison({ content, sections, selectedPlan, onSelectPlan, isStuck }) {
  const includedLabel = content === contentByLocale.ar ? "متاح" : "Included";
  const excludedLabel = content === contentByLocale.ar ? "غير متاح" : "Not included";

  return (
    <section
      id="pricing-comparison"
      className={`pricing-comparison${isStuck ? " is-stuck" : ""}`}
      data-nav-theme="light"
      aria-labelledby="pricing-comparison-title"
    >
      <div className="pricing-comparison-inner">
        <div className="pricing-compare-sentinel" aria-hidden="true" />

        <div className="pricing-compare-header">
          <div className="pricing-compare-heading-cell">
            <h2 id="pricing-comparison-title">{sections.compareTitle}</h2>
          </div>

          <div className="pricing-desktop-plan-headings" aria-hidden="true">
            {content.plans.map((plan, index) => (
              <div className={plan.featured ? "is-featured" : ""} key={plan.name}>
                <strong>{plan.name}</strong>
                <div className="pricing-plan-price">
                  <span>{sections.planPrices[index].price}</span>
                  {sections.planPrices[index].suffix ? (
                    <small>{sections.planPrices[index].suffix}</small>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-mobile-plan-picker">
            <div role="tablist" aria-label={sections.compareTitle}>
              {content.plans.map((plan, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedPlan === index}
                  className={selectedPlan === index ? "is-active" : ""}
                  onClick={() => onSelectPlan(index)}
                  key={plan.name}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pricing-compare-groups">
          {sections.groups.map((group, groupIndex) => (
            <section className="pricing-compare-group" data-reveal key={`${group.title}-${groupIndex}`}>
              <h3>{group.title}</h3>
              <div className="pricing-compare-rows" role="table" aria-label={group.title}>
                {group.rows.map((row) => (
                  <div className="pricing-compare-row" role="row" key={row.label}>
                    <span className="pricing-feature-name" role="rowheader">
                      {row.label}
                    </span>
                    {row.values.map((value, index) => (
                      <span
                        className={`pricing-value pricing-plan-${index}${selectedPlan === index ? " is-mobile-active" : ""}`}
                        role="cell"
                        key={`${row.label}-${content.plans[index].name}`}
                      >
                        <ComparisonValue
                          value={value}
                          includedLabel={includedLabel}
                          excludedLabel={excludedLabel}
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingFaq({ sections, openIndex, onToggle }) {
  return (
    <section
      className="pricing-faq"
      data-nav-theme="light"
      aria-labelledby="pricing-faq-title"
    >
      <header className="pricing-faq-header" data-reveal>
        <p>{sections.faqEyebrow}</p>
        <h2 id="pricing-faq-title">{sections.faqTitle}</h2>
      </header>

      <div className="pricing-faq-list" data-reveal>
        {sections.faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `pricing-faq-answer-${index}`;

          return (
            <article className={`pricing-faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => onToggle(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <CaretDown size={24} weight="regular" aria-hidden="true" />
              </button>
              <div id={answerId} className="pricing-faq-answer" aria-hidden={!isOpen}>
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export function PricingPage() {
  const [locale, setLocale] = useState("ar");
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isComparisonStuck, setIsComparisonStuck] = useState(false);
  const content = contentByLocale[locale];
  const sections = pricingSectionsByLocale[locale];
  const isArabic = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = content.titleMeta;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.descriptionMeta);
  }, [content.descriptionMeta, content.titleMeta, isArabic, locale]);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".pricing-page [data-reveal]"));
    const footer = document.querySelector(".pricing-page .footer-reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
      footer?.classList.add("is-visible");
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          footerObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.05 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    if (footer) footerObserver.observe(footer);

    return () => {
      revealObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [locale]);

  useEffect(() => {
    let frameId = null;

    const updateStickyState = () => {
      const sentinel = document.querySelector(".pricing-compare-sentinel");
      const comparison = document.querySelector(".pricing-comparison");
      const stickyHeader = document.querySelector(".pricing-compare-header");
      if (!sentinel || !comparison || !stickyHeader) return;

      const topOffset = window.innerWidth <= 1200 ? 64 : 72;
      const comparisonRect = comparison.getBoundingClientRect();
      const shouldStick =
        sentinel.getBoundingClientRect().top <= topOffset &&
        comparisonRect.bottom > topOffset + stickyHeader.offsetHeight;
      setIsComparisonStuck((current) => (current === shouldStick ? current : shouldStick));
    };

    const onViewportChange = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateStickyState();
      });
    };

    updateStickyState();
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const toggleLanguage = () => {
    setLocale((currentLocale) => (currentLocale === "ar" ? "en" : "ar"));
    setSelectedPlan(1);
    setOpenFaqIndex(0);
  };

  return (
    <main id="top" className="pricing-page" dir={isArabic ? "rtl" : "ltr"}>
      <Header
        key={`pricing-header-${locale}`}
        locale={locale}
        onToggleLanguage={toggleLanguage}
      />

      <section
        className="pricing-hero-section"
        data-nav-theme="light"
        aria-labelledby="pricing-title"
      >
        <div className="site-header-spacer" aria-hidden="true" />

        <header key={`pricing-intro-${locale}`} className="pricing-intro">
          <p className="pricing-eyebrow">{content.eyebrow}</p>
          <div>
            <h1 id="pricing-title">{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </header>

        <div id="pricing-plans" className="pricing-cards" key={`pricing-cards-${locale}`}>
          {content.plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              content={content}
              index={index}
            />
          ))}
        </div>

        <div className="pricing-trust" aria-label={content.trustedBy}>
          <p>{content.trustedBy}</p>
          <div className="pricing-company-logos">
            {companies.map((company) => (
              <img src={company.src} alt={company.name} key={company.name} />
            ))}
          </div>
        </div>
      </section>

      <PricingComparison
        key={`pricing-comparison-${locale}`}
        content={content}
        sections={sections}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        isStuck={isComparisonStuck}
      />

      <PricingFaq
        key={`pricing-faq-${locale}`}
        sections={sections}
        openIndex={openFaqIndex}
        onToggle={setOpenFaqIndex}
      />

      <Footer locale={locale} page="pricing" />
    </main>
  );
}
