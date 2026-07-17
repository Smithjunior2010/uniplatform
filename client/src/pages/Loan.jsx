import { useLang } from '../i18n/LanguageContext';
import '../styles/loan.css';

export default function Loan() {
  const { t } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="loan-hero" id="loan-home">
        <div className="loan-hero-bg">
          <div className="loan-orb"></div>
          <div className="loan-orb"></div>
          <div className="loan-orb"></div>
        </div>
        <div className="loan-hero-grid"></div>

        <div className="loan-hero-content">
          <div className="loan-hero-eyebrow">
            <span className="loan-dot"></span>
            {t.loan?.hero?.eyebrow || 'Coming Soon'}
          </div>
          <h1 className="loan-hero-title">
            Unidev <span className="loan-gt">Loan</span>
          </h1>
          <p className="loan-hero-sub">Microloans & Community Financing</p>
          <p className="loan-hero-desc">Empowering Haitian entrepreneurs and families with accessible microloans and community-driven financial solutions.</p>
          <div className="loan-hero-cta">
            <a href="#contact" className="loan-btn-p">Stay Informed</a>
          </div>
          <div className="loan-hero-stats">
            <div className="loan-stat">
              <span className="loan-stat-num">0%</span>
              <span className="loan-stat-label">Interest Rate</span>
            </div>
            <div className="loan-stat-div"></div>
            <div className="loan-stat">
              <span className="loan-stat-num">24h</span>
              <span className="loan-stat-label">Approval Time</span>
            </div>
            <div className="loan-stat-div"></div>
            <div className="loan-stat">
              <span className="loan-stat-num">100%</span>
              <span className="loan-stat-label">Community Owned</span>
            </div>
          </div>
        </div>

        <div className="loan-hero-visual">
          <div className="loan-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=500&fit=crop"
              alt="Unidev Loan"
              className="loan-hero-img"
            />
            <div className="loan-hero-float-card">
              <span className="loan-hero-float-ico">💰</span>
              <div>
                <div className="loan-hero-float-title">Microfinance for Haiti</div>
                <div className="loan-hero-float-sub">Building economic resilience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
          ══════════════════════════════════════ */}
      <section className="loan-sec loan-sec-alt" id="loan-features">
        <div className="loan-ey">{t.loan?.features?.eyebrow || 'Features'}</div>
        <h2 className="loan-st">Coming <span className="loan-st-i">Soon</span></h2>
        <p className="loan-sb">We are building a revolutionary microloan platform for the Haitian community. Stay tuned for the launch.</p>

        <div className="loan-features-grid">
          <div className="loan-feature-card" style={{'--cc':'#16a34a'}}>
            <div className="loan-stop">
              <div className="loan-sico">🌱</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="loan-sbr">Microfinance</div>
            <div className="loan-snm">Microloans</div>
            <p className="loan-sdesc">Small loans with fair rates to help individuals and small businesses grow.</p>
          </div>

          <div className="loan-feature-card" style={{'--cc':'#16a34a'}}>
            <div className="loan-stop">
              <div className="loan-sico">👥</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="loan-sbr">Community</div>
            <div className="loan-snm">Community Pools</div>
            <p className="loan-sdesc">Group-based lending circles that build trust and shared prosperity.</p>
          </div>

          <div className="loan-feature-card" style={{'--cc':'#16a34a'}}>
            <div className="loan-stop">
              <div className="loan-sico">📊</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="loan-sbr">Education</div>
            <div className="loan-snm">Financial Literacy</div>
            <p className="loan-sdesc">Free resources and workshops to help you manage money and build credit.</p>
          </div>
        </div>
      </section>
    </>
  );
}