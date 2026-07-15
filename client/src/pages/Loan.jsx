import { useLang } from '../i18n/LanguageContext';

export default function Loan() {
  const { t } = useLang();

  return (
    <>
      <section className="energy-hero" id="loan-home">
        <div className="energy-hero-bg">
          <div className="energy-orb"></div>
          <div className="energy-orb"></div>
          <div className="energy-orb"></div>
        </div>
        <div className="energy-hero-grid"></div>

        <div className="energy-hero-content">
          <div className="energy-hero-eyebrow">
            <span className="energy-dot"></span>
            {t.loan?.hero?.eyebrow || 'Coming Soon'}
          </div>
          <h1 className="energy-hero-title">
            Unidev <span className="energy-gt">Loan</span>
          </h1>
          <p className="energy-hero-sub">Microloans & Community Financing</p>
          <p className="energy-hero-desc">Empowering Haitian entrepreneurs and families with accessible microloans and community-driven financial solutions.</p>
          <div className="energy-hero-cta">
            <a href="#contact" className="energy-btn">Stay Informed</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="ey">{t.loan?.features?.eyebrow || 'Features'}</div>
        <h2 className="st">Coming <span className="i">Soon</span></h2>
        <p className="sb">We are building a revolutionary microloan platform for the Haitian community. Stay tuned for the launch.</p>

        <div className="sgrid">
          <div className="scard" style={{'--cc':'var(--c-mango)'}}>
            <div className="stop">
              <div className="sico">🌱</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="sbr">Microfinance</div>
            <div className="snm">Microloans</div>
            <p className="sdesc">Small loans with fair rates to help individuals and small businesses grow.</p>
          </div>

          <div className="scard" style={{'--cc':'var(--c-mango)'}}>
            <div className="stop">
              <div className="sico">👥</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="sbr">Community</div>
            <div className="snm">Community Pools</div>
            <p className="sdesc">Group-based lending circles that build trust and shared prosperity.</p>
          </div>

          <div className="scard" style={{'--cc':'var(--c-mango)'}}>
            <div className="stop">
              <div className="sico">📊</div>
              <span className="stat-pill soon">Coming Soon</span>
            </div>
            <div className="sbr">Education</div>
            <div className="snm">Financial Literacy</div>
            <p className="sdesc">Free resources and workshops to help you manage money and build credit.</p>
          </div>
        </div>
      </section>
    </>
  );
}