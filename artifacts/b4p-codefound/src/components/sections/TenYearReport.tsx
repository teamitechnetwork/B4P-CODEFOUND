import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import './TenYearReport.css';

const reportUrl = 'https://heyzine.com/flip-book/9bd52434a9.html';
const downloadUrl = 'https://drive.google.com/file/d/1bUL_d_eyiGdNY9IshXj1ZO8NQ5j1dOmlj/view?usp=sharing';

export function TenYearReport() {
  return (
    <section className="ten-year-report" aria-labelledby="ten-year-report-title">
      <div className="ten-year-report__inner">
        <div className="ten-year-report__copy">
          <p className="ten-year-report__eyebrow">B4P CODEFOUND · 2015–2025</p>
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
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the B4P CODEFOUND 10-year growth report (opens in a new tab)"
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
