import { useState, useEffect } from 'react';
import { categoriesService, CreateCategoryDto, Category } from '../services/categories.service';
import { useAuthStore } from '../stores/auth.store';

export function Categories() {
  const { user } = useAuthStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState<Omit<CreateCategoryDto, 'restaurantId'>>({
    name: '',
    description: '',
    isActive: true,
  });
  const [categoryImageUrl, setCategoryImageUrl] = useState<string>('');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await categoriesService.getAll(user?.restaurantId);
      setCategories(data);
      setMainCategories(data.filter(c => !c.parentCategoryId));
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Veuillez saisir un nom');
      return;
    }
    try {
      await categoriesService.create({
        ...formData,
        image: categoryImageUrl || undefined,
        restaurantId: user?.restaurantId || '',
      });
      setShowForm(false);
      setFormData({ name: '', description: '', isActive: true });
      setCategoryImageUrl('');
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la création');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      return;
    }
    try {
      await categoriesService.delete(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const handleInitializeDefaults = async () => {
    if (!confirm('Cela va créer des catégories par défaut. Continuer ?')) {
      return;
    }
    try {
      setInitializing(true);
      await categoriesService.initializeDefaults(user?.restaurantId);
      loadData();
      alert('Catégories par défaut créées avec succès !');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de l\'initialisation');
    } finally {
      setInitializing(false);
    }
  };

  const getSubcategories = (categoryId: string) => {
    return categories.filter(c => c.parentCategoryId === categoryId);
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1.5rem 1rem' : '2rem', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: '700', 
            color: '#212529', 
            margin: 0,
            marginBottom: '0.25rem'
          }}>
            Categories
          </h1>
          <p style={{ color: '#6c757d', margin: 0, fontSize: '0.875rem' }}>
            Organisez vos produits par catégories
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {categories.length === 0 && (
            <button
              onClick={handleInitializeDefaults}
              disabled={initializing}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: initializing ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: initializing ? 'not-allowed' : 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}
            >
              {initializing ? 'Création...' : 'Init Defaults'}
            </button>
          )}
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 2px 4px rgba(0,123,255,0.2)'
            }}
          >
            {showForm ? 'Cancel' : '+ Add New'}
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div style={{
            backgroundColor: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
            marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#212529' }}>
            New Category
          </h2>
          <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#495057' }}>
                Name *
              </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '0.875rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#495057' }}>
                Description
              </label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              />
              Active
            </label>
          </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
                  backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                Create
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#f8f9fa',
                  color: '#495057',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
              cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
            }}
          >
                Cancel
          </button>
            </div>
        </form>
        </div>
      )}

      {/* Liste des catégories */}
      {mainCategories.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '4rem 2rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📂</div>
          <p style={{ fontSize: '1.125rem', color: '#6c757d', margin: 0 }}>
            Aucune catégorie pour le moment
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
        {mainCategories.map((category) => {
          const subcategories = getSubcategories(category.id);
          return (
            <div
              key={category.id}
              style={{
                backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0'
              }}
            >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#212529',
                      margin: 0,
                      marginBottom: '0.5rem'
                    }}>
                      {category.name}
                    </h3>
                      {category.description && (
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6c757d',
                        margin: 0,
                        lineHeight: '1.5'
                      }}>
                          {category.description}
                        </p>
                      )}
                    </div>
                  <span style={{
                          padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: category.isActive ? '#d4edda' : '#e2e3e5',
                    color: category.isActive ? '#155724' : '#383d41',
                    whiteSpace: 'nowrap'
                  }}>
                        {category.isActive ? 'Active' : 'Inactive'}
                      </span>
                </div>

                {subcategories.length > 0 && (
                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#6c757d',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}>
                      Subcategories ({subcategories.length})
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {subcategories.map(sub => (
                        <span key={sub.id} style={{
                          padding: '0.375rem 0.75rem',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          color: '#495057'
                        }}>
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f0f0f0',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                      <button
                        onClick={() => handleDelete(category.id)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                      borderRadius: '6px',
                          cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      flex: 1
                        }}
                      >
                    Delete
                      </button>
                </div>
            </div>
          );
        })}
          </div>
        )}
    </div>
  );
}
