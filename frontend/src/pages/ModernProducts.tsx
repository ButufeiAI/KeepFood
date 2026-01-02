import React, { useState, useEffect } from 'react';
import { productsService } from '../services/products.service';
import { useAuthStore } from '../stores/auth.store';

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  categoryName?: string;
  available: boolean;
  imageUrl?: string;
}

export const ModernProducts: React.FC = () => {
  const { user } = useAuthStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadProducts();
  }, [user]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      if (!user?.restaurantId) return;
      
      const data = await productsService.getProducts(user.restaurantId);
      setProducts(data);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map((p: Product) => p.categoryName || 'Autre'))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryName === selectedCategory);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <h3 className="page-title">Articles</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Articles</li>
              </ul>
            </div>
            <div className="col-sm-4 text-end">
              <button className="btn btn-primary">
                <i className="icon-plus me-2"></i>
                Nouvel Article
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-2">
              <button
                className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory('all')}
              >
                Tous ({products.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} ({products.filter(p => p.categoryName === cat).length})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="icon-inbox fs-1 text-muted mb-3 d-block"></i>
              <h5>Aucun article trouvé</h5>
              <p className="text-muted">Commencez par ajouter des articles à votre menu</p>
              <button className="btn btn-primary mt-3">
                <i className="icon-plus me-2"></i>
                Ajouter un Article
              </button>
            </div>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-img-top position-relative">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-100"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    ) : (
                      <div 
                        className="d-flex align-items-center justify-content-center bg-light"
                        style={{ height: '200px' }}
                      >
                        <i className="icon-image fs-1 text-muted"></i>
                      </div>
                    )}
                    <span className={`badge position-absolute top-0 end-0 m-2 ${product.available ? 'bg-success' : 'bg-danger'}`}>
                      {product.available ? 'Disponible' : 'Indisponible'}
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{product.name}</h5>
                      <span className="badge bg-primary-light text-primary">{product.categoryName || 'Autre'}</span>
                    </div>
                    {product.description && (
                      <p className="card-text text-muted small mb-3">
                        {product.description.length > 80 
                          ? `${product.description.substring(0, 80)}...` 
                          : product.description}
                      </p>
                    )}
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="text-primary mb-0">{product.price.toFixed(2)} €</h4>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Modifier">
                          <i className="icon-edit"></i>
                        </button>
                        <button className="btn btn-outline-danger" title="Supprimer">
                          <i className="icon-trash-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
