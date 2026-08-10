const contentByLocale = {
  ar: {
    title: "خلّ الحجـــــز أسهل عليك وعلى عميلــــك.",
    description: "أنشئ صفحة حجز لنشاطك، شاركها مع عملائك، وتابع كل شيء من لوحة Viabook.",
    cta: "ابــــدأ مجانا",
  },
  en: {
    title: "Make booking easier for you and your customers.",
    description:
      "Create a booking page for your business, share it with customers, and manage everything from your ViaBook dashboard.",
    cta: "Start for free",
  },
};

export function FinalCtaSection({ locale = "ar" }) {
  const content = contentByLocale[locale];
  const isArabic = locale === "ar";


  return (
    <section
      className="final-cta-section final-cta-reveal"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta-card" data-nav-theme="dark" data-reveal="scale">
        <div className="final-cta-gradient" aria-hidden="true">
          <div className="final-cta-gradient-rotator">
            <img src="/assets/final-cta/gradient.svg" alt="" />
          </div>
        </div>

        <div className="final-cta-copy" data-reveal>
          <div className="final-cta-heading">
            <h2 id="final-cta-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <a className="final-cta-button" href="#preview">
            {content.cta}
          </a>
        </div>

        <div className="final-cta-dashboard" data-reveal="fade" aria-hidden="true">
          <div className="final-cta-window-dots">
            <span />
            <span />
            <span />
          </div>
          <img src="/assets/final-cta/dashboard.png" alt="" />
        </div>
      </div>
    </section>
  );
}