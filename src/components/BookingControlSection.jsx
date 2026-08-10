import { useEffect, useRef } from "react";

const content = {
  ar: {
    title: ["ضبط الحجـــــز", "على طريقة شغلك."],
    description: [
      "ما يفرض عليك نموذجًا واحدًا. أنت تحدد كيف تُحجز خدمتك، وكم مدتها",
      "وأين تُقدّم، وما الذي يمكن إضافته عليها في مكان واحد.",
    ],
    left: [
      { title: "أضف اللي يحتاجه عميلك", description: "أتِح المعدات أو التسجيل أو أي خدمة إضافية أثناء الحجز.", icon: "circle-user", asset: "/assets/booking-control/circle-user.svg" },
      { title: "إضافات ترفع قيمة الحجز", description: "أتِح للعميل إضافة المعدات أو التسجيل أو أي خدمة إضافية أثناء الحجز.", icon: "package-plus", asset: "/assets/booking-control/package-plus.svg" },
    ],
    right: [
      { title: "خدماتك بشروطك", description: "حدد السعر والمدة ووقت التجهيز، ومتى يبدأ استقبال الحجوزات ومتى يتوقف.", icon: "timer", asset: "/assets/booking-control/timer.svg" },
      { title: "تحكم بالمرافق", description: "اربط كل خدمة بالمرافق المناسبة، وتحكم في عدد الحجوزات التي يمكن استقبالها في نفس الوقت.", icon: "shield-check", asset: "/assets/booking-control/shield-check.svg" },
    ],
  },
  en: {
    title: ["Bookings that fit", "the way you work."],
    description: [
      "No one-size-fits-all model. You decide how your service is booked, how long it lasts,",
      "where it is delivered, and which add-ons can be offered—all in one place.",
    ],
    left: [
      { title: "Add what customers need", description: "Offer equipment, registration, or any extra service during booking.", icon: "circle-user", asset: "/assets/booking-control/circle-user.svg" },
      { title: "Add-ons that grow value", description: "Let customers add equipment, registration, or any additional service while booking.", icon: "package-plus", asset: "/assets/booking-control/package-plus.svg" },
    ],
    right: [
      { title: "Your services, your rules", description: "Set the price, duration, preparation time, and when bookings open or close.", icon: "timer", asset: "/assets/booking-control/timer.svg" },
      { title: "Control facilities", description: "Connect each service to the right facilities and control simultaneous bookings.", icon: "shield-check", asset: "/assets/booking-control/shield-check.svg" },
    ],
  },
};

function Feature({ item }) {
  return (
    <article className="booking-control-feature" data-reveal>
      <div className="booking-control-feature-title">
        <h3>{item.title}</h3>
        <span className={`booking-control-icon booking-control-icon-${item.icon}`} aria-hidden="true">
          <img src={item.asset} alt="" />
        </span>
      </div>
      <p>{item.description}</p>
    </article>
  );
}

function FeatureColumn({ className, items }) {
  return (
    <div className={`booking-control-column ${className}`}>
      {items.map((item) => (
        <Feature item={item} key={item.title} />
      ))}
    </div>
  );
}

export function BookingControlSection({ locale }) {
  const sectionRef = useRef(null);
  const sectionContent = content[locale];
  const isArabic = locale === "ar";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="booking-control-section booking-control-reveal"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="booking-control-title"
    >
      <div className="booking-control-inner">
        <header className="booking-control-header" data-reveal>
          <h2 id="booking-control-title">
            {sectionContent.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>
            {sectionContent.description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </header>

        <div className="booking-control-stage">
          <FeatureColumn className="booking-control-column-left" items={sectionContent.left} />
          <figure className="booking-control-visual" data-reveal="scale" aria-hidden="true">
            <img src="/assets/booking-control/booking-cube.png" alt="" />
          </figure>
          <FeatureColumn className="booking-control-column-right" items={sectionContent.right} />
        </div>
      </div>
    </section>
  );
}