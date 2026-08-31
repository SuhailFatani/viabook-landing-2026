export function Logo({ locale }) {
  const label = locale === "ar" ? "العودة إلى بداية ViaBook" : "Viabook home";

  return (
    <a href="/" className="brand-logo" aria-label={label}>
      <img
        className="brand-logo-image"
        src="/assets/viabook-logo.svg"
        alt=""
        width="123"
        height="26"
      />
    </a>
  );
}