import { useLang } from '../i18n/LanguageContext';

export default function WiFi() {
  const { t } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="wifi-hero" id="wifi-home">
        <div className="wifi-hero-bg">
          <div className="wifi-orb"></div>
          <div className="wifi-orb"></div>
          <div className="wifi-orb"></div>
        </div>
        <div className="wifi-hero-grid"></div>

        <div className="wifi-hero-content">
          <div className="wifi-hero-eyebrow">
            <span className="wifi-dot"></span>
            {t.wifi.hero.eyebrow}
          </div>
          <h1 className="wifi-hero-title">
            {t.wifi.hero.title1}<br />
            <span className="wifi-gt">{t.wifi.hero.title2}</span>
          </h1>
          <p className="wifi-hero-sub">{t.wifi.hero.subtitle}</p>
          <p className="wifi-hero-desc">{t.wifi.hero.desc}</p>
          <div className="wifi-hero-cta">
            <a href="#wifi-plans" className="wifi-btn-p">
              {t.wifi.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#wifi-coverage" className="wifi-btn-s">
              {t.wifi.hero.cta2}
            </a>
          </div>
          <div className="wifi-hero-stats">
            <div className="wifi-stat">
              <span className="wifi-stat-num">500m</span>
              <span className="wifi-stat-label">{t.wifi.hero.stat1}</span>
            </div>
            <div className="wifi-stat-div"></div>
            <div className="wifi-stat">
              <span className="wifi-stat-num">24/7</span>
              <span className="wifi-stat-label">{t.wifi.hero.stat2}</span>
            </div>
            <div className="wifi-stat-div"></div>
            <div className="wifi-stat">
              <span className="wifi-stat-num">99%</span>
              <span className="wifi-stat-label">{t.wifi.hero.stat3}</span>
            </div>
          </div>
        </div>

        <div className="wifi-hero-visual">
          <div
            dangerouslySetInnerHTML={{
              __html: `<dotlottie-wc src="https://lottie.host/f57db765-6839-418c-8ffd-143386d70cd0/RTwJR5k3lT.json" style="width:100%;max-width:300px;height:300px" autoplay loop></dotlottie-wc>`
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLANS
          ══════════════════════════════════════ */}
      <section className="wifi-sec" id="wifi-plans">
        <div className="wifi-ey">{t.wifi.plans.eyebrow}</div>
        <h2 className="wifi-st">{t.wifi.plans.title1} <span className="wifi-st-i">{t.wifi.plans.title2}</span></h2>
        <p className="wifi-sb">{t.wifi.plans.subtitle}</p>

        <div className="wifi-plans-grid">
          {t.wifi.plans.items.map((plan, i) => (
            <div key={i} className={`wifi-plan-card ${plan.featured ? 'wifi-plan-featured' : ''}`} style={{'--pc': plan.color}}>
              {plan.featured && <div className="wifi-plan-badge">{t.wifi.plans.popular}</div>}
              <div className="wifi-plan-ico" style={{background: `${plan.color}15`, border: `1px solid ${plan.color}30`}}>
                <span>{plan.icon}</span>
              </div>
              <div className="wifi-plan-name">{plan.name}</div>
              <div className="wifi-plan-price">
                <span className="wifi-plan-currency">{plan.currency}</span>
                <span className="wifi-plan-amount">{plan.price}</span>
                <span className="wifi-plan-period">{plan.period}</span>
              </div>
              <p className="wifi-plan-desc">{plan.desc}</p>
              <ul className="wifi-plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#wifi-contact" className="wifi-plan-btn" style={{background: plan.featured ? plan.color : 'var(--ink)', color: plan.featured ? 'white' : 'white'}}>
                {t.wifi.plans.choose}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          COVERAGE
          ══════════════════════════════════════ */}
      <section className="wifi-sec wifi-sec-alt" id="wifi-coverage">
        <div className="wifi-coverage-wrap">
          <div className="wifi-coverage-left">
            <div className="wifi-coverage-visual">
              <div className="wifi-cr"></div>
              <div className="wifi-cr"></div>
              <div className="wifi-cr"></div>
              <div className="wifi-cr"></div>
              <div className="wifi-crc">
                <span style={{fontSize:'1.4rem'}}>📶</span>
                <span>500m</span>
              </div>
            </div>
          </div>
          <div className="wifi-coverage-right">
            <div className="wifi-ey">{t.wifi.coverage.eyebrow}</div>
            <h2 className="wifi-st">{t.wifi.coverage.title1} <span className="wifi-st-i">{t.wifi.coverage.title2}</span></h2>
            <p className="wifi-sb">{t.wifi.coverage.subtitle}</p>
            <div className="wifi-cpts">
              {t.wifi.coverage.points.map((pt, i) => (
                <div key={i} className="wifi-cpt">
                  <span className="wifi-cpt-ico">{pt.icon}</span>
                  <div>
                    <div className="wifi-cpt-title">{pt.title}</div>
                    <div className="wifi-cpt-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="wifi-sec" id="wifi-how">
        <div className="wifi-ey">{t.wifi.how.eyebrow}</div>
        <h2 className="wifi-st">{t.wifi.how.title1} <span className="wifi-st-i">{t.wifi.how.title2}</span></h2>
        <p className="wifi-sb">{t.wifi.how.subtitle}</p>

        <div className="wifi-steps">
          {t.wifi.how.steps.map((step, i) => (
            <div key={i} className="wifi-step">
              <div className="wifi-step-num" style={{background: step.color}}>{i + 1}</div>
              <div className="wifi-step-ico">{step.icon}</div>
              <div className="wifi-step-title">{step.title}</div>
              <p className="wifi-step-desc">{step.desc}</p>
              {i < t.wifi.how.steps.length - 1 && <div className="wifi-step-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEVICES
          ══════════════════════════════════════ */}
      <section className="wifi-sec wifi-sec-alt" id="wifi-devices">
        <div className="wifi-ey">{t.wifi.devices.eyebrow}</div>
        <h2 className="wifi-st">{t.wifi.devices.title1} <span className="wifi-st-i">{t.wifi.devices.title2}</span></h2>
        <p className="wifi-sb">{t.wifi.devices.subtitle}</p>

        <div className="wifi-devices-grid">
          {t.wifi.devices.items.map((d, i) => (
            <div key={i} className="wifi-device-card">
              <div className="wifi-device-ico">{d.icon}</div>
              <div className="wifi-device-name">{d.name}</div>
              <div className="wifi-device-desc">{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
          ══════════════════════════════════════ */}
      <section className="wifi-sec wifi-sec-dark" id="wifi-why">
        <div className="wifi-why-wrap">
          <div className="wifi-why-left">
            <div className="wifi-ey-dark">{t.wifi.why.eyebrow}</div>
            <h2 className="wifi-st-dark">{t.wifi.why.title1} <span className="wifi-st-i-dark">{t.wifi.why.title2}</span></h2>
            <p className="wifi-sb-dark">{t.wifi.why.subtitle}</p>
            <div className="wifi-why-points">
              {t.wifi.why.points.map((pt, i) => (
                <div key={i} className="wifi-why-pt">
                  <div className="wifi-why-pt-ico">{pt.icon}</div>
                  <div>
                    <div className="wifi-why-pt-title">{pt.title}</div>
                    <div className="wifi-why-pt-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wifi-why-right">
            <div className="wifi-why-card">
              <div className="wifi-why-card-icon">🇭🇹</div>
              <div className="wifi-why-card-title">{t.wifi.why.card.title}</div>
              <p className="wifi-why-card-desc">{t.wifi.why.card.desc}</p>
              <div className="wifi-why-card-stats">
                <div className="wifi-why-cs">
                  <span className="wifi-why-cs-num">{t.wifi.why.card.stat1}</span>
                  <span className="wifi-why-cs-label">{t.wifi.why.card.stat1Label}</span>
                </div>
                <div className="wifi-why-cs">
                  <span className="wifi-why-cs-num">{t.wifi.why.card.stat2}</span>
                  <span className="wifi-why-cs-label">{t.wifi.why.card.stat2Label}</span>
                </div>
                <div className="wifi-why-cs">
                  <span className="wifi-why-cs-num">{t.wifi.why.card.stat3}</span>
                  <span className="wifi-why-cs-label">{t.wifi.why.card.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT / CTA
          ══════════════════════════════════════ */}
      <section className="wifi-sec wifi-sec-cta" id="wifi-contact">
        <div className="wifi-cta-card">
          <div className="wifi-cta-badge">{t.wifi.contact.badge}</div>
          <h2 className="wifi-cta-title">{t.wifi.contact.title}</h2>
          <p className="wifi-cta-desc">{t.wifi.contact.desc}</p>
          <div className="wifi-cta-btns">
            <a href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer" className="wifi-cta-btn-p">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              {t.wifi.contact.whatsapp}
            </a>
          </div>
          <div className="wifi-cta-info">
            <div className="wifi-cta-info-item">
              <span className="wifi-cta-info-ico">📍</span>
              {t.wifi.contact.loc}
            </div>
            <div className="wifi-cta-info-item">
              <span className="wifi-cta-info-ico">🕐</span>
              {t.wifi.contact.hours}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}