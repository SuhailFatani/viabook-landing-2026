const contentByLocale = {
  ar: {
    title: "ليش فيابـــــوك؟",
    description: [
      "فيابـــــوك يعطيك كل الأدوات اللي تحتاجها لتسهيل عملياتك اليومية وتلبية احتياجات عملك بالكامل.",
      "مصمم ليوفر تجربة سلسة ومتكاملة، يجعل إدارة حجوزاتك سهلة.",
    ],
    features: [
      {
        title: "فواتير جاهزة",
        description: "أصدر فواتير احترافية متوافقة تماماً مع أنظمة هيئة الزكاة والضريبة والجمارك.",
        icon: "/assets/why-viabook/receipt.svg",
      },
      {
        title: "تقارير وتحليلات متقدمة",
        description: "تقارير مبيعات الحجوزات والإشتراكات و تقارير العملاء والإيرادات وغيرها",
        icon: "/assets/why-viabook/reports.svg",
      },
      {
        title: "إدارة العملاء",
        description: "اعرف احتياجات عملائك من خلال تتبع تفاعلاتهم مع الخدمة.",
        icon: "/assets/why-viabook/users.svg",
      },
      {
        title: "أرقام تساعدك تفهم نشاطـــــك",
        description: "تابع أداء الحجوزات والإيرادات، واعرف الصورة العامة بدون جداول متفرقة.",
        icon: "/assets/why-viabook/rocket.svg",
      },
    ],
  },
  en: {
    title: "Why ViaBook?",
    description: [
      "ViaBook gives you every tool you need to simplify daily operations and support your business.",
      "A smooth, connected experience that makes managing bookings effortless.",
    ],
    features: [
      {
        title: "Ready-to-use invoices",
        description: "Issue professional invoices that meet local tax and customs requirements.",
        icon: "/assets/why-viabook/receipt.svg",
      },
      {
        title: "Advanced reports and analytics",
        description: "Track booking sales, subscriptions, customers, revenue, and more.",
        icon: "/assets/why-viabook/reports.svg",
      },
      {
        title: "Customer management",
        description: "Understand customer needs by following every interaction with your service.",
        icon: "/assets/why-viabook/users.svg",
      },
      {
        title: "Numbers that explain your business",
        description: "See booking and revenue performance clearly without scattered spreadsheets.",
        icon: "/assets/why-viabook/rocket.svg",
      },
    ],
  },
};

export function WhyViabookSection({ locale = "ar" }) {
  const content = contentByLocale[locale];
  const isArabic = locale === "ar";


  return (
    <section
      className="why-viabook-section why-viabook-reveal"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="why-viabook-title"
    >
      <div className="why-viabook-inner">
        <header className="why-viabook-header" data-reveal>
          <h2 id="why-viabook-title">{content.title}</h2>
          <p>
            {content.description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </header>

        <div className="why-viabook-grid">
          {content.features.map((feature, index) => (
            <article className="why-viabook-card" data-reveal style={{ "--feature-index": index }} key={feature.title}>
              <img src={feature.icon} alt="" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}