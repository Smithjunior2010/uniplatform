import { useLang } from '../i18n/LanguageContext';

export default function Shipping() {
  const { t } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="ship-hero" id="shipping-home">
        <div className="ship-hero-bg">
          <div className="ship-orb"></div>
          <div className="ship-orb"></div>
          <div className="ship-orb"></div>
        </div>
        <div className="ship-hero-grid"></div>

        <div className="ship-hero-content">
          <div className="ship-hero-eyebrow">
            <span className="ship-dot"></span>
            {t.shipping.hero.eyebrow}
          </div>
          <h1 className="ship-hero-title">
            {t.shipping.hero.title1}<br />
            <span className="ship-gt">{t.shipping.hero.title2}</span>
          </h1>
          <p className="ship-hero-sub">{t.shipping.hero.subtitle}</p>
          <p className="ship-hero-desc">{t.shipping.hero.desc}</p>
          <div className="ship-hero-cta">
            <a href="#shipping-services" className="ship-btn-p">
              {t.shipping.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="ship-hero-stats">
            <div className="ship-stat">
              <span className="ship-stat-num">Nord-Est</span>
              <span className="ship-stat-label">{t.shipping.hero.stat1}</span>
            </div>
            <div className="ship-stat-div"></div>
            <div className="ship-stat">
              <span className="ship-stat-num">7/7</span>
              <span className="ship-stat-label">{t.shipping.hero.stat2}</span>
            </div>
            <div className="ship-stat-div"></div>
            <div className="ship-stat">
              <span className="ship-stat-num">100%</span>
              <span className="ship-stat-label">{t.shipping.hero.stat3}</span>
            </div>
          </div>
        </div>

        <div className="ship-hero-visual">
          <div
            dangerouslySetInnerHTML={{
              __html: `<dotlottie-wc src="https://lottie.host/ced1c47f-fed4-4ecc-bff6-b577181de1c7/kTkaL4BEOX.lottie" style="width:100%;max-width:1100px;height:700px" autoplay loop></dotlottie-wc>`
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
          ══════════════════════════════════════ */}
      <section className="ship-sec" id="shipping-services">
        <div className="ship-ey">{t.shipping.services.eyebrow}</div>
        <h2 className="ship-st">{t.shipping.services.title1} <span className="ship-st-i">{t.shipping.services.title2}</span></h2>
        <p className="ship-sb">{t.shipping.services.subtitle}</p>

        <div className="ship-services-grid">
          {t.shipping.services.items.map((service, i) => (
            <div key={i} className="ship-service-card" style={{'--sc': service.color}}>
              <div className="ship-service-ico" style={{background: `${service.color}15`, border: `1px solid ${service.color}30`}}>
                <span>{service.icon}</span>
              </div>
              <div className="ship-service-name">{service.name}</div>
              <p className="ship-service-desc">{service.desc}</p>
              <ul className="ship-service-features">
                {service.features.map((f, j) => (
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
          PRICING
          ══════════════════════════════════════ */}
      <section className="ship-sec ship-sec-alt" id="shipping-pricing">
        <div className="ship-ey">{t.shipping.pricing.eyebrow}</div>
        <h2 className="ship-st">{t.shipping.pricing.title1} <span className="ship-st-i">{t.shipping.pricing.title2}</span></h2>
        <p className="ship-sb">{t.shipping.pricing.subtitle}</p>

        <div className="ship-pricing-grid">
          {t.shipping.pricing.zones.map((zone, i) => (
            <div key={i} className="ship-pricing-card">
              <div className="ship-pricing-zone">
                <span className="ship-pricing-zone-icon">📍</span>
                {zone.name}
              </div>
              <div className="ship-pricing-rate">
                <span className="ship-pricing-rate-num">{zone.price}</span>
                <span className="ship-pricing-rate-unit"> {zone.unit}</span>
              </div>
              <p className="ship-pricing-desc">{zone.desc}</p>
            </div>
          ))}
          <div className="ship-pricing-note">
            <span className="ship-pricing-note-icon">ℹ️</span>
            {t.shipping.pricing.note}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="ship-sec" id="shipping-how">
        <div className="ship-ey">{t.shipping.how.eyebrow}</div>
        <h2 className="ship-st">{t.shipping.how.title1} <span className="ship-st-i">{t.shipping.how.title2}</span></h2>
        <p className="ship-sb">{t.shipping.how.subtitle}</p>

        <div className="ship-steps">
          {t.shipping.how.steps.map((step, i) => (
            <div key={i} className="ship-step">
              <div className="ship-step-num" style={{background: step.color}}>{i + 1}</div>
              <div className="ship-step-ico">{step.icon}</div>
              <div className="ship-step-title">{step.title}</div>
              <p className="ship-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
          ══════════════════════════════════════ */}
      <section className="ship-sec ship-sec-dark" id="shipping-why">
        <div className="ship-why-wrap">
          <div className="ship-why-left">
            <div className="ship-ey-dark">{t.shipping.why.eyebrow}</div>
            <h2 className="ship-st-dark">{t.shipping.why.title1} <span className="ship-st-i-dark">{t.shipping.why.title2}</span></h2>
            <p className="ship-sb-dark">{t.shipping.why.subtitle}</p>
            <div className="ship-why-points">
              {t.shipping.why.points.map((pt, i) => (
                <div key={i} className="ship-why-pt">
                  <div className="ship-why-pt-ico">{pt.icon}</div>
                  <div>
                    <div className="ship-why-pt-title">{pt.title}</div>
                    <div className="ship-why-pt-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ship-why-right">
            <div className="ship-why-card">
              <div className="ship-why-card-icon">🚚</div>
              <div className="ship-why-card-title">{t.shipping.why.card.title}</div>
              <p className="ship-why-card-desc">{t.shipping.why.card.desc}</p>
              <div className="ship-why-card-stats">
                <div className="ship-why-cs">
                  <span className="ship-why-cs-num">{t.shipping.why.card.stat1}</span>
                  <span className="ship-why-cs-label">{t.shipping.why.card.stat1Label}</span>
                </div>
                <div className="ship-why-cs">
                  <span className="ship-why-cs-num">{t.shipping.why.card.stat2}</span>
                  <span className="ship-why-cs-label">{t.shipping.why.card.stat2Label}</span>
                </div>
                <div className="ship-why-cs">
                  <span className="ship-why-cs-num">{t.shipping.why.card.stat3}</span>
                  <span className="ship-why-cs-label">{t.shipping.why.card.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT / CTA
          ══════════════════════════════════════ */}
      <section className="ship-sec ship-sec-cta" id="shipping-contact">
        <div className="ship-cta-card">
          <div className="ship-cta-badge">{t.shipping.contact.badge}</div>
          <h2 className="ship-cta-title">{t.shipping.contact.title}</h2>
          <p className="ship-cta-desc">{t.shipping.contact.desc}</p>
          <div className="ship-cta-btns">
            <a href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer" className="ship-cta-btn-p">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              {t.shipping.contact.whatsapp}
            </a>
            </div>
          <div className="ship-cta-info">
            <div className="ship-cta-info-item">
              <span className="ship-cta-info-ico">📍</span>
              {t.shipping.contact.loc}
            </div>
            <div className="ship-cta-info-item">
              <span className="ship-cta-info-ico">🕐</span>
              {t.shipping.contact.hours}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}