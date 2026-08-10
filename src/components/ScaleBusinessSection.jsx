const contentByLocale = {
  ar: {
    title: ["كبّـــــر نشاطك", "بدون ما يتشتت شغلـــــك."],
    description: [
      "أضف فروعك ومواقعك ومرافقك، ووزّع الخدمات عليها،",
      "وأدر الحجوزات من نفس الحساب بدون ما يتشتت فريقك.",
    ],
    features: [
      {
        title: "فروعك تحت حساب واحد",
        description: "أدر أكثر من منشأة، وخصص الخدمات والموارد المناسبة لكل موقع.",
        icon: "/assets/scale-business/building.svg",
      },
      {
        title: "فريقك يعرف دوره",
        description: "أضف أعضاء الفريق وحدد الصلاحيات التي يحتاجها كل شخص.",
        icon: "/assets/scale-business/user-cog.svg",
      },
      {
        title: "واجهة حجز باسمك",
        description: "خصص اللغة والمظهر والدومين وسياسات الحجز بما يناسب هوية نشاطك.",
        icon: "/assets/scale-business/monitor-smartphone.svg",
      },
    ],
  },
  en: {
    title: ["Grow your business", "without scattering your operations."],
    description: [
      "Add branches, locations, and facilities, then assign services to each one,",
      "and manage every booking from one account without fragmenting your team.",
    ],
    features: [
      {
        title: "Every branch under one account",
        description: "Manage multiple businesses and assign the right services and resources to each location.",
        icon: "/assets/scale-business/building.svg",
      },
      {
        title: "A team that knows its role",
        description: "Add team members and define exactly the permissions each person needs.",
        icon: "/assets/scale-business/user-cog.svg",
      },
      {
        title: "A booking page in your name",
        description: "Customize language, appearance, domain, and booking rules to match your brand.",
        icon: "/assets/scale-business/monitor-smartphone.svg",
      },
    ],
  },
};

const animatedMapLocations = [
  { x: 16.206, y: 16.095, delay: "-0.23s" },
  { x: 32.375, y: 22.027, delay: "-2.1275s" },
  { x: 68.586, y: 36.913, delay: "-4.025s" },
  { x: 24.276, y: 51.592, delay: "-5.9225s" },
  { x: 53.139, y: 57.453, delay: "-7.82s" },
  { x: 73.578, y: 69.297, delay: "-9.7175s" },
  { x: 48.037, y: 81.09, delay: "-11.615s" },
];

export function ScaleBusinessSection({ locale = "ar" }) {
  const content = contentByLocale[locale];
  const isArabic = locale === "ar";


  return (
    <section
      className="scale-business-section scale-business-reveal"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="scale-business-title"
    >
      <div className="scale-business-inner">
        <div className="scale-business-map-card" data-reveal="scale" aria-hidden="true">
          <div className="scale-business-map-visual">
            <img src="/assets/scale-business/saudi-map.png" alt="" decoding="async" />
            <div className="scale-business-map-locations">
              {animatedMapLocations.map((location, index) => (
                <span
                  key={index}
                  className="scale-business-map-location"
                  style={{
                    left: location.x + "%",
                    top: location.y + "%",
                    "--map-dot-delay": location.delay,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="scale-business-content">
          <header className="scale-business-header" data-reveal>
            <h2 id="scale-business-title">
              {content.title.map((line) => <span key={line}>{line}</span>)}
            </h2>
            <p>{content.description.map((line) => <span key={line}>{line}</span>)}</p>
          </header>

          <div className="scale-business-features">
            {content.features.map((feature, index) => (
              <article className="scale-business-feature" data-reveal style={{ "--scale-index": index }} key={feature.title}>
                <div className="scale-business-feature-heading">
                  <img src={feature.icon} alt="" aria-hidden="true" />
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}