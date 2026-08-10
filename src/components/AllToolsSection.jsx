const contentByLocale = {
  ar: {
    title: ["كل أداة تحتاجها،", "في مكـــــانها."],
    description: [
      "تابع الحجوزات والإيرادات والعملاء والمدفوعات من نفس المكان،",
      "وخذ قراراتك على صورة واضحة بدل جداول متفرقة.",
    ],
    cards: {
      analytics: { title: "أرقام تساعدك تفهم نشاطك", description: "شاهد حركة الحجوزات والإيرادات والعملاء الجدد ومعدلات الإتمام، وقارن أداء نشاطك من فترة إلى أخرى." },
      payments: { title: "مدفوعات سريعة وآمنـــــة", description: "تابع إجمالي العمليات والرسوم وصافي الإيرادات، واعرف حالة كل عملية والتفاصيل المرتبطة بها." },
      customers: { title: "عملاؤك، وكل حجوزاتهم", description: "احتفظ ببيانات العملاء وملاحظاتهم وسجل حجوزاتهم، وارجع لها وقت ما تحتاج." },
      ai: { title: "صمم باستخدام الذكـــــاء الاصطناعي", description: "أرفق مستندات المراسلة ولقطات الشاشة وإصدارات وكيل ڤيابوك لإضفاء الحيوية على منتجك." },
    },
  },
  en: {
    title: ["Every tool you need,", "all in one place."],
    description: [
      "Track bookings, revenue, customers, and payments from one place,",
      "then make clear decisions without scattered spreadsheets.",
    ],
    cards: {
      analytics: { title: "Numbers that explain your business", description: "See booking activity, revenue, new customers, and completion rates, then compare performance over time." },
      payments: { title: "Fast, secure payments", description: "Track transactions, fees, net revenue, and every payment status with its related details." },
      customers: { title: "Your customers and every booking", description: "Keep customer details, notes, and booking history together, ready whenever you need them." },
      ai: { title: "Build with artificial intelligence", description: "Attach correspondence, screenshots, and ViaBook agent outputs to bring your product to life." },
    },
  },
};

const cardAssets = {
  payments: "/assets/all-tools/payments.png",
  analytics: "/assets/all-tools/analytics.png",
  customers: "/assets/all-tools/customers.png",
  ai: "/assets/all-tools/ai-create-3x.png",
};

function ToolCard({ cardKey, content, index }) {
  return (
    <article className={"all-tools-card all-tools-card-" + cardKey} data-reveal style={{ "--tool-index": index }}>
      <div className="all-tools-card-visual" aria-hidden="true">
        <img className="all-tools-card-render" src={cardAssets[cardKey]} alt="" decoding="async" />
      </div>
      <div className="all-tools-card-copy">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    </article>
  );
}

export function AllToolsSection({ locale = "ar" }) {
  const content = contentByLocale[locale];


  return (
    <section className="all-tools-section all-tools-reveal" dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby="all-tools-title">
      <div className="all-tools-inner">
        <header className="all-tools-header" data-reveal>
          <h2 id="all-tools-title">{content.title.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{content.description.map((line) => <span key={line}>{line}</span>)}</p>
        </header>

        <div className="all-tools-grid">
          <ToolCard cardKey="payments" content={content.cards.payments} index={0} />
          <ToolCard cardKey="analytics" content={content.cards.analytics} index={1} />
          <ToolCard cardKey="customers" content={content.cards.customers} index={2} />
          <ToolCard cardKey="ai" content={content.cards.ai} index={3} />
        </div>
      </div>
    </section>
  );
}