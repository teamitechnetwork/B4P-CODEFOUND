import { ArrowDownToLine, ArrowUpRight, FileText } from 'lucide-react';
import { TEN_YEAR_REPORT_DOWNLOAD_FILENAME, TEN_YEAR_REPORT_PDF_URL } from '@/data/tenYearReport';
import './TenYearReport.css';

const reportUrl = 'https://heyzine.com/flip-book/9bd52434a9.html';

export function TenYearReport() {
  return (
    <section className="ten-year-report" aria-labelledby="ten-year-report-title">
      <div className="ten-year-report__inner">
        <figure className="ten-year-report__image">
          <img
            src="/images/ten-year-progress.webp"
            alt="Community members gathered for B4P CODEFOUND's 10 Years Progress Report."
            width={1920}
            height={1200}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="ten-year-report__panel">
          <p className="ten-year-report__eyebrow">
            <span>B4P CODEFOUND</span>
            <span aria-hidden="true">·</span>
            <span>2015–2025</span>
          </p>
          <FileText className="ten-year-report__icon" size={30} strokeWidth={1.5} aria-hidden="true" />
          <h2 id="ten-year-report-title">10 Years of Progress, Built Together</h2>
          <p className="ten-year-report__description">
            Our 2015–2025 report shares a decade of community-led peacebuilding, women’s leadership, and
            economic development in Liberia. Explore the people, milestones, and lessons behind our progress.
          </p>
          <div className="ten-year-report__actions">
            <a
              className="ten-year-report__read"
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read the B4P CODEFOUND 10-year growth report (opens in a new tab)"
              data-testid="link-read-ten-year-report"
            >
              Read the report
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="ten-year-report__download"
              href={TEN_YEAR_REPORT_PDF_URL}
              download={TEN_YEAR_REPORT_DOWNLOAD_FILENAME}
              aria-label="Download the B4P CODEFOUND 10-year growth report"
              data-testid="link-download-ten-year-report"
            >
              <ArrowDownToLine size={17} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
