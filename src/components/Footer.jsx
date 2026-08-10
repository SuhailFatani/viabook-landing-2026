const contentByLocale = {
  ar: {
    homeLabel: "العودة إلى بداية ViaBook",
    socialLabel: "روابط التواصل",
    navigationLabel: "روابط الفوتر",
    columns: [
      {
        heading: "استكشف",
        links: [
          { label: "المميزات", href: "#why-viabook-title" },
          { label: "كل الأدوات", href: "#all-tools-title" },
        ],
      },
      {
        heading: "المساعدة",
        links: [
          { label: "الأسئلة الشائعة", href: "#faq-title" },
          { label: "تواصل معنا", href: "mailto:hello@viabook.sa" },
        ],
      },
    ],
    legal: [
      { label: "© 2026 ViaBook", href: null },
      { label: "سياسة الخصوصية", href: "/privacy" },
      { label: "شروط الخدمة", href: "/terms" },
    ],
    xLabel: "ViaBook على X",
    mailLabel: "مراسلة ViaBook",
  },
  en: {
    homeLabel: "ViaBook home",
    socialLabel: "Social links",
    navigationLabel: "Footer navigation",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "Features", href: "#why-viabook-title" },
          { label: "All tools", href: "#all-tools-title" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "FAQ", href: "#faq-title" },
          { label: "Contact us", href: "mailto:hello@viabook.sa" },
        ],
      },
    ],
    legal: [
      { label: "© 2026 ViaBook", href: null },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
    xLabel: "ViaBook on X",
    mailLabel: "Email ViaBook",
  },
};

export function Footer({ locale = "ar" }) {
  const content = contentByLocale[locale];
  const isArabic = locale === "ar";


  return (
    <footer
      id="footer"
      className="site-footer footer-reveal"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="footer-inner">
        <div className="footer-top">
          <nav className="footer-columns" data-reveal aria-label={content.navigationLabel}>
            {content.columns.map((column, index) => (
              <div className="footer-column" key={column.heading}>
                <h2>{column.heading}</h2>
                {column.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
                {index === 0 ? <span className="footer-column-divider" aria-hidden="true" /> : null}
              </div>
            ))}
          </nav>

          <a className="footer-brand" data-reveal href="#top" aria-label={content.homeLabel}>
            <img src="/assets/footer/logo-mark.svg" alt="" width="35" height="26" />
            <span>viabook</span>
          </a>
        </div>

        <div className="footer-bottom">
          <div
            className="footer-social"
            data-reveal
            data-reveal-page-end
            aria-label={content.socialLabel}
          >
            <a href="https://x.com/viabook" target="_blank" rel="noreferrer" aria-label={content.xLabel}>
              <img src="/assets/footer/x.svg" alt="" />
            </a>
            <a href="mailto:hello@viabook.sa" aria-label={content.mailLabel}>
              <img src="/assets/footer/mail.svg" alt="" />
            </a>
          </div>

          <div className="footer-legal" data-reveal data-reveal-page-end>
            {content.legal.map((item) =>
              item.href ? (
                <a href={item.href} key={item.label}>
                  <img src="/assets/footer/arrow-up-right.svg" alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className="footer-copyright" key={item.label}>{item.label}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}