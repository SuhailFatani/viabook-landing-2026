const companies = [
  { name: "Dell", src: "/assets/company-logos/dell.svg", width: 76.639, height: 24.722 },
  { name: "Zendesk", src: "/assets/company-logos/zendesk.svg", width: 107.542, height: 21.014 },
  { name: "Rakuten", src: "/assets/company-logos/rakuten.svg", width: 82.819, height: 25.958 },
  { name: "Pacific Funds", src: "/assets/company-logos/pacific-funds.svg", width: 176.764, height: 16.069 },
  { name: "NCR", src: "/assets/company-logos/ncr.svg", width: 98.889, height: 30 },
  { name: "Lattice", type: "lattice", width: 148.333, height: 28.183 },
  { name: "TED", src: "/assets/company-logos/ted.svg", width: 67.103, height: 24.722 },
];

function CompanyLogo({ company, duplicate }) {
  const style = {
    "--logo-width": `${company.width}px`,
    "--logo-height": `${company.height}px`,
  };

  if (company.type === "lattice") {
    return (
      <span
        className="company-logo company-logo-lattice"
        style={style}
        role={duplicate ? undefined : "img"}
        aria-label={duplicate ? undefined : company.name}
      >
        <img className="lattice-mark" src="/assets/company-logos/lattice-mark.svg" alt="" />
        <img className="lattice-wordmark" src="/assets/company-logos/lattice-wordmark.svg" alt="" />
      </span>
    );
  }

  return (
    <img
      className="company-logo"
      style={style}
      src={company.src}
      alt={duplicate ? "" : company.name}
    />
  );
}

function CompanyGroup({ duplicate = false }) {
  return (
    <div className="companies-marquee-group" aria-hidden={duplicate || undefined}>
      {companies.map((company) => (
        <span className="company-logo-wrapper" key={company.name}>
          <CompanyLogo company={company} duplicate={duplicate} />
        </span>
      ))}
    </div>
  );
}

export function CompaniesMarquee({ locale }) {
  const label = locale === "ar" ? "شعارات عملائنا" : "Customer logos";

  return (
    <section className="companies-section" aria-label={label}>
      <div className="companies-marquee">
        <div className="companies-marquee-track">
          <CompanyGroup />
          <CompanyGroup duplicate />
          <CompanyGroup duplicate />
          <CompanyGroup duplicate />
          <CompanyGroup duplicate />
        </div>
      </div>
    </section>
  );
}