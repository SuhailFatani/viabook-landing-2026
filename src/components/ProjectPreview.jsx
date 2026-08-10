export function ProjectPreview() {
  return (
    <div id="preview" className="product-preview" aria-label="Viabook product preview">
      <div className="browser-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="dashboard-media">
        <img
          src="/assets/hero-dashboard.png"
          alt="Viabook reservations dashboard showing an April 2026 daily booking calendar"
          width="1672"
          height="941"
        />
      </div>
    </div>
  );
}
