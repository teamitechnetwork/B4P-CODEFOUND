import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import './TenYearReport.css';

const reportUrl = 'https://heyzine.com/flip-book/9bd52434a9.html';
const downloadUrl = 'https://drive.google.com/file/d/1bUL_d_eyiGdNY9IshXj1ZO8NQ5j1dOmlj/view?usp=sharing';

export function TenYearReport() {
  return (
    <section className="ten-year-report" aria-labelledby="ten-year-report-title">
      <div className="ten-year-report__inner">
        <div className="ten-year-report__art" aria-hidden="true">
          <span className="ten-year-report__art-kicker">A decade of collective action</span>
          <span className="ten-year-report__number">10</span>
          <div className="ten-year-report__art-footer">
            <span>2015 — 2025</span>
            <span className="ten-year-report__seal">B4P<br />CODEFOUND</span>
          </div>
          <span className="ten-year-report__orbit ten-year-report__orbit--one" />
          <span className="ten-year-report__orbit ten-year-report__orbit--two" />
        </div>

        <div className="ten-year-report__content">
          <p className="ten-year-report__eyebrow">
            <span />
            Ten-year growth report
          </p>
          <h2 id="ten-year-report-title">
            A decade of <em>people-powered</em> progress.
          </h2>
          <p className="ten-year-report__description">
            From Liberia outward, our first ten years have been shaped by communities leading the way.
            Explore the partnerships, lessons, and shared progress behind the work—and the possibilities ahead.
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
          <p className="ten-year-report__note">A milestone made possible by many hands.</p>
        </div>
      </div>
    </section>
  );
}
