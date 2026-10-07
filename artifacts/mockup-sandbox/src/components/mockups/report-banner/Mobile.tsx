import { Download } from "lucide-react";
import "./_group.css";

export function Mobile() {
  return (
    <main className="report-banner-preview report-banner-preview--mobile">
      <section
        className="site-promo-banner"
        aria-label="B4P CODEFOUND 10-year growth report"
      >
        <div className="site-promo-banner__line site-promo-banner__line--primary">
          <span>Explore the B4P CODEFOUND 10-Year Growth Report</span>
          <a
            className="site-promo-banner__download"
            href="#report-download"
            download="B4P-CODEFOUND-10-Years-Report.pdf"
            aria-label="Download the B4P CODEFOUND 10-Year Growth Report"
          >
            <Download size={13} aria-hidden="true" />
            <span>Download report</span>
          </a>
        </div>
        <div className="site-promo-banner__line site-promo-banner__subline">
          <span>Peacebuilding · Economic Development · Collective Action</span>
          <a href="#partner">See how we can work together!</a>
        </div>
      </section>
    </main>
  );
}
