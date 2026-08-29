import { ArrowRight, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isReady, setIsReady] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsReady(true);
  };

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-title">
      <div className="newsletter-shell">
        <div className="newsletter-copy">
          <div className="newsletter-kicker">
            <span aria-hidden="true" />
            Stay connected
          </div>
          <h2 id="newsletter-title">
            Keep up with
            <em>the work.</em>
          </h2>
          <p>
            Subscribe for updates from B4P CODEFOUND — stories, opportunities,
            and ways to support peacebuilding and development.
          </p>
        </div>

        <div className="newsletter-form-card">
          <div className="newsletter-form-icon" aria-hidden="true">
            <Mail size={21} />
          </div>
          <div>
            <h3>Subscribe to our newsletter</h3>
            <p>We’ll only send the updates that matter.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsReady(false);
              }}
              placeholder="Your email address"
              autoComplete="email"
              required
            />
            <button type="submit">
              Subscribe
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </form>
          {isReady && (
            <p className="newsletter-form-status" role="status">
              This signup form is ready for the Mailchimp connection.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}