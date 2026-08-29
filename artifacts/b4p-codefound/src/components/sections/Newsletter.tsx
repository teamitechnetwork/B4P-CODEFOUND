import { Bell } from 'lucide-react';
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
        <div className="newsletter-bell" aria-hidden="true">
          <Bell size={62} strokeWidth={1.7} fill="currentColor" />
        </div>
        <div className="newsletter-copy">
          <h2 id="newsletter-title">
            <span>Ring for</span>{' '}
            <em>Updates!</em>
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