import { useLang } from '../i18n/LanguageContext';

export default function FinanceAgro() {
  const { t } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="fin-hero" id="fin-home">
        <div className="fin-hero-bg">
          <div className="fin-orb"></div>
          <div className="fin-orb"></div>
          <div className="fin-orb"></div>
        </div>
        <div className="fin-hero-grid"></div>

        <div className="fin-hero-content">
          <div className="fin-hero-eyebrow">
            <span className="fin-dot"></span>
            {t.finance.hero.eyebrow}
          </div>
          <h1 className="fin-hero-title">
            {t.finance.hero.title1}<br />
            <span className="fin-gt">{t.finance.hero.title2}</span>
          </h1>
          <p className="fin-hero-sub">{t.finance.hero.subtitle}</p>
          <p className="fin-hero-desc">{t.finance.hero.desc}</p>
          <div className="fin-hero-cta">
            <a href="#fin-services" className="fin-btn-p">
              {t.finance.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#fin-contact" className="fin-btn-s">
              {t.finance.hero.cta2}
            </a>
          </div>
          <div className="fin-hero-stats">
            <div className="fin-stat">
              <span className="fin-stat-num">{t.finance.hero.stat1}</span>
              <span className="fin-stat-label">{t.finance.hero.stat1Label}</span>
            </div>
            <div className="fin-stat-div"></div>
            <div className="fin-stat">
              <span className="fin-stat-num">{t.finance.hero.stat2}</span>
              <span className="fin-stat-label">{t.finance.hero.stat2Label}</span>
            </div>
            <div className="fin-stat-div"></div>
            <div className="fin-stat">
              <span className="fin-stat-num">{t.finance.hero.stat3}</span>
              <span className="fin-stat-label">{t.finance.hero.stat3Label}</span>
            </div>
          </div>
        </div>

        <div className="fin-hero-visual">
          <div className="fin-hero-icon-wrap">
            <span className="fin-hero-icon">🌱</span>
            <span className="fin-hero-icon fin-hero-icon-s">💰</span>
            <span className="fin-hero-icon fin-hero-icon-t">🥭</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
          ══════════════════════════════════════ */}
      <section className="fin-sec" id="fin-services">
        <div className="fin-ey">{t.finance.services.eyebrow}</div>
        <h2 className="fin-st">{t.finance.services.title1} <span className="fin-st-i">{t.finance.services.title2}</span></h2>
        <p className="fin-sb">{t.finance.services.subtitle}</p>

        <div className="fin-services-grid">
          {t.finance.services.items.map((svc, i) => (
            <div key={i} className="fin-service-card">
              <div className="fin-service-ico">
                <span>{svc.icon}</span>
              </div>
              <div className="fin-service-name">{svc.name}</div>
              <p className="fin-service-desc">{svc.desc}</p>
              <ul className="fin-service-features">
                {svc.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS
          ══════════════════════════════════════ */}
      <section className="fin-sec" id="fin-products">
        <div className="fin-ey">{t.finance.products.eyebrow}</div>
        <h2 className="fin-st">{t.finance.products.title1} <span className="fin-st-i">{t.finance.products.title2}</span></h2>
        <p className="fin-sb">{t.finance.products.subtitle}</p>

        <div className="fin-products-grid">
          {t.finance.products.items.map((product, i) => (
            <div key={i} className="fin-product-card">
              <div className="fin-product-ico">{product.icon}</div>
              <div className="fin-product-name">{product.name}</div>
              <p className="fin-product-desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="fin-sec" id="fin-how">
        <div className="fin-ey">{t.finance.how.eyebrow}</div>
        <h2 className="fin-st">{t.finance.how.title1} <span className="fin-st-i">{t.finance.how.title2}</span></h2>
        <p className="fin-sb">{t.finance.how.subtitle}</p>

        <div className="fin-steps">
          {t.finance.how.steps.map((step, i) => (
            <div key={i} className="fin-step">
              <div className="fin-step-header">
                <div className="fin-step-num" style={{background: step.color}}>{i + 1}</div>
                <div className="fin-step-ico">{step.icon}</div>
                <div className="fin-step-title">{step.title}</div>
              </div>
              <p className="fin-step-desc">{step.desc}</p>
            </div>
          ))}
          <div className="fin-step-line"></div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════ */}
      <section className="fin-sec" id="fin-contact">
        <div className="fin-cta-card">
          <div className="fin-cta-badge">{t.finance.contact.badge}</div>
          <h2 className="fin-cta-title">{t.finance.contact.title}</h2>
          <p className="fin-cta-desc">{t.finance.contact.desc}</p>
          <div className="fin-cta-btns">
            <a href={`https://wa.me/50900000000?text=${encodeURIComponent('Hi Unidev Finance & Agro! I am interested in your services.')}`} target="_blank" rel="noopener noreferrer" className="fin-cta-btn-p">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.finance.contact.whatsapp}
            </a>
          </div>
          <div className="fin-cta-info">
            <div className="fin-cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {t.finance.contact.loc}
            </div>
            <div className="fin-cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {t.finance.contact.hours}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}