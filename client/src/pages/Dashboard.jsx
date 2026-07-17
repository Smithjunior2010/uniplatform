import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useAdmin } from '../contexts/AdminContext';
import '../styles/dashboard.css';

export default function Dashboard() {
  const { t } = useLang();
  const navigate = useNavigate();
  const { isAdmin, user, logout } = useAdmin();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Mock data for dashboard
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    totalOrders: 3456,
    revenue: 45678,
    pendingOrders: 23,
    lowStock: 8
  });

  const [recentOrders] = useState([
    { id: '#ORD-001', customer: 'Jean Pierre', amount: 2500, status: 'completed', date: '2024-01-15' },
    { id: '#ORD-002', customer: 'Marie Claude', amount: 1800, status: 'processing', date: '2024-01-14' },
    { id: '#ORD-003', customer: 'Paul Antoine', amount: 3200, status: 'pending', date: '2024-01-14' },
    { id: '#ORD-004', customer: 'Sophie Laurent', amount: 950, status: 'completed', date: '2024-01-13' },
    { id: '#ORD-005', customer: 'Michel Duval', amount: 4200, status: 'processing', date: '2024-01-13' }
  ]);

  const [users] = useState([
    { id: 1, name: 'Admin User', email: 'admin@unidev.com', role: 'admin', status: 'active', joined: '2024-01-01' },
    { id: 2, name: 'Jean Dupont', email: 'jean@example.com', role: 'user', status: 'active', joined: '2024-01-10' },
    { id: 3, name: 'Marie Martin', email: 'marie@example.com', role: 'user', status: 'active', joined: '2024-01-12' },
    { id: 4, name: 'Pierre Bernard', email: 'pierre@example.com', role: 'user', status: 'inactive', joined: '2024-01-05' }
  ]);

  useEffect(() => {
    // Check if user is admin
    if (!isAdmin) {
      navigate('/login');
      return;
    }

    // Simulate loading dashboard data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isAdmin, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="dashboard-spinner"></div>
        <p>Chargement du tableau de bord...</p>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'processing': return '#f59e0b';
      case 'pending': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getRoleBadgeColor = (role) => {
    return role === 'admin' ? '#8b5cf6' : '#3b82f6';
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-brand">
          <Link to="/" className="dashboard-logo">
            <span style={{fontSize:'1.5rem',fontWeight:800,color:'#2563eb'}}>UNIDEV</span>
            <span className="brand-sub">ADMIN</span>
          </Link>
        </div>

        <div className="dashboard-user">
          <div className="dashboard-user-info">
            <div className="dashboard-avatar">
              {user?.email?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="dashboard-user-details">
              <span className="dashboard-user-name">Administrator</span>
              <span className="dashboard-user-email">{user?.email}</span>
            </div>
          </div>
          <button onClick={handleLogout} className="dashboard-logout">
            Déconnexion
          </button>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="dashboard-nav">
            <button
              className={`dashboard-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Vue d'ensemble
            </button>
            <button
              className={`dashboard-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              📦 Commandes
            </button>
            <button
              className={`dashboard-nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              👥 Utilisateurs
            </button>
            <button
              className={`dashboard-nav-item ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              🛍️ Produits
            </button>
            <button
              className={`dashboard-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Paramètres
            </button>
          </nav>

          <div className="dashboard-sidebar-footer">
            <Link to="/" className="dashboard-back-link">
              ← Retour au site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="dashboard-content">
              <h1 className="dashboard-title">Vue d'ensemble</h1>
              <p className="dashboard-subtitle">Bienvenue dans le panneau d'administration Unidev</p>

              {/* Stats Cards */}
              <div className="dashboard-stats">
                <div className="dashboard-stat-card">
                  <div className="dashboard-stat-icon" style={{background: '#dbeafe'}}>
                    👥
                  </div>
                  <div className="dashboard-stat-info">
                    <span className="dashboard-stat-number">{stats.totalUsers.toLocaleString()}</span>
                    <span className="dashboard-stat-label">Total Utilisateurs</span>
                  </div>
                  <span className="dashboard-stat-trend positive">+12%</span>
                </div>

                <div className="dashboard-stat-card">
                  <div className="dashboard-stat-icon" style={{background: '#dcfce7'}}>
                    📦
                  </div>
                  <div className="dashboard-stat-info">
                    <span className="dashboard-stat-number">{stats.totalOrders.toLocaleString()}</span>
                    <span className="dashboard-stat-label">Total Commandes</span>
                  </div>
                  <span className="dashboard-stat-trend positive">+8%</span>
                </div>

                <div className="dashboard-stat-card">
                  <div className="dashboard-stat-icon" style={{background: '#fef3c7'}}>
                    💰
                  </div>
                  <div className="dashboard-stat-info">
                    <span className="dashboard-stat-number">${stats.revenue.toLocaleString()}</span>
                    <span className="dashboard-stat-label">Revenus (HTG)</span>
                  </div>
                  <span className="dashboard-stat-trend positive">+15%</span>
                </div>

                <div className="dashboard-stat-card">
                  <div className="dashboard-stat-icon" style={{background: '#fee2e2'}}>
                    ⚠️
                  </div>
                  <div className="dashboard-stat-info">
                    <span className="dashboard-stat-number">{stats.pendingOrders}</span>
                    <span className="dashboard-stat-label">Commandes en attente</span>
                  </div>
                  <span className="dashboard-stat-trend negative">-3%</span>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="dashboard-section">
                <h2 className="dashboard-section-title">Commandes récentes</h2>
                <div className="dashboard-table-wrapper">
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>ID Commande</th>
                        <th>Client</th>
                        <th>Montant</th>
                        <th>Statut</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td><strong>{order.id}</strong></td>
                          <td>{order.customer}</td>
                          <td>${order.amount.toLocaleString()}</td>
                          <td>
                            <span 
                              className="dashboard-status-badge"
                              style={{background: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status)}}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td>{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="dashboard-section">
                <h2 className="dashboard-section-title">Actions rapides</h2>
                <div className="dashboard-actions">
                  <button className="dashboard-action-btn">
                    ➕ Ajouter un produit
                  </button>
                  <button className="dashboard-action-btn">
                    👤 Créer un utilisateur
                  </button>
                  <button className="dashboard-action-btn">
                    📊 Voir les rapports
                  </button>
                  <button className="dashboard-action-btn">
                    ⚙️ Paramètres système
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="dashboard-content">
              <div className="dashboard-page-header">
                <h1 className="dashboard-title">Gestion des commandes</h1>
                <button className="dashboard-primary-btn">+ Nouvelle commande</button>
              </div>

              <div className="dashboard-filters">
                <select className="dashboard-select">
                  <option>Tous les statuts</option>
                  <option>En attente</option>
                  <option>Traitement en cours</option>
                  <option>Complétée</option>
                  <option>Annulée</option>
                </select>
                <input type="text" placeholder="Rechercher une commande..." className="dashboard-search" />
              </div>

              <div className="dashboard-table-wrapper">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Produits</th>
                      <th>Total</th>
                      <th>Statut</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.customer}</td>
                        <td>3 articles</td>
                        <td>${order.amount.toLocaleString()}</td>
                        <td>
                          <span 
                            className="dashboard-status-badge"
                            style={{background: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status)}}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>{order.date}</td>
                        <td>
                          <div className="dashboard-row-actions">
                            <button className="dashboard-icon-btn" title="Voir">👁️</button>
                            <button className="dashboard-icon-btn" title="Modifier">✏️</button>
                            <button className="dashboard-icon-btn" title="Supprimer">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="dashboard-content">
              <div className="dashboard-page-header">
                <h1 className="dashboard-title">Gestion des utilisateurs</h1>
                <button className="dashboard-primary-btn">+ Ajouter un utilisateur</button>
              </div>

              <div className="dashboard-table-wrapper">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Rôle</th>
                      <th>Statut</th>
                      <th>Inscrit le</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td><strong>#{u.id}</strong></td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                          <span 
                            className="dashboard-status-badge"
                            style={{background: `${getRoleBadgeColor(u.role)}20`, color: getRoleBadgeColor(u.role)}}
                          >
                            {u.role}
                          </span>
                        </td>
                        <td>
                          <span 
                            className="dashboard-status-badge"
                            style={{
                              background: u.status === 'active' ? '#10b98120' : '#ef444420',
                              color: u.status === 'active' ? '#10b981' : '#ef4444'
                            }}
                          >
                            {u.status}
                          </span>
                        </td>
                        <td>{u.joined}</td>
                        <td>
                          <div className="dashboard-row-actions">
                            <button className="dashboard-icon-btn" title="Voir">👁️</button>
                            <button className="dashboard-icon-btn" title="Modifier">✏️</button>
                            <button className="dashboard-icon-btn" title="Supprimer">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="dashboard-content">
              <div className="dashboard-page-header">
                <h1 className="dashboard-title">Gestion des produits</h1>
                <button className="dashboard-primary-btn">+ Ajouter un produit</button>
              </div>

              <div className="dashboard-grid-products">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="dashboard-product-card">
                    <div className="dashboard-product-image">📦</div>
                    <div className="dashboard-product-info">
                      <h3>Produit Exemple {i}</h3>
                      <p>Description du produit...</p>
                      <span className="dashboard-product-price">$1,500 HTG</span>
                      <div className="dashboard-product-actions">
                        <button className="dashboard-small-btn">Modifier</button>
                        <button className="dashboard-small-btn danger">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="dashboard-content">
              <h1 className="dashboard-title">Paramètres</h1>
              
              <div className="dashboard-settings-section">
                <h2>Paramètres généraux</h2>
                <div className="dashboard-form-group">
                  <label>Nom de l'entreprise</label>
                  <input type="text" defaultValue="Unidev Entreprise" className="dashboard-input" />
                </div>
                <div className="dashboard-form-group">
                  <label>Email de contact</label>
                  <input type="email" defaultValue="contact@unidev.com" className="dashboard-input" />
                </div>
                <div className="dashboard-form-group">
                  <label>Téléphone</label>
                  <input type="tel" defaultValue="+509 0000 0000" className="dashboard-input" />
                </div>
                <button className="dashboard-primary-btn">Sauvegarder les changements</button>
              </div>

              <div className="dashboard-settings-section">
                <h2>Notifications</h2>
                <div className="dashboard-toggle-group">
                  <label className="dashboard-toggle-label">
                    <span>Notifications par email pour nouvelles commandes</span>
                    <input type="checkbox" defaultChecked className="dashboard-toggle" />
                  </label>
                  <label className="dashboard-toggle-label">
                    <span>Notifications pour nouveaux utilisateurs</span>
                    <input type="checkbox" defaultChecked className="dashboard-toggle" />
                  </label>
                  <label className="dashboard-toggle-label">
                    <span>Rapports hebdomadaires</span>
                    <input type="checkbox" className="dashboard-toggle" />
                  </label>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}