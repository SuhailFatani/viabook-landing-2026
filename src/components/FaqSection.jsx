import { useState } from "react";

const contentByLocale = {
  ar: {
    title: "الأسئـــــلة الشائعة",
    description: "كل ما تحتاج معرفته عن قدرات ڤيابوك.",
    items: [
      {
        question: "ما هي منصة ڤيابوك ولمن صُممت؟",
        answer: "ڤيابوك هي منصة ذكية لإدارة الحجوزات مصممة للشركات والفرق بمختلف أحجامها. سواء كنت تدير مواعيد، تأجير مرافق، أو موارد، تساعدك ڤيابوك على أتمتة عملياتك بالكامل.",
      },
      {
        question: "كيف يعمل نظام الحجوزات بالذكاء الاصطناعي؟",
        answer: "يفهم ڤيابوك إعدادات خدماتك وأوقات فريقك وسعة مواردك، ثم يساعدك على تنظيم المواعيد واقتراح الأوقات المناسبة ومنع التعارضات، لتصبح إدارة الجدول أسرع وأقل اعتمادًا على المتابعة اليدوية.",
      },
      {
        question: "هل يمكنني ربط ڤيابوك مع أدواتي الحالية؟",
        answer: "نعم. يمكنك ربط ڤيابوك بالتقويمات وبوابات الدفع وأنظمتك الداخلية من خلال التكاملات وواجهات الربط، حتى تنتقل بيانات الحجوزات والعملاء بين أدواتك بدون إدخال متكرر.",
      },
      {
        question: "ما الذي يميز ڤيابوك عن غيرها؟",
        answer: "يجمع ڤيابوك الفروع والخدمات والموارد والعملاء والمدفوعات في منصة واحدة، مع تجربة حجز قابلة للتخصيص وأدوات ذكية تساعد فريقك على تشغيل العمل بوضوح والتوسع بدون تعقيد.",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    description: "Everything you need to know about ViaBook.",
    items: [
      {
        question: "What is ViaBook and who is it built for?",
        answer: "ViaBook is an intelligent booking platform for businesses and teams of every size. Whether you manage appointments, facility rentals, or shared resources, ViaBook helps automate your operation from one place.",
      },
      {
        question: "How does AI-powered booking work?",
        answer: "ViaBook understands your service rules, team availability, and resource capacity. It helps organize schedules, suggests suitable times, and prevents conflicts so your team spends less time on manual follow-up.",
      },
      {
        question: "Can I connect ViaBook to my current tools?",
        answer: "Yes. ViaBook can connect with calendars, payment gateways, and internal systems through integrations and APIs, keeping booking and customer data moving without repeated manual entry.",
      },
      {
        question: "What makes ViaBook different?",
        answer: "ViaBook brings branches, services, resources, customers, and payments into one platform, with a customizable booking experience and intelligent tools that help your team operate clearly and scale without added complexity.",
      },
    ],
  },
};

export function FaqSection({ locale = "ar" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const content = contentByLocale[locale];
  const isArabic = locale === "ar";


  return (
    <section
      className="faq-section faq-reveal"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="faq-title"
    >
      <div className="faq-inner">
        <header className="faq-header" data-reveal>
          <h2 id="faq-title">{content.title}</h2>
          <p>{content.description}</p>
        </header>

        <div className="faq-list">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${locale}-${index}`;
            const triggerId = `faq-trigger-${locale}-${index}`;

            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <div className="faq-item-motion" data-reveal>
                  <button
                    id={triggerId}
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <img className="faq-chevron" src="/assets/faq/chevron-down.svg" alt="" aria-hidden="true" />
                    <span>{item.question}</span>
                  </button>

                  <div
                    id={panelId}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}