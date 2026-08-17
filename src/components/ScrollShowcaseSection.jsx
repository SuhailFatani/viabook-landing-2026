import { useEffect, useRef, useState } from "react";

const contentByLocale = {
  ar: {
    title: ["منصة واحـــــدة ", "تدير منها مشاريعـــــك."],
    description: [
      "التقويم يجمع حجوزاتك في مكان واحد، ويوضح لك وش المحجوز،",
      "وش المتاح، وأي مرفق أو موظف مرتبط بكل موعد.",
    ],
    modes: { mobile: "عرض الجوال", web: "عرض الويب" },
    quick: { title: "تحكم سريع بالحجز", description: "أنشئ الحجز أو عدّله، وتابع حالته من الطلب حتى الاكتمال أو الإلغاء." },
    bookings: { title: "كل الحجوزات قدامك", description: "شاهد اليوم أو الأسبوع أو الشهر، وفلتر الحجوزات حسب الفرع أو المرفق أو الحالة." },
  },
  en: {
    title: ["One platform", "to run your projects."],
    description: [
      "The calendar brings every booking together in one place, showing what is booked,",
      "what is available, and the resource or teammate connected to each appointment.",
    ],
    modes: { mobile: "Mobile view", web: "Web view" },
    quick: { title: "Quick booking control", description: "Create or edit a booking and follow it from the initial request through completion or cancellation." },
    bookings: { title: "Every booking in view", description: "View the day, week, or month and filter bookings by branch, resource, or status." },
  },
};

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const lerp = (start, end, progress) => start + (end - start) * progress;
const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);

export function ScrollShowcaseSection({ locale = "ar" }) {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(1);
  const [manualMode, setManualMode] = useState(null);
  const [activeFeature, setActiveFeature] = useState("bookings");
  const content = contentByLocale[locale];
  const displayMode = phase === 3 ? manualMode ?? "web" : "mobile";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

// --- 1. دالة update الكاملة ---
const update = () => {
  frame = 0;
  if (reducedMotion.matches) {
    section.style.setProperty("--showcase-scale", "1");
    section.style.setProperty("--showcase-inverse-scale", "1");
    setPhase(3);
    return;
  }

  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const progress = clamp((viewportHeight - rect.top) / (rect.height + viewportHeight));
  const compact = window.innerWidth <= 700;
  const shortStory = window.innerWidth <= 1000;
  const entryScale = compact ? 0.74 : 0.52;
  const focusScale = compact ? 0.94 : 0.72;

  // حساب حركة التمركز والتكبير
  const focus = easeOut((progress - 0.05) / 0.18);
  const morph = easeOut((progress - 0.22) / 0.18);

  const showcaseScale = lerp(lerp(entryScale, focusScale, focus), 1, morph);
  section.style.setProperty("--showcase-scale", showcaseScale.toFixed(4));
  section.style.setProperty("--showcase-inverse-scale", (1 / showcaseScale).toFixed(4));

  // حساب نقطة فك التثبيت تلقائياً بناءً على الـ DOM لضمان التوافق مع ارتفاع الـ CSS
  const unstickProgress = rect.height / (rect.height + viewportHeight);
  const phaseThreeEnd = unstickProgress - 0.03; // يكتمل الأنميشن 100% قبل الصعود مباشرة

  const phaseThreeStart = compact ? 0.38 : shortStory ? 0.38 : 0.35;
  const phaseTwoStart = compact ? 0.22 : shortStory ? 0.2 : 0.2;
  const nextPhase = progress >= phaseThreeStart ? 3 : progress >= phaseTwoStart ? 2 : 1;

  setPhase((current) => (current === nextPhase ? current : nextPhase));

  // حساب تقدم الأنميشن لشريط التعبئة وتمرير القيمة كـ Decimal (0 إلى 1)
  if (progress >= phaseThreeStart) {
    const p3Progress = clamp((progress - phaseThreeStart) / (phaseThreeEnd - phaseThreeStart));

    const bookingsProg = clamp(p3Progress / 0.5);
    const quickProg = clamp((p3Progress - 0.5) / 0.5);

    section.style.setProperty("--progress-bookings", bookingsProg.toFixed(3));
    section.style.setProperty("--progress-quick", quickProg.toFixed(3));

    setActiveFeature(p3Progress >= 0.5 ? "quick" : "bookings");
  } else {
    section.style.setProperty("--progress-bookings", "0");
    section.style.setProperty("--progress-quick", "0");
  }
};

    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener?.("change", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener?.("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (phase !== 3) {
      setManualMode(null);
      setActiveFeature("bookings");
    }
  }, [phase]);

  // useEffect(() => {
  //   if (phase !== 3) return undefined;
  //   const timer = window.setInterval(() => setActiveFeature((current) => current === "bookings" ? "quick" : "bookings"), 7935);
  //   return () => window.clearInterval(timer);
  // }, [phase]);

// --- 2. دالة feature الكاملة ---
const feature = (key, icon, item) => (
  <button
    type="button"
    className={"scroll-showcase-feature scroll-showcase-feature-" + key + (activeFeature === key ? " is-active" : "")}
    disabled={phase !== 3}
    onClick={() => setActiveFeature(key)}
  >
    <span className="scroll-showcase-feature-track" aria-hidden="true">
      <span 
        style={{
          width: "100%",
          transform: `scaleX(${key === "bookings" ? "var(--progress-bookings, 0)" : "var(--progress-quick, 0)"})`,
          transformOrigin: locale === "ar" ? "right" : "left", // ضبط اتجاه بداية التعبئة حسب اللغة
          willChange: "transform",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
        }} 
      />
    </span>
    <span className="scroll-showcase-feature-copy">
      <strong>{item.title}<img src={icon} alt="" aria-hidden="true" /></strong>
      <span>{item.description}</span>
    </span>
  </button>
);

  return (
    <section ref={sectionRef} className="scroll-showcase-section" data-phase={phase} data-mode={displayMode} aria-labelledby="scroll-showcase-title">
      <div className="scroll-showcase-sticky">
        <div className="scroll-showcase-copy">
          <p>{content.description.map((line) => <span key={line}>{line}</span>)}</p>
          <h2 id="scroll-showcase-title">{content.title.map((line) => <span key={line}>{line}</span>)}</h2>
        </div>

        <div className="scroll-showcase-card">
          <img className="scroll-showcase-mobile-reference" src="/assets/scroll-showcase/figma/mobile-reference.png" alt={locale === "ar" ? "واجهة حجوزات فيابوك على الجوال" : "ViaBook mobile reservations view"} />
          <div className="scroll-showcase-web-reference" aria-hidden={displayMode !== "web"}>
            <img className="scroll-showcase-gradient-asset" src="/assets/scroll-showcase/figma/gradient.svg" alt="" />
            <div className="scroll-showcase-browser-frame">
              <div className="scroll-showcase-browser-dots" aria-hidden="true"><i /><i /><i /></div>
              <img className="scroll-showcase-dashboard-asset" src="/assets/scroll-showcase/figma/dashboard.png" alt={locale === "ar" ? "لوحة حجوزات فيابوك على الويب" : "ViaBook web reservations dashboard"} />
            </div>
            <img className="scroll-showcase-cursor" src="/assets/scroll-showcase/figma/cursor.svg" alt="" />
          </div>

          <div className="scroll-showcase-mode-toggle" aria-label={locale === "ar" ? "اختيار نوع العرض" : "Choose preview type"}>
            <button type="button" disabled={phase !== 3} aria-label={content.modes.web} aria-pressed={displayMode === "web"} onClick={() => setManualMode("web")}><img src="/assets/scroll-showcase/figma/web.svg" alt="" /></button>
            <button type="button" disabled={phase !== 3} aria-label={content.modes.mobile} aria-pressed={displayMode === "mobile"} onClick={() => setManualMode("mobile")}><img src="/assets/scroll-showcase/figma/mobile.svg" alt="" /></button>
          </div>
        </div>

        <div className="scroll-showcase-features">
          {feature("quick", "/assets/scroll-showcase/figma/quick-booking.svg", content.quick)}
          <span className="scroll-showcase-feature-divider" aria-hidden="true" />
          {feature("bookings", "/assets/scroll-showcase/figma/calendars.svg", content.bookings)}
        </div>
      </div>
    </section>
  );
}