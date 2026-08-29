import { ArrowRight } from 'lucide-react';
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
            Newsletter
          </div>
          <h2 id="newsletter-title">
            Stay in
            <em>the loop.</em>
          </h2>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
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
          {isReady && (
            <p className="newsletter-form-status" role="status">
              Ready for Mailchimp connection.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}