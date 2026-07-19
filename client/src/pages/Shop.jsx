import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import '../styles/shop.css';

const PRODUCTS = [
  {
    id: 1, name: 'Wireless Earbuds Pro', nameFr: 'Écouteurs Sans Fil Pro', price: 2499, category: 'electronics',
    audience: ['man','woman','students'], badge: 'bestseller', rating: 4.8, reviews: 128, sold: 2340, freeShipping: true, shop: 'TechZone HT',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
    ],
    description: 'Premium wireless earbuds with active noise cancellation, 30-hour battery life, and IPX5 water resistance. Crystal-clear calls with dual-mic ENC technology.',
    descriptionFr: 'Écouteurs sans fil premium avec réduction de bruit active, 30 heures d\'autonomie et résistance à l\'eau IPX5. Appels cristallins avec technologie ENC à double micro.',
  },
  {
    id: 2, name: 'Smart Watch Series 5', nameFr: 'Montre Connectée Série 5', price: 4999, category: 'electronics',
    audience: ['man','woman','students'], badge: 'new', rating: 4.6, reviews: 89, sold: 756, freeShipping: true, shop: 'GadgetWorld',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    ],
    description: 'Advanced smartwatch with 1.9" AMOLED display, heart rate & SpO2 monitoring, GPS tracking, and 14-day battery. Compatible with iOS & Android.',
    descriptionFr: 'Montre connectée avancée avec écran AMOLED 1,9", surveillance cardiaque & SpO2, suivi GPS et batterie 14 jours. Compatible iOS & Android.',
  },
  {
    id: 3, name: 'Portable Bluetooth Speaker', nameFr: 'Enceinte Bluetooth Portable', price: 1899, category: 'electronics',
    audience: ['man','woman','kids','students'], badge: null, rating: 4.5, reviews: 215, sold: 1890, freeShipping: false, shop: 'SoundBox HT',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop',
    ],
    description: 'Portable Bluetooth 5.3 speaker with 360° immersive sound, 20W output, IP67 waterproof, and 24-hour playtime. Perfect for outdoor adventures.',
    descriptionFr: 'Enceinte Bluetooth 5.3 portable avec son immersif 360°, 20W de sortie, étanche IP67 et 24 heures d\'autonomie. Parfaite pour les aventures en plein air.',
  },
  {
    id: 4, name: 'USB-C Hub 7-in-1', nameFr: 'Hub USB-C 7-en-1', price: 1599, category: 'electronics',
    audience: ['man','woman','students'], badge: null, rating: 4.3, reviews: 76, sold: 520, freeShipping: true, shop: 'TechZone HT',
    image: 'https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618576980905-8b58444dfb22?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop',
    ],
    description: 'Multi-port USB-C hub with 4K HDMI, 2x USB-A 3.0, SD/TF card reader, and 100W PD pass-through. Ultra-slim aluminum design for MacBook & laptops.',
    descriptionFr: 'Hub USB-C multi-port avec HDMI 4K, 2x USB-A 3.0, lecteur SD/TF et charge PD 100W. Design ultra-fin en aluminium pour MacBook et ordinateurs portables.',
  },
  {
    id: 5, name: 'LED Desk Lamp', nameFr: 'Lampe de Bureau LED', price: 1299, category: 'home',
    audience: ['man','woman','students'], badge: 'sale', rating: 4.7, reviews: 342, sold: 3100, freeShipping: false, shop: 'HomeStyle',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=600&fit=crop',
    ],
    description: 'Adjustable LED desk lamp with 5 color modes, 10 brightness levels, auto-dimming sensor, and USB charging port. Eye-care technology for long study sessions.',
    descriptionFr: 'Lampe de bureau LED réglable avec 5 modes de couleur, 10 niveaux de luminosité, capteur automatique et port USB. Technologie anti-fatigue oculaire.',
  },
  {
    id: 6, name: 'Stainless Steel Water Bottle', nameFr: 'Gourde en Acier Inoxydable', price: 899, category: 'home',
    audience: ['man','woman','kids','students'], badge: null, rating: 4.4, reviews: 198, sold: 870, freeShipping: true, shop: 'HomeStyle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1623165550870-1e1aeb3ff7d0?w=600&h=600&fit=crop',
    ],
    description: 'Double-wall vacuum insulated water bottle. Keeps drinks cold 24h / hot 12h. BPA-free, leak-proof lid, 750ml capacity. Eco-friendly & durable.',
    descriptionFr: 'Gourde isotherme double paroi sous vide. Garde les boissons froides 24h / chaudes 12h. Sans BPA, bouchon étanche, capacité 750ml. Écologique et durable.',
  },
  {
    id: 7, name: "Men's Cotton T-Shirt (Pack of 3)", nameFr: 'T-Shirt Homme en Coton (Lot de 3)', price: 1999, category: 'fashion',
    audience: ['man'], badge: 'bestseller', rating: 4.6, reviews: 567, sold: 4200, freeShipping: true, shop: 'FashionHub',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop',
    ],
    description: 'Premium 100% cotton t-shirts, pre-shrunk and breathable. Classic crew neck, reinforced seams. Available in Black, White & Navy. Machine washable.',
    descriptionFr: 'T-shirts premium 100% coton, pré-rétrécis et respirants. Col rond classique, coutures renforcées. Disponible en Noir, Blanc & Marine. Lavable en machine.',
  },
  {
    id: 8, name: "Women's Running Shoes", nameFr: "Chaussures de Course Femme", price: 3999, category: 'fashion',
    audience: ['woman'], badge: 'new', rating: 4.7, reviews: 234, sold: 1100, freeShipping: true, shop: 'SoleMate',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop',
    ],
    description: 'Lightweight running shoes with responsive cushioning, breathable mesh upper, and anti-slip rubber outsole. Arch support for comfortable long-distance running.',
    descriptionFr: 'Chaussures de course légères avec amorti réactif, tige en mesh respirant et semelle antidérapante. Soutien de la voûte plantaire pour course longue distance.',
  },
  {
    id: 9, name: "Men's Leather Wallet", nameFr: 'Portefeuille en Cuir Homme', price: 1499, category: 'fashion',
    audience: ['man'], badge: null, rating: 4.5, reviews: 145, sold: 630, freeShipping: false, shop: 'LeatherCraft',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559563458-527698bbf2b7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606503825007-1f2f9fa37bb4?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    ],
    description: 'Genuine leather bifold wallet with RFID blocking, 8 card slots, ID window, and 2 cash compartments. Slim profile fits comfortably in front or back pocket.',
    descriptionFr: 'Portefeuille bifold en cuir véritable avec blocage RFID, 8 emplacements carte, fenêtre ID et 2 compartiments billets. Profil fin et confortable.',
  },
  {
    id: 10, name: 'Kids Phone Case (iPhone/Samsung)', nameFr: 'Coque Enfant (iPhone/Samsung)', price: 599, category: 'accessories',
    audience: ['kids'], badge: 'sale', rating: 4.2, reviews: 412, sold: 8900, freeShipping: true, shop: 'KidJoy',
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop',
    ],
    description: 'Shockproof silicone phone case with 3D cartoon design. Raised edges protect screen & camera. Soft, non-toxic material safe for kids. Multiple colors available.',
    descriptionFr: 'Coque silicone antichoc avec design 3D cartoon. Bordures surélevées protègent écran et caméra. Matériau doux non toxique pour enfants. Plusieurs couleurs.',
  },
  {
    id: 11, name: 'Student Power Bank 20000mAh', nameFr: 'Batterie Externe Étudiant 20000mAh', price: 2199, category: 'electronics',
    audience: ['students'], badge: 'bestseller', rating: 4.8, reviews: 678, sold: 5600, freeShipping: true, shop: 'CampusGear',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=600&fit=crop',
    ],
    description: 'High-capacity 20000mAh power bank with 22.5W fast charging, 3 outputs (USB-C + 2x USB-A), digital display, and airline-safe design. Charges a phone 5x.',
    descriptionFr: 'Batterie externe haute capacité 20000mAh avec charge rapide 22.5W, 3 sorties (USB-C + 2x USB-A), affichage digital et design conforme aviation. Recharge 5x un téléphone.',
  },
  {
    id: 12, name: "Women's Sunglasses UV400", nameFr: "Lunettes de Soleil Femme UV400", price: 1299, category: 'fashion',
    audience: ['woman'], badge: null, rating: 4.3, reviews: 89, sold: 340, freeShipping: false, shop: 'ShadeLab',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=600&fit=crop',
    ],
    description: 'Fashionable UV400 polarized sunglasses with lightweight TR90 frame, scratch-resistant lenses, and 100% UVA/UVB protection. Comes with a premium hard case.',
    descriptionFr: 'Lunettes de soleil polarisées UV400 avec monture TR90 légère, verres résistants aux rayures et protection 100% UVA/UVB. Livrées avec étui rigide premium.',
  },
];

export default function Shop() {
  const { t, lang } = useLang();
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalQty, setModalQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const categories = [
    { key: 'all', label: lang === 'fr' ? 'Tout' : 'All', labelFr: 'Tout' },
    { key: 'man', label: 'Man', labelFr: 'Homme' },
    { key: 'woman', label: 'Woman', labelFr: 'Femme' },
    { key: 'kids', label: 'Kids', labelFr: 'Enfants' },
    { key: 'students', label: 'Students', labelFr: 'Étudiants' },
    { key: 'electronics', label: 'Electronics', labelFr: 'Électronique' },
    { key: 'fashion', label: 'Fashion', labelFr: 'Mode' },
    { key: 'home', label: 'Home', labelFr: 'Maison' },
    { key: 'accessories', label: 'Accessories', labelFr: 'Accessoires' },
  ];

  const filtered = PRODUCTS
    .filter(p => {
      if (activeCategory === 'all') return true;
      if (['man', 'woman', 'kids', 'students'].includes(activeCategory)) {
        return p.audience && p.audience.includes(activeCategory);
      }
      return p.category === activeCategory;
    })
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
    const name = lang === 'fr' ? product.nameFr : product.name;
    toast(
      lang === 'fr' ? `${name} ajouté au panier !` : `${name} added to cart!`,
      'success',
      2500
    );
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

  const formatSold = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'k';
    return String(num);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalQty(1);
    setActiveImage(0);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setModalQty(1);
    setActiveImage(0);
  };

  return (
    <>
      {/* ══════════════════════════════════════
          PRODUCTS
          ══════════════════════════════════════ */}
      <section className="shop-sec shop-sec-alt anim anim-fade" id="shop-products">
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
          {filtered.map((product, idx) => (
            <div key={product.id} className={`shop-product-card anim anim-scale anim-d${(idx % 6) + 1}`} onClick={() => openProductModal(product)}>
              <div className="shop-product-img-wrap">
                <img src={product.image} alt={lang === 'fr' ? product.nameFr : product.name} className="shop-product-img" loading="lazy" />
                {product.badge && (
                  <span className={`shop-badge ${getBadgeClass(product.badge)}`}>
                    {getBadge(product.badge)}
                  </span>
                )}
                {product.freeShipping && (
                  <span className="shop-free-tag">{lang === 'fr' ? 'Livraison Gratuite' : 'Free Ship'}</span>
                )}
              </div>
              <div className="shop-product-body">
                <div className="shop-product-name">{lang === 'fr' ? product.nameFr : product.name}</div>
                <div className="shop-product-price-row">
                  <span className="shop-product-price-symbol">HTG</span>
                  <span className="shop-product-price-num">{formatPrice(product.price)}</span>
                  <span className="shop-product-sold">{formatSold(product.sold)} {lang === 'fr' ? 'vendus' : 'sold'}</span>
                </div>
                <div className="shop-product-footer">
                  <span className="shop-product-shop">{product.shop}</span>
                  <button
                    className={`shop-cart-icon-btn ${addedId === product.id ? 'added' : ''}`}
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    title={lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
                  >
                    {addedId === product.id
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    }
                  </button>
                </div>
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
          TAOBAO-STYLE PRODUCT MODAL
          ══════════════════════════════════════ */}
      {selectedProduct && (
        <>
          <div className="taobao-overlay" onClick={closeProductModal}></div>
          <div className="taobao-modal">
            <button className="taobao-close" onClick={closeProductModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {/* Mobile swipe handle */}
            <div className="taobao-swipe"></div>

            <div className="taobao-container">
              {/* ===== LEFT – Image Gallery ===== */}
              <div className="taobao-left">
                <div
                  className="taobao-main-image"
                  onScroll={(e) => {
                    const container = e.target;
                    const scrollLeft = container.scrollLeft;
                    const imageWidth = container.offsetWidth;
                    const newIndex = Math.round(scrollLeft / imageWidth);
                    if (newIndex !== activeImage) {
                      setActiveImage(newIndex);
                    }
                  }}
                >
                  {(selectedProduct.images || [selectedProduct.image]).map((img, i) => (
                    <div key={i} style={{width: '100%', height: '100%', flexShrink: 0}}>
                      <img
                        src={img}
                        alt={`${lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name} - ${i + 1}`}
                        className="taobao-img"
                        draggable={false}
                      />
                      {i === 0 && selectedProduct.badge && (
                        <span className={`shop-badge taobao-badge ${getBadgeClass(selectedProduct.badge)}`}>
                          {getBadge(selectedProduct.badge)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Image dots indicator - mobile */}
                <div className="taobao-img-dots">
                  {(selectedProduct.images || [selectedProduct.image]).map((_, i) => (
                    <span
                      key={i}
                      className={`taobao-img-dot ${i === activeImage ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(i);
                        const imageContainer = document.querySelector('.taobao-main-image');
                        if (imageContainer) {
                          imageContainer.scrollTo({
                            left: i * imageContainer.offsetWidth,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    ></span>
                  ))}
                </div>

                {/* thumbs – desktop only */}
                <div className="taobao-thumbs">
                  {(selectedProduct.images || [selectedProduct.image]).map((img, i) => (
                    <div key={i} className={`taobao-thumb ${i === activeImage ? 'active' : ''}`} onClick={() => setActiveImage(i)}>
                      <img src={img} alt={`${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== RIGHT – Product Info ===== */}
              <div className="taobao-right">
                {/* Shop name + SKU */}
                <div className="taobao-top-bar">
                  <span className="taobao-shop-name">{selectedProduct.shop}</span>
                  <span className="taobao-sku">SKU: UNI-{String(selectedProduct.id).padStart(5,'0')}</span>
                </div>

                {/* Title */}
                <h1 className="taobao-title">{lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name}</h1>

                {/* Rating row */}
                <div className="taobao-rating-box">
                  <div className="taobao-stars">{'★'.repeat(Math.floor(selectedProduct.rating))}{'☆'.repeat(5 - Math.floor(selectedProduct.rating))}</div>
                  <span className="taobao-rating-num">{selectedProduct.rating}</span>
                  <span className="taobao-reviews-count">
                    ({selectedProduct.reviews} {lang === 'fr' ? 'avis' : 'reviews'})
                  </span>
                  <span className="taobao-sold-inline">{formatSold(selectedProduct.sold)}+ {lang === 'fr' ? 'vendus' : 'sold'}</span>
                </div>

                {/* Price */}
                <div className="taobao-price-section">
                  <div className="taobao-price-row">
                    <span className="taobao-currency">HTG</span>
                    <span className="taobao-price-value">{formatPrice(selectedProduct.price)}</span>
                    <span className="taobao-price-unit">/ {lang === 'fr' ? 'unité' : 'unit'}</span>
                    {selectedProduct.badge === 'sale' && (
                      <span className="taobao-old-price">HTG {formatPrice(Math.round(selectedProduct.price * 1.25))}</span>
                    )}
                  </div>
                  {selectedProduct.badge === 'sale' && (
                    <div className="taobao-discount">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
                      {lang === 'fr' ? 'Prix promo -20% !' : 'Flash Sale -20%!'}
                    </div>
                  )}
                </div>

                {/* Color / Variant (mock) */}
                <div className="taobao-variants">
                  <div className="taobao-variant-label">{lang === 'fr' ? 'Couleur' : 'Color'}:</div>
                  <div className="taobao-variant-colors">
                    {['#1a1a2e','#16213e','#e94560','#f5f5f5'].map((c, i) => (
                      <span key={i} className={`taobao-color-dot ${i === 0 ? 'active' : ''}`} style={{background:c}}></span>
                    ))}
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="taobao-options">
                  <div className="taobao-option-group">
                    <label className="taobao-option-label">{lang === 'fr' ? 'Quantité' : 'Quantity'}:</label>
                    <div className="taobao-qty-selector">
                      <button className="taobao-qty-btn" onClick={() => setModalQty(Math.max(1, modalQty - 1))}>−</button>
                      <input type="number" value={modalQty} min="1" max="99" className="taobao-qty-input" onChange={(e) => { const v = parseInt(e.target.value) || 1; setModalQty(Math.min(99, Math.max(1, v))); }} />
                      <button className="taobao-qty-btn" onClick={() => setModalQty(Math.min(99, modalQty + 1))}>+</button>
                    </div>
                    <span className="taobao-stock-info">
                      <span className="taobao-stock-dot"></span>
                      {lang === 'fr' ? 'En stock' : 'In Stock'}
                    </span>
                  </div>
                </div>

                {/* Services */}
                <div className="taobao-services">
                  {selectedProduct.freeShipping && (
                    <div className="taobao-service-item">
                      <span className="taobao-service-icon">🚚</span>
                      <span>{lang === 'fr' ? 'Livraison gratuite' : 'Free Shipping'}</span>
                    </div>
                  )}
                  <div className="taobao-service-item">
                    <span className="taobao-service-icon">🔄</span>
                    <span>{lang === 'fr' ? 'Retour 7 jours' : '7-Day Return'}</span>
                  </div>
                  <div className="taobao-service-item">
                    <span className="taobao-service-icon">✅</span>
                    <span>{lang === 'fr' ? 'Garantie qualité' : 'Quality Guarantee'}</span>
                  </div>
                  <div className="taobao-service-item">
                    <span className="taobao-service-icon">💬</span>
                    <span>{lang === 'fr' ? 'Support 24/7' : '24/7 Support'}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="taobao-desc">
                  <p>{lang === 'fr' ? (selectedProduct.descriptionFr || selectedProduct.description) : selectedProduct.description}</p>
                </div>

                {/* Actions */}
                <div className="taobao-actions">
                  <button
                    className={`taobao-cart-btn ${addedId === selectedProduct.id ? 'added' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      for (let i = 0; i < modalQty; i++) addToCart(selectedProduct);
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                    {addedId === selectedProduct.id
                      ? (lang === 'fr' ? '✓ Ajouté' : '✓ Added')
                      : (lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart')}
                  </button>
                  <a
                    href={`https://wa.me/50900000000?text=${encodeURIComponent((lang === 'fr' ? 'Bonjour, je souhaite commander: ' : 'Hello, I would like to order: ') + (lang === 'fr' ? selectedProduct.nameFr : selectedProduct.name) + ' x' + modalQty)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="taobao-buy-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {lang === 'fr' ? 'Commander' : 'Buy Now'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}