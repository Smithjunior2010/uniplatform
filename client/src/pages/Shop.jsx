import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import '../styles/shop.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    nameFr: 'Écouteurs Sans Fil Pro',
    price: 2499,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    badge: 'bestseller',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    nameFr: 'Montre Connectée Série 5',
    price: 4999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    badge: 'new',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    nameFr: 'Enceinte Bluetooth Portable',
    price: 1899,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    badge: null,
    rating: 4.5,
    reviews: 215,
  },
  {
    id: 4,
    name: 'USB-C Hub 7-in-1',
    nameFr: 'Hub USB-C 7-en-1',
    price: 1599,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=400&h=400&fit=crop',
    badge: null,
    rating: 4.3,
    reviews: 76,
  },
  {
    id: 5,
    name: 'LED Desk Lamp',
    nameFr: 'Lampe de Bureau LED',
    price: 1299,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=400&h=400&fit=crop',
    badge: 'sale',
    rating: 4.7,
    reviews: 342,
  },
  {
    id: 6,
    name: 'Stainless Steel Water Bottle',
    nameFr: 'Gourde en Acier Inoxydable',
    price: 899,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    badge: null,
    rating: 4.4,
    reviews: 198,
  },
  {
    id: 7,
    name: 'Cotton T-Shirt (Pack of 3)',
    nameFr: 'T-Shirt en Coton (Lot de 3)',
    price: 1999,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    badge: 'bestseller',
    rating: 4.6,
    reviews: 567,
  },
  {
    id: 8,
    name: 'Running Shoes',
    nameFr: 'Chaussures de Course',
    price: 3999,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    badge: 'new',
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 9,
    name: 'Leather Wallet',
    nameFr: 'Portefeuille en Cuir',
    price: 1499,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
    badge: null,
    rating: 4.5,
    reviews: 145,
  },
  {
    id: 10,
    name: 'Phone Case (iPhone/Samsung)',
    nameFr: 'Coque de Téléphone (iPhone/Samsung)',
    price: 599,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=400&h=400&fit=crop',
    badge: 'sale',
    rating: 4.2,
    reviews: 412,
  },
  {
    id: 11,
    name: 'Power Bank 20000mAh',
    nameFr: 'Batterie Externe 20000mAh',
    price: 2199,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    badge: 'bestseller',
    rating: 4.8,
    reviews: 678,
  },
  {
    id: 12,
    name: 'Sunglasses UV400',
    nameFr: 'Lunettes de Soleil UV400',
    price: 1299,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    badge: null,
    rating: 4.3,
    reviews: 89,
  },
];

export default function Shop() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: lang === 'fr' ? 'Tout' : 'All', labelFr: 'Tout' },
    { key: 'electronics', label: 'Electronics', labelFr: 'Électronique' },
    { key: 'fashion', label: 'Fashion', labelFr: 'Mode' },
    { key: 'home', label: 'Home', labelFr: 'Maison' },
    { key: 'accessories', label: 'Accessories', labelFr: 'Accessoires' },
  ];

  const filtered = PRODUCTS
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const nameEn = p.name.toLowerCase();
      const nameFr = p.nameFr.toLowerCase();
      const category = p.category.toLowerCase();
      return nameEn.includes(query) || nameFr.includes(query) || category.includes(query);
    });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id !== id) return item;
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      })
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const getBadge = (badge) => {
    if (!badge) return null;
    const labels = {
      bestseller: lang === 'fr' ? 'Top Ventes' : 'Bestseller',
      new: lang === 'fr' ? 'Nouveau' : 'New',
      sale: lang === 'fr' ? 'Promo' : 'Sale',
    };
    return labels[badge] || badge;
  };

  const getBadgeClass = (badge) => {
    if (badge === 'bestseller') return 'shop-badge-best';
    if (badge === 'new') return 'shop-badge-new';
    if (badge === 'sale') return 'shop-badge-sale';
    return '';
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="shop-hero" id="shop-home">
        <div className="shop-hero-bg">
          <div className="shop-orb"></div>
          <div className="shop-orb"></div>
          <div className="shop-orb"></div>
        </div>
        <div className="shop-hero-grid"></div>

        <div className="shop-hero-content">
          <div className="shop-hero-eyebrow">
            <span className="shop-dot"></span>
            {t.shop.hero.eyebrow}
          </div>
          <h1 className="shop-hero-title">
            {t.shop.hero.title1}<br />
            <span className="shop-gt">{t.shop.hero.title2}</span>
          </h1>
          <p className="shop-hero-sub">{t.shop.hero.subtitle}</p>
          <p className="shop-hero-desc">{t.shop.hero.desc}</p>
          <div className="shop-hero-cta">
            <a href="#shop-products" className="shop-btn-p">
              {t.shop.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="shop-hero-stats">
            <div className="shop-stat">
              <span className="shop-stat-num">{PRODUCTS.length}+</span>
              <span className="shop-stat-label">{t.shop.hero.stat1}</span>
            </div>
            <div className="shop-stat-div"></div>
            <div className="shop-stat">
              <span className="shop-stat-num">Amazon</span>
              <span className="shop-stat-label">{t.shop.hero.stat2}</span>
            </div>
            <div className="shop-stat-div"></div>
            <div className="shop-stat">
              <span className="shop-stat-num">7/7</span>
              <span className="shop-stat-label">{t.shop.hero.stat3}</span>
            </div>
          </div>
        </div>

        <div className="shop-hero-visual">
          <div className="shop-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=500&fit=crop"
              alt="Unidev Shop"
              className="shop-hero-img"
            />
            <div className="shop-hero-float-card">
              <span className="shop-hero-float-ico">🛍️</span>
              <div>
                <div className="shop-hero-float-title">{lang === 'fr' ? 'Livraison locale' : 'Local Delivery'}</div>
                <div className="shop-hero-float-sub">{lang === 'fr' ? 'Ouanaminthe & Nord-Est' : 'Ouanaminthe & Nord-Est'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════ */}
      <section className="shop-sec" id="shop-how">
        <div className="shop-ey">{t.shop.how.eyebrow}</div>
        <h2 className="shop-st">{t.shop.how.title1} <span className="shop-st-i">{t.shop.how.title2}</span></h2>
        <p className="shop-sb">{t.shop.how.subtitle}</p>

        <div className="shop-steps">
          {t.shop.how.steps.map((step, i) => (
            <div key={i} className="shop-step">
              <div className="shop-step-num" style={{background: step.color}}>{i + 1}</div>
              <div className="shop-step-ico">{step.icon}</div>
              <div className="shop-step-title">{step.title}</div>
              <p className="shop-step-desc">{step.desc}</p>
              {i < t.shop.how.steps.length - 1 && <div className="shop-step-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS
          ══════════════════════════════════════ */}
      <section className="shop-sec shop-sec-alt" id="shop-products">
        <div className="shop-products-header">
          <div>
            <div className="shop-ey">{t.shop.products.eyebrow}</div>
            <h2 className="shop-st">{t.shop.products.title1} <span className="shop-st-i">{t.shop.products.title2}</span></h2>
            <p className="shop-sb">{t.shop.products.subtitle}</p>
          </div>
          <button className="shop-cart-btn" onClick={() => setShowCart(!showCart)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            {cartCount > 0 && <span className="shop-cart-count">{cartCount}</span>}
          </button>
        </div>

        {/* Search Box */}
        <div className="shop-search-wrap">
          <div className="shop-search-box">
            <svg className="shop-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input
              type="text"
              className="shop-search-input"
              placeholder={lang === 'fr' ? 'Rechercher des produits...' : 'Search products...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="shop-search-clear" onClick={() => setSearchQuery('')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="shop-search-results-info">
              {filtered.length} {lang === 'fr' ? 'produit(s) trouvé(s)' : 'product(s) found'}
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="shop-categories">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`shop-cat-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {lang === 'fr' ? cat.labelFr : cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="shop-products-grid">
          {filtered.map(product => (
            <div key={product.id} className="shop-product-card" onClick={() => openProductModal(product)} style={{cursor: 'pointer'}}>
              {product.badge && (
                <span className={`shop-badge ${getBadgeClass(product.badge)}`}>
                  {getBadge(product.badge)}
                </span>
              )}
              <div className="shop-product-img-wrap">
                <img src={product.image} alt={lang === 'fr' ? product.nameFr : product.name} className="shop-product-img" />
              </div>
              <div className="shop-product-body">
                <div className="shop-product-rating">
                  <span className="shop-product-stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
                  <span className="shop-product-reviews">({product.reviews})</span>
                </div>
                <div className="shop-product-name">{lang === 'fr' ? product.nameFr : product.name}</div>
                <div className="shop-product-price">
                  <span className="shop-product-currency">HTG</span>
                  <span className="shop-product-amount">{formatPrice(product.price)}</span>
                </div>
                <button
                  className={`shop-add-btn ${addedId === product.id ? 'added' : ''}`}
                  onClick={() => addToCart(product)}
                >
                  {addedId === product.id
                    ? (lang === 'fr' ? 'Ajouté !' : 'Added!')
                    : (lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CART SIDEBAR
          ══════════════════════════════════════ */}
      {showCart && (
        <>
          <div className="shop-cart-overlay" onClick={() => setShowCart(false)}></div>
          <div className="shop-cart-sidebar">
            <div className="shop-cart-header">
              <h3>{lang === 'fr' ? 'Votre Panier' : 'Your Cart'}</h3>
              <button className="shop-cart-close" onClick={() => setShowCart(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="shop-cart-empty">
                <span className="shop-cart-empty-ico">🛒</span>
                <p>{lang === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}</p>
              </div>
            ) : (
              <>
                <div className="shop-cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="shop-cart-item">
                      <img src={item.image} alt={lang === 'fr' ? item.nameFr : item.name} className="shop-cart-item-img" />
                      <div className="shop-cart-item-info">
                        <div className="shop-cart-item-name">{lang === 'fr' ? item.nameFr : item.name}</div>
                        <div className="shop-cart-item-price">HTG {formatPrice(item.price)}</div>
                        <div className="shop-cart-item-qty">
                          <button onClick={() => updateQty(item.id, -1)}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)}>+</button>
                        </div>
                      </div>
                      <button className="shop-cart-item-remove" onClick={() => removeFromCart(item.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="shop-cart-footer">
                  <div className="shop-cart-total">
                    <span>{lang === 'fr' ? 'Total' : 'Total'}</span>
                    <span>HTG {formatPrice(cartTotal)}</span>
                  </div>
                  <a href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer" className="shop-cart-checkout">
                    {lang === 'fr' ? 'Commander via WhatsApp' : 'Order via WhatsApp'}
                  </a>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* ══════════════════════════════════════
          WHY CHOOSE US
          ══════════════════════════════════════ */}
      <section className="shop-sec shop-sec-dark" id="shop-why">
        <div className="shop-why-wrap">
          <div className="shop-why-left">
            <div className="shop-ey-dark">{t.shop.why.eyebrow}</div>
            <h2 className="shop-st-dark">{t.shop.why.title1} <span className="shop-st-i-dark">{t.shop.why.title2}</span></h2>
            <p className="shop-sb-dark">{t.shop.why.subtitle}</p>
            <div className="shop-why-points">
              {t.shop.why.points.map((pt, i) => (
                <div key={i} className="shop-why-pt">
                  <div className="shop-why-pt-ico">{pt.icon}</div>
                  <div>
                    <div className="shop-why-pt-title">{pt.title}</div>
                    <div className="shop-why-pt-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shop-why-right">
            <div className="shop-why-card">
              <div className="shop-why-card-icon">🛍️</div>
              <div className="shop-why-card-title">{t.shop.why.card.title}</div>
              <p className="shop-why-card-desc">{t.shop.why.card.desc}</p>
              <div className="shop-why-card-stats">
                <div className="shop-why-cs">
                  <span className="shop-why-cs-num">{t.shop.why.card.stat1}</span>
                  <span className="shop-why-cs-label">{t.shop.why.card.stat1Label}</span>
                </div>
                <div className="shop-why-cs">
                  <span className="shop-why-cs-num">{t.shop.why.card.stat2}</span>
                  <span className="shop-why-cs-label">{t.shop.why.card.stat2Label}</span>
                </div>
                <div className="shop-why-cs">
                  <span className="shop-why-cs-num">{t.shop.why.card.stat3}</span>
                  <span className="shop-why-cs-label">{t.shop.why.card.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT / CTA
          ══════════════════════════════════════ */}
      <section className="shop-sec shop-sec-cta" id="shop-contact">
        <div className="shop-cta-card">
          <div className="shop-cta-badge">{t.shop.contact.badge}</div>
          <h2 className="shop-cta-title">{t.shop.contact.title}</h2>
          <p className="shop-cta-desc">{t.shop.contact.desc}</p>
          <div className="shop-cta-btns">
            <a href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer" className="shop-cta-btn-p">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              {t.shop.contact.whatsapp}
            </a>
          </div>
          <div className="shop-cta-info">
            <div className="shop-cta-info-item">
              <span className="shop-cta-info-ico">📍</span>
              {t.shop.contact.loc}
            </div>
            <div className="shop-cta-info-item">
              <span className="shop-cta-info-ico">🕐</span>
              {t.shop.contact.hours}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCT MODAL
          ══════════════════════════════════════ */}
      {selectedProduct && (
        <>
          <div className="shop-modal-overlay" onClick={closeProductModal}></div>
          <div className="shop-modal">
            <button className="shop-modal-close" onClick={closeProductModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <div className="shop-modal-content">
              <div className="shop-modal-img-wrap">
                <img src={selectedProduct.image} alt={lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name} className="shop-modal-img" />
                {selectedProduct.badge && (
                  <span className={`shop-badge shop-modal-badge ${getBadgeClass(selectedProduct.badge)}`}>
                    {getBadge(selectedProduct.badge)}
                  </span>
                )}
              </div>

              <div className="shop-modal-body">
                <div className="shop-modal-rating">
                  <span className="shop-product-stars">{'★'.repeat(Math.floor(selectedProduct.rating))}{'☆'.repeat(5 - Math.floor(selectedProduct.rating))}</span>
                  <span className="shop-product-reviews">({selectedProduct.reviews} {lang === 'fr' ? 'avis' : 'reviews'})</span>
                </div>

                <h2 className="shop-modal-name">{lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name}</h2>

                <div className="shop-modal-price">
                  <span className="shop-product-currency">HTG</span>
                  <span className="shop-product-amount">{formatPrice(selectedProduct.price)}</span>
                </div>

                <p className="shop-modal-desc">
                  {lang === 'fr'
                    ? `Produit de haute qualité disponible à Ouanaminthe. Livraison rapide dans le Nord-Est.`
                    : `High quality product available in Ouanaminthe. Fast delivery in the Nord-Est region.`}
                </p>

                <div className="shop-modal-actions">
                  <button
                    className={`shop-add-btn shop-modal-add ${addedId === selectedProduct.id ? 'added' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(selectedProduct);
                    }}
                  >
                    {addedId === selectedProduct.id
                      ? (lang === 'fr' ? 'Ajouté !' : 'Added!')
                      : (lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart')}
                  </button>

                  <a
                    href="https://wa.me/50900000000?text=Bonjour, je suis intéressé par: ${encodeURIComponent(lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shop-modal-whatsapp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                    {lang === 'fr' ? 'Demander via WhatsApp' : 'Ask on WhatsApp'}
                  </a>
                </div>

                <div className="shop-modal-details">
                  <h3 className="shop-modal-details-title">{lang === 'fr' ? 'Détails du produit' : 'Product Details'}</h3>
                  <ul className="shop-modal-details-list">
                    <li>{lang === 'fr' ? '✓ Livraison locale disponible' : '✓ Local delivery available'}</li>
                    <li>{lang === 'fr' ? '✓ Paiement à la livraison' : '✓ Cash on delivery'}</li>
                    <li>{lang === 'fr' ? '✓ Garantie satisfaction' : '✓ Satisfaction guarantee'}</li>
                    <li>{lang === 'fr' ? '✓ Support client 7/7' : '✓ Customer support 7/7'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}