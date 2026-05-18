const quoteSvg = (
  <svg className="t-quote" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zM0 21v-7.391c0-5.704 3.748-9.571 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

type Testimonial = {
  text: string;
  name: string;
  location: string;
  amount: string;
  years: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: 'I was skeptical at first, but RateVault found me a 7.6% P.A. rate when my own bank was only offering 4.10%. The team was professional and the whole process took less than a week.',
    name: 'Margaret Thompson',
    location: 'Sydney, NSW',
    amount: '$120,000',
    years: '2 years',
  },
  {
    text: 'Outstanding service! They compared dozens of institutions and found me rates I didn’t even know existed. My portfolio is now earning significantly more with complete peace of mind.',
    name: 'David Chen',
    location: 'Melbourne, VIC',
    amount: '$175,000',
    years: '3 years',
  },
  {
    text: 'After retirement, I needed secure investments. RateVault not only found excellent rates but explained everything clearly. I’m now earning 5.05% with full Government Guarantee protection.',
    name: 'Patricia Williams',
    location: 'Brisbane, QLD',
    amount: '$200,000',
    years: '5 years',
  },
  {
    text: 'I’ve used several comparison services, but none come close to the personalised attention and exclusive rates that RateVault provides. Highly recommended for serious investors.',
    name: 'James Morrison',
    location: 'Perth, WA',
    amount: '$95,000',
    years: '1 year',
  },
];

export function Trusted() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="section-head reveal">
          <h2>Trusted By Thousands of Australian Investors</h2>
          <p>See what our clients say about their experience.</p>
        </div>

        <div className="tp-badge-wrap reveal">
          <div className="tp-badge">
            <div className="tp-stars" aria-label="5 out of 5 stars">
              <span className="tp-star">★</span>
              <span className="tp-star">★</span>
              <span className="tp-star">★</span>
              <span className="tp-star">★</span>
              <span className="tp-star">★</span>
            </div>
            <div className="tp-text">
              <strong>Excellent</strong> &middot; <strong>4.9</strong> out of 5 based on{' '}
              <strong>2,847 reviews</strong>
            </div>
          </div>
        </div>

        <div className="trust-stats">
          <div className="ts-card reveal">
            <div className="ts-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="ts-num">12+</div>
            <div className="ts-lbl">Years Experience</div>
          </div>
          <div className="ts-card reveal" style={{ transitionDelay: '.05s' }}>
            <div className="ts-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="ts-num">50,000+</div>
            <div className="ts-lbl">Investors Served</div>
          </div>
          <div className="ts-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="ts-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="ts-num">$2.4B+</div>
            <div className="ts-lbl">Total Invested</div>
          </div>
          <div className="ts-card reveal" style={{ transitionDelay: '.15s' }}>
            <div className="ts-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
              </svg>
            </div>
            <div className="ts-num">100%</div>
            <div className="ts-lbl">Government Guaranteed</div>
          </div>
        </div>

        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="testimonial reveal"
              style={i % 2 === 1 ? { transitionDelay: '.1s' } : undefined}
            >
              <div className="t-top">
                {quoteSvg}
                <div className="t-stars" aria-label="5 out of 5 stars">★★★★★</div>
              </div>
              <p className="t-text">&quot;{t.text}&quot;</p>
              <div className="t-foot">
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-loc">{t.location}</div>
                </div>
                <div className="t-meta">
                  <div className="t-amount">{t.amount}</div>
                  <div className="t-years">{t.years}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
