import { useState, useEffect } from 'react';
import { productsService, CreateProductDto, Product } from '../services/products.service';
import { categoriesService, Category } from '../services/categories.service';
import { useAuthStore } from '../stores/auth.store';
import { useIsMobile } from '../hooks/useIsMobile';
import { ProductCard } from '../components/ProductCard';
import { Card } from '../components/Card';

export function Products() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>(['']);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    price: 0,
    categoryId: '',
    type: 'FOOD',
    isAvailable: true,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        productsService.getAll(user?.restaurantId),
        categoriesService.getAll(user?.restaurantId),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setMainCategories(categoriesData.filter(c => !c.parentCategoryId));
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.categoryId) {
      alert('Veuillez sélectionner une catégorie');
      return;
    }
    try {
      // Préparer les images (filtrer les URLs vides)
      const images = imageUrls.filter(url => url.trim()).map((url, index) => ({
        url: url.trim(),
        isPrimary: index === 0,
        displayOrder: index,
      }));

      await productsService.create({
        ...formData,
        images: images.length > 0 ? images : undefined,
      });
      setShowForm(false);
      setFormData({ name: '', price: 0, categoryId: '', type: 'FOOD', isAvailable: true });
      setImageUrls(['']);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la création');
    }
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrl = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const updateImageUrl = (index: number, url: string) => {
    const newUrls = [...imageUrls];
    newUrls[index] = url;
    setImageUrls(newUrls);
  };

  const getSubcategories = (categoryId: string) => {
    return categories.filter(c => c.parentCategoryId === categoryId);
  };

  // Filtrer les catégories selon le type (FOOD ou DRINK)
  const getFilteredCategories = () => {
    if (formData.type === 'FOOD') {
      // Pour FOOD, exclure "Boissons"
      return mainCategories.filter(cat => 
        cat.name !== 'Boissons'
      );
    } else if (formData.type === 'DRINK') {
      // Pour DRINK, inclure seulement "Boissons"
      return mainCategories.filter(cat => 
        cat.name === 'Boissons'
      );
    }
    return mainCategories;
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      return;
    }
    try {
      await productsService.delete(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
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
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: 0 }}>Produits</h1>
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
          {showForm ? 'Annuler' : '+ Nouveau produit'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: isMobile ? '1rem' : '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Nouveau produit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
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
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Prix (€) *</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Type *</label>
            <select
              value={formData.type}
              onChange={(e) => {
                const newType = e.target.value as 'FOOD' | 'DRINK';
                // Réinitialiser la catégorie sélectionnée quand on change le type
                setFormData({ ...formData, type: newType, categoryId: '' });
              }}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <option value="FOOD">Nourriture</option>
              <option value="DRINK">Boisson</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Catégorie *</label>
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <option value="">Sélectionner une catégorie</option>
              {getFilteredCategories().map((cat) => {
                const subcategories = getSubcategories(cat.id);
                return (
                  <optgroup key={cat.id} label={cat.name}>
                    <option value={cat.id}>{cat.name} (Catégorie principale)</option>
                    {subcategories.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        └ {sub.name}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
              {/* Afficher aussi les catégories sans parent qui ne sont pas dans mainCategories (au cas où) */}
              {getFilteredCategories().length === 0 && categories.filter(c => !c.parentCategoryId && !mainCategories.find(mc => mc.id === c.id)).map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description courte</label>
            <input
              type="text"
              value={formData.shortDescription || ''}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              placeholder="Description courte (visible dans les listes)"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description complète</label>
            <textarea
              value={formData.fullDescription || ''}
              onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
              rows={4}
              placeholder="Description détaillée du produit"
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
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              📷 Images du produit (URLs) - La première sera l'image principale
            </label>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.75rem' }}>
              Vous pouvez ajouter plusieurs images. La première image sera utilisée comme image principale.
            </p>
            {imageUrls.map((url, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => updateImageUrl(index, e.target.value)}
                  placeholder={`URL de l'image ${index + 1}`}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
                {index === 0 && imageUrls.length > 1 && (
                  <span style={{ alignSelf: 'center', fontSize: '0.85rem', color: '#007bff' }}>Principale</span>
                )}
                {imageUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImageUrl(index)}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addImageUrl}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              + Ajouter une image
            </button>
            {imageUrls.some(url => url.trim()) && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Aperçu des images :</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {imageUrls.filter(url => url.trim()).map((url, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                        style={{
                          width: isMobile ? '120px' : '150px',
                          height: isMobile ? '120px' : '150px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: index === 0 ? '3px solid #007bff' : '2px solid #ddd',
                          boxShadow: index === 0 ? '0 2px 8px rgba(0,123,255,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                        }}
                      />
                      {index === 0 && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '4px',
                            left: '4px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                          }}
                        >
                          Principale
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={formData.isAvailable}
                onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
              />
              Disponible
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

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
        {products.length === 0 && (
          <Card style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
              Aucun produit pour le moment
            </p>
            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Créez votre premier produit ci-dessus
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}



