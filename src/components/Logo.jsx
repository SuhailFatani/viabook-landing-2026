export function Logo({ locale }) {
  const label = locale === "ar" ? "العودة إلى بداية ViaBook" : "Viabook home";

  return (
    <a href="#top" className="brand-logo" aria-label={label}>
      <img
        className="brand-mark"
        src="/assets/footer/logo-mark.svg"
        alt=""
        width="35"
        height="26"
      />
      <span className="brand-wordmark">viabook</span>
    </a>
  );
}