import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO (Modern 2025)
          ══════════════════════════════════════ */}
      <section className="hero" id="home">
        <div className="hero-diag"></div>
        <div className="hero-orb"></div>
        <div className="hero-orb"></div>
        <div className="hero-orb"></div>
        <div className="hero-grid"></div>

        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="pdot"></span>
            {t.hero.eyebrow}
          </div>
          <h1 className="hero-title">
            {t.hero.title1}<br />
            <span className="gt">{t.hero.title2}</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-cta">
            <a href="#secteurs" className="bp">
              {t.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="bg">
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className={`hero-right ${showAll ? 'expanded' : ''}`}>
          <a href="/wifi" className="hero-bcard" style={{'--hc':'var(--c-wifi)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(26,86,219,.15)',border:'1px solid rgba(26,86,219,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>📶</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.wifi.name}</div>
                <div className="bsub">{t.hero.cards.wifi.sub}</div>
              </div>
            </div>
          </a>
          <a href="/shipping" className="hero-bcard" style={{'--hc':'var(--c-ship)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(15,76,117,.15)',border:'1px solid rgba(15,76,117,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>📦</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.shipping.name}</div>
                <div className="bsub">{t.hero.cards.shipping.sub}</div>
              </div>
            </div>
          </a>
          <a href="#" className="hero-bcard" style={{'--hc':'var(--c-shop)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(13,122,95,.15)',border:'1px solid rgba(13,122,95,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>🛍️</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.shop.name}</div>
                <div className="bsub">{t.hero.cards.shop.sub}</div>
              </div>
            </div>
          </a>
          <a href="#" className="hero-bcard hero-bcard-hide" style={{'--hc':'var(--c-energy)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(196,122,0,.15)',border:'1px solid rgba(196,122,0,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>⚡</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.energy.name}</div>
                <div className="bsub">{t.hero.cards.energy.sub}</div>
              </div>
            </div>
          </a>
          <a href="#" className="hero-bcard hero-bcard-hide" style={{'--hc':'var(--c-fin)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(107,63,160,.15)',border:'1px solid rgba(107,63,160,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>🏦</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.finance.name}</div>
                <div className="bsub">{t.hero.cards.finance.sub}</div>
              </div>
            </div>
          </a>
          <a href="#" className="hero-bcard hero-bcard-hide" style={{'--hc':'var(--c-mango)'}}>
            <div className="brow">
              <div className="bico" style={{background:'rgba(217,119,6,.15)',border:'1px solid rgba(217,119,6,.25)'}}>
                <span style={{fontSize:'1.1rem'}}>🌱</span>
              </div>
              <div>
                <div className="bname">{t.hero.cards.loan.name}</div>
                <div className="bsub">{t.hero.cards.loan.sub}</div>
              </div>
              <span className="barr">{t.hero.cards.loan.badge}</span>
            </div>
          </a>
          <button className="hero-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? t.hero.showLess : t.hero.showMore}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`hm-arrow ${showAll ? 'up' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
          ══════════════════════════════════════ */}
      <div className="sbar">
        <div className="sc">
          <div className="sn">6</div>
          <div className="sl">{t.stats.sectors}</div>
        </div>
        <div className="sc">
          <div className="sn">500m</div>
          <div className="sl">{t.stats.wifi}</div>
        </div>
        <div className="sc">
          <div className="sn">4+</div>
          <div className="sl">{t.stats.payments}</div>
        </div>
        <div className="sc">
          <div className="sn">100%</div>
          <div className="sl">{t.stats.haitian}</div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          OUR BUSINESS SECTORS
          ══════════════════════════════════════ */}
      <section className="sec biz-sec" id="about">
        <div className="ey">{t.biz.eyebrow}</div>
        <h2 className="st">{t.biz.title1} <span className="i">{t.biz.title2}</span></h2>
        <p className="sb">{t.biz.subtitle}</p>

        <div className="biz-grid">
          <a href="/wifi" className="biz-card" style={{'--bc':'var(--c-wifi)'}}>
            <div className="biz-top">
              <div className="biz-ico" style={{background:'rgba(26,86,219,.1)',border:'1px solid rgba(26,86,219,.2)'}}>
                <span className="biz-emoji">📶</span>
              </div>
              <span className="stat-pill live">{t.biz.cards.wifi.badge}</span>
            </div>
            <div className="biz-name">{t.biz.cards.wifi.name}</div>
            <div className="biz-cat">{t.biz.cards.wifi.cat}</div>
            <p className="biz-desc">{t.biz.cards.wifi.desc}</p>
            <div className="biz-tags">
              {t.biz.cards.wifi.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <span className="biz-link">{t.biz.discover}</span>
          </a>

          <a href="/shipping" className="biz-card" style={{'--bc':'var(--c-ship)'}}>
            <div className="biz-top">
              <div className="biz-ico" style={{background:'rgba(15,76,117,.1)',border:'1px solid rgba(15,76,117,.2)'}}>
                <span className="biz-emoji">📦</span>
              </div>
              <span className="stat-pill live">{t.biz.cards.shipping.badge}</span>
            </div>
            <div className="biz-name">{t.biz.cards.shipping.name}</div>
            <div className="biz-cat">{t.biz.cards.shipping.cat}</div>
            <p className="biz-desc">{t.biz.cards.shipping.desc}</p>
            <div className="biz-tags">
              {t.biz.cards.shipping.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <span className="biz-link">{t.biz.discover}</span>
          </a>

          <a href="#" className="biz-card" style={{'--bc':'var(--c-shop)'}}>
            <div className="biz-top">
              <div className="biz-ico" style={{background:'rgba(13,122,95,.1)',border:'1px solid rgba(13,122,95,.2)'}}>
                <span className="biz-emoji">🛍️</span>
              </div>
              <span className="stat-pill live">{t.biz.cards.shop.badge}</span>
            </div>
            <div className="biz-name">{t.biz.cards.shop.name}</div>
            <div className="biz-cat">{t.biz.cards.shop.cat}</div>
            <p className="biz-desc">{t.biz.cards.shop.desc}</p>
            <div className="biz-tags">
              {t.biz.cards.shop.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <span className="biz-link">{t.biz.discover}</span>
          </a>

          <a href="#" className="biz-card" style={{'--bc':'var(--c-energy)'}}>
            <div className="biz-top">
              <div className="biz-ico" style={{background:'rgba(196,122,0,.1)',border:'1px solid rgba(196,122,0,.2)'}}>
                <span className="biz-emoji">⚡</span>
              </div>
              <span className="stat-pill live">{t.biz.cards.energy.badge}</span>
            </div>
            <div className="biz-name">{t.biz.cards.energy.name}</div>
            <div className="biz-cat">{t.biz.cards.energy.cat}</div>
            <p className="biz-desc">{t.biz.cards.energy.desc}</p>
            <div className="biz-tags">
              {t.biz.cards.energy.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <span className="biz-link">{t.biz.discover}</span>
          </a>

          <a href="/finance-agro" className="biz-card" style={{'--bc':'var(--c-fin)'}}>
            <div className="biz-top">
              <div className="biz-ico" style={{background:'rgba(107,63,160,.1)',border:'1px solid rgba(107,63,160,.2)'}}>
                <span className="biz-emoji">🥭</span>
              </div>
              <span className="stat-pill soon">{t.biz.cards.finance.badge}</span>
            </div>
            <div className="biz-name">{t.biz.cards.finance.name}</div>
            <div className="biz-cat">{t.biz.cards.finance.cat}</div>
            <p className="biz-desc">{t.biz.cards.finance.desc}</p>
            <div className="biz-tags">
              {t.biz.cards.finance.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <span className="biz-link">{t.biz.discover}</span>
          </a>

          <div className="biz-card biz-card-cta">
            <div className="biz-cta-content">
              <h2 className="biz-cta-heading">{t.biz.cta.heading}</h2>
              <span className="biz-cta-flag">🇭🇹</span>
              <div className="biz-cta-title">{t.biz.cta.title}</div>
              <p className="biz-cta-desc">{t.biz.cta.desc}</p>
              <a href="#contact" className="biz-cta-btn">
                {t.biz.cta.btn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM
          ══════════════════════════════════════ */}
      <section className="sec" id="team">
        <div className="sh">
          <div>
            <div className="ey">{t.team.eyebrow}</div>
            <h2 className="st"><span className="i">{t.team.title1}</span>{t.team.title2}</h2>
            <p className="sb">{t.team.subtitle}</p>
          </div>
        </div>
        <div className="tgrid">
          <div className="tmc tmc-founder">
            <div className="tmc-avatar">
              <img src="https://i.postimg.cc/528rV460/incognito.jpg" alt="The Founder" />
            </div>
            <div className="tmc-name">{t.team.members.founder.name}</div>
            <div className="tmc-title">{t.team.members.founder.title}</div>
            <div className="tmc-loc">📍 {t.team.members.founder.loc}</div>
            <div className="tmc-bio">{t.team.members.founder.bio}</div>
            <div className="tmc-tags">
              {t.team.members.founder.tags.map((tag, i) => (
                <span key={i} className={`tmc-tag ${i === 1 ? 'tmc-tag-alt' : ''}`}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="tmc">
            <div className="tmc-avatar">
              <img src="/images/team/alfred.jpg" alt="Alfred Patrice" />
            </div>
            <div className="tmc-name">{t.team.members.alfred.name}</div>
            <div className="tmc-title">{t.team.members.alfred.title}</div>
            <div className="tmc-loc">📍 {t.team.members.alfred.loc}</div>
            <div className="tmc-bio">{t.team.members.alfred.bio}</div>
            <div className="tmc-tags">
              {t.team.members.alfred.tags.map((tag, i) => (
                <span key={i} className="tmc-tag">{tag}</span>              ))}
            </div>
          </div>
          <div className="tmc">
            <div className="tmc-avatar">
              <img src="https://i.postimg.cc/jjdQDZ3S/profile-picture.jpg" alt="Prud'homme Smith Junior" />
            </div>
            <div className="tmc-name">{t.team.members.smith.name}</div>
            <div className="tmc-title">{t.team.members.smith.title} · <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline',color:'var(--blue)',fontWeight:600}}>Portfolio</a></div>
            <div className="tmc-loc">📍 {t.team.members.smith.loc}</div>
            <div className="tmc-bio">{t.team.members.smith.bio}</div>
            <div className="tmc-tags">
              {t.team.members.smith.tags.map((tag, i) => (
                <span key={i} className="tmc-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="tmc">
            <div className="tmc-avatar">
              <img src="/images/team/castra.jpg" alt="Castra" />
            </div>
            <div className="tmc-name">{t.team.members.castra.name}</div>
            <div className="tmc-title">{t.team.members.castra.title}</div>
            <div className="tmc-loc">📍 {t.team.members.castra.loc}</div>
            <div className="tmc-bio">{t.team.members.castra.bio}</div>
            <div className="tmc-tags">
              {t.team.members.castra.tags.map((tag, i) => (
                <span key={i} className="tmc-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INVESTOR / CONTACT
          ══════════════════════════════════════ */}
      <section className="sec dark" id="contact">
        <div className="iw">
          <div className="il">
            <div className="ey">{t.contact.eyebrow}</div>
            <h2>{t.contact.title} <em>{t.contact.titleEm}</em></h2>
            <p>{t.contact.desc}</p>
            <div className="ipts">
              {t.contact.bullets.map((bullet, i) => (
                <div className="ipt" key={i}>
                  <div className="idot"></div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="inote">
              <div className="inote-icon">&#10003;</div>
              <div className="inote-text">{t.contact.note1}</div>
            </div>
            <div className="inote">
              <div className="inote-icon">&#10003;</div>
              <div className="inote-text">{t.contact.note2}</div>
            </div>
          </div>
          <div className="fcard">
            <div className="fch">
              <h3>{t.contact.form.title}</h3>
              <p>{t.contact.form.subtitle}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="frow">
                <div className="fiw">
                  <input type="text" className="fi" placeholder={t.contact.form.firstName} />
                </div>
                <div className="fiw">
                  <input type="text" className="fi" placeholder={t.contact.form.lastName} />
                </div>
              </div>
              <div className="fiw">
                <input type="email" className="fi" placeholder={t.contact.form.email} />
              </div>
              <div className="fiw">
                <input type="tel" className="fi" placeholder={t.contact.form.whatsapp} />
              </div>
              <div className="fiw">
                <select className="fi fisel">
                  <option value="">{t.contact.form.interest}</option>
                  {t.contact.form.interestOptions.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="fiw">
                <textarea className="fta" placeholder={t.contact.form.message}></textarea>
              </div>
              <button type="submit" className="fsub">
                {t.contact.form.submit}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}