import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { publicService } from '../services/public.service';
import { useCartStore } from '../stores/cart.store';
import { useClientStore } from '../stores/client.store';
import { useAuthStore } from '../stores/auth.store';

export function Order() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setRestaurant, setTableSession } = useCartStore();
  const { generateIdentifier } = useClientStore();
  const { checkAuth } = useAuthStore();

  const tableId = searchParams.get('tableId');
  const restaurantId = searchParams.get('restaurantId');

  useEffect(() => {
    // Vérifier l'authentification si un token existe
    checkAuth();
    // Générer un identifiant client s'il n'existe pas encore (pour les commandes anonymes)
    generateIdentifier();

    const initializeSession = async () => {
      if (tableId && restaurantId) {
        try {
          // Récupérer les infos de la table
          await publicService.getTable(tableId);
          
          // Créer ou récupérer une session de table active
          const session = await publicService.getOrCreateTableSession(tableId, restaurantId);
          
          setRestaurant(restaurantId, tableId);
          setTableSession(session.id);
          
          navigate(`/menu/${restaurantId}/${tableId}`, { replace: true });
        } catch (error) {
          console.error('Erreur lors du chargement de la table:', error);
          // Rediriger vers le menu même en cas d'erreur
          setRestaurant(restaurantId);
          navigate(`/menu/${restaurantId}`, { replace: true });
        }
      } else if (restaurantId) {
        setRestaurant(restaurantId);
        navigate(`/menu/${restaurantId}`, { replace: true });
      } else {
        // Si aucun paramètre, afficher un message
        navigate('/', { replace: true });
      }
    };

    initializeSession();
  }, [tableId, restaurantId, navigate, setRestaurant, setTableSession, generateIdentifier, checkAuth]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Chargement...</p>
    </div>
  );
}

