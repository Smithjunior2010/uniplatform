import { useLang } from '../i18n/LanguageContext';
import { useEffect } from 'react';

export default function Energy() {
  const { t } = useLang();

  useEffect(() => {
    if (!document.getElementById('dotlottie-wc-script')) {
      const script = document.createElement('script');
      script.id = 'dotlottie-wc-script';
      script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js';
      script.type = 'module';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="energy-hero" id="energy-home">
        <div className="energy-hero-bg">
          <div className="energy-orb"></div>
          <div className="energy-orb"></div>
          <div className="energy-orb"></div>
        </div>
        <div className="energy-hero-grid"></div>

        <div className="energy-hero-content">
          <div className="energy-hero-eyebrow">
            <span className="energy-dot"></span>
            {t.energy.hero.eyebrow}
          </div>
          <h1 className="energy-hero-title">
            {t.energy.hero.title1}<br />
            <span className="energy-gt">{t.energy.hero.title2}</span>
          </h1>
          <p className="energy-hero-sub">{t.energy.hero.subtitle}</p>
          <p className="energy-hero-desc">{t.energy.hero.desc}</p>
          <div className="energy-hero-cta">
            <a href="#energy-services" className="energy-btn-p">
              {t.energy.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#energy-pricing" className="energy-btn-s">
              {t.energy.hero.cta2}
            </a>
          </div>
          <div className="energy-hero-stats">
            <div className="energy-stat">
              <span className="energy-stat-num">24/7</span>
              <span className="energy-stat-label">{t.energy.hero.stat1}</span>
            </div>
            <div className="energy-stat-div"></div>
            <div className="energy-stat">
              <span className="energy-stat-num">100%</span>
              <span className="energy-stat-label">{t.energy.hero.stat2}</span>
            </div>
            <div className="energy-stat-div"></div>
            <div className="energy-stat">
              <span className="energy-stat-num">Fast</span>
              <span className="energy-stat-label">{t.energy.hero.stat3}</span>
            </div>
          </div>
        </div>

        <div className="energy-hero-visual">
          <div
            dangerouslySetInnerHTML={{
              __html: `<dotlottie-wc src="https://lottie.host/54e258d1-71bc-4638-b7b7-ef65c40e50c9/CNVMjnJ7ap.json" style="width:300px;height:300px" autoplay loop></dotlottie-wc>`
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEVICES WE CHARGE
          ══════════════════════════════════════ */}
      <section className="energy-sec" id="energy-devices">
        <div className="energy-ey">{t.energy.devices.eyebrow}</div>
        <h2 className="energy-st">{t.energy.devices.title1} <span className="energy-st-i">{t.energy.devices.title2}</span></h2>
        <p className="energy-sb">{t.energy.devices.subtitle}</p>

        <div className="energy-devices-grid">
          {t.energy.devices.items.map((device, i) => (
            <div key={i} className="energy-device-card">
              <div className="energy-device-ico">{device.icon}</div>
              <div className="energy-device-name">{device.name}</div>
              <p className="energy-device-desc">{device.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="energy-sec" id="energy-how">
        <div className="energy-ey">{t.energy.how.eyebrow}</div>
        <h2 className="energy-st">{t.energy.how.title1} <span className="energy-st-i">{t.energy.how.title2}</span></h2>
        <p className="energy-sb">{t.energy.how.subtitle}</p>

        <div className="energy-steps">
          {t.energy.how.steps.map((step, i) => (
            <div key={i} className="energy-step">
              <div className="energy-step-ico" style={{background: step.color}}>
                <span>{step.icon}</span>
              </div>
              <div className="energy-step-num">0{i + 1}</div>
              <div className="energy-step-title">{step.title}</div>
              <p className="energy-step-desc">{step.desc}</p>
            </div>
          ))}
          <div className="energy-step-line"></div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════ */}
      <section className="energy-sec" id="energy-contact">
        <div className="energy-cta-card">
          <div className="energy-cta-badge">{t.energy.contact.badge}</div>
          <h2 className="energy-cta-title">{t.energy.contact.title}</h2>
          <p className="energy-cta-desc">{t.energy.contact.desc}</p>
          <div className="energy-cta-btns">
            <a href={`https://wa.me/50900000000?text=${encodeURIComponent('Hi Unidev Energy! I am interested in your charging services.')}`} target="_blank" rel="noopener noreferrer" className="energy-cta-btn-p">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.energy.contact.whatsapp}
            </a>

          </div>
          <div className="energy-cta-info">
            <div className="energy-cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {t.energy.contact.loc}
            </div>
            <div className="energy-cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {t.energy.contact.hours}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}