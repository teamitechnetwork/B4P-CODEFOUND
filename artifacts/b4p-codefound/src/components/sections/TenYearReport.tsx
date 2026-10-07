import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { TEN_YEAR_REPORT_DOWNLOAD_FILENAME, TEN_YEAR_REPORT_PDF_URL } from '@/data/tenYearReport';
import './TenYearReport.css';

const reportUrl = 'https://heyzine.com/flip-book/9bd52434a9.html';

export function TenYearReport() {
  return (
    <section className="ten-year-report" aria-labelledby="ten-year-report-title">
      <div className="ten-year-report__inner">
        <div className="ten-year-report__copy">
          <p className="ten-year-report__eyebrow">
            <span>B4P CODEFOUND · 2015–2025</span>
            <span className="ten-year-report__badge">NEW UPDATE</span>
          </p>
          <h2 id="ten-year-report-title">
            Ten years of community-led progress.
          </h2>
          <p className="ten-year-report__description">
            Explore a decade of Liberia-rooted peacebuilding and economic development—work led by local
            communities, strengthened through collective action, and shaped by what we have learned together.
          </p>
        </div>
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
            Download report
          </a>
        </div>
      </div>
    </section>
  );
}
