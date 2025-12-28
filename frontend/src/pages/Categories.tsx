import { useState, useEffect } from 'react';
import { categoriesService, CreateCategoryDto, Category } from '../services/categories.service';
import { useAuthStore } from '../stores/auth.store';
import { useIsMobile } from '../hooks/useIsMobile';

export function Categories() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<Category[]>([]);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [formData, setFormData] = useState<Omit<CreateCategoryDto, 'restaurantId'>>({
    name: '',
    description: '',
    isActive: true,
  });
  const [categoryImageUrl, setCategoryImageUrl] = useState<string>('');

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
    if (!confirm('Cela va créer des catégories par défaut (Restaurant, Friterie, Fast Food, Boissons, Desserts) avec leurs sous-catégories. Continuer ?')) {
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
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>;
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '1rem' : '0',
        marginBottom: '2rem',
      }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: 0 }}>Catégories</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {categories.length === 0 && (
            <button
              onClick={handleInitializeDefaults}
              disabled={initializing}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: initializing ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: initializing ? 'not-allowed' : 'pointer',
              }}
            >
              {initializing ? 'Création...' : '📋 Créer catégories par défaut'}
            </button>
          )}
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {showForm ? 'Annuler' : '+ Nouvelle catégorie'}
          </button>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Nouvelle catégorie</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Type de catégorie</label>
            <select
              value={formData.parentCategoryId || ''}
              onChange={(e) => setFormData({ ...formData, parentCategoryId: e.target.value || undefined })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <option value="">Catégorie principale</option>
              {mainCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  Sous-catégorie de: {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nom *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                resize: 'vertical',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Image de la catégorie (URL)</label>
            <input
              type="url"
              value={categoryImageUrl}
              onChange={(e) => setCategoryImageUrl(e.target.value)}
              placeholder="https://exemple.com/image.jpg"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '0.5rem',
              }}
            />
            {categoryImageUrl && (
              <div style={{ marginTop: '0.5rem' }}>
                <img
                  src={categoryImageUrl}
                  alt="Aperçu"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  style={{
                    maxWidth: '200px',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '2px solid #007bff',
                  }}
                />
              </div>
            )}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              />
              Active
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Créer
          </button>
        </form>
      )}

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {mainCategories.map((category) => {
          const subcategories = getSubcategories(category.id);
          return (
            <div
              key={category.id}
              style={{
                backgroundColor: 'white',
                padding: isMobile ? '1rem' : '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{
                      width: isMobile ? '80px' : '100px',
                      height: isMobile ? '80px' : '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      flexShrink: 0,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: isMobile ? '1.1rem' : '1.25rem' }}>{category.name}</h3>
                      {category.description && (
                        <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                          {category.description}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.85rem',
                          backgroundColor: category.isActive ? '#d4edda' : '#f8d7da',
                          color: category.isActive ? '#155724' : '#721c24',
                        }}
                      >
                        {category.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <button
                        onClick={() => handleDelete(category.id)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                        }}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {subcategories.length > 0 && (
                <div style={{ marginTop: '1rem', paddingLeft: isMobile ? '0.5rem' : '1rem', borderLeft: '3px solid #007bff' }}>
                  <h4 style={{ marginBottom: '0.75rem', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Sous-catégories:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          border: '1px solid #e0e0e0',
                        }}
                      >
                        {sub.image && (
                          <img
                            src={sub.image}
                            alt={sub.name}
                            style={{
                              width: '30px',
                              height: '30px',
                              objectFit: 'cover',
                              borderRadius: '4px',
                            }}
                          />
                        )}
                        <span style={{ fontSize: '0.9rem' }}>{sub.name}</span>
                        <button
                          onClick={() => handleDelete(sub.id)}
                          style={{
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {mainCategories.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '8px' }}>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Aucune catégorie pour le moment</p>
            <p style={{ color: '#999', marginTop: '0.5rem' }}>Créez votre première catégorie ci-dessus</p>
          </div>
        )}
      </div>
    </div>
  );
}

