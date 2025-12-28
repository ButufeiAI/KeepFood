import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { publicService } from '../services/public.service';
import { useCartStore } from '../stores/cart.store';

export function Order() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setRestaurant } = useCartStore();

  const tableId = searchParams.get('tableId');
  const restaurantId = searchParams.get('restaurantId');

  useEffect(() => {
    if (tableId && restaurantId) {
      // Récupérer les infos de la table et rediriger vers le menu
      publicService
        .getTable(tableId)
        .then((table) => {
          setRestaurant(restaurantId, tableId);
          navigate(`/menu/${restaurantId}/${tableId}`, { replace: true });
        })
        .catch((error) => {
          console.error('Erreur lors du chargement de la table:', error);
          // Rediriger vers le menu même en cas d'erreur
          setRestaurant(restaurantId);
          navigate(`/menu/${restaurantId}`, { replace: true });
        });
    } else if (restaurantId) {
      setRestaurant(restaurantId);
      navigate(`/menu/${restaurantId}`, { replace: true });
    } else {
      // Si aucun paramètre, afficher un message
      navigate('/menu', { replace: true });
    }
  }, [tableId, restaurantId, navigate, setRestaurant]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Chargement...</p>
    </div>
  );
}

