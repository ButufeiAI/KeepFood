import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { authService } from '../services/auth.service';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      // Si déjà authentifié, on peut continuer
      if (isAuthenticated) {
        setIsLoading(false);
        return;
      }

      // Vérifier si un token existe
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setShouldRedirect(true);
        setIsLoading(false);
        return;
      }

      // Essayer de récupérer le profil utilisateur
      try {
        const user = await authService.getProfile();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        // Si la récupération du profil échoue, rediriger vers login
        console.error('Erreur lors de la récupération du profil:', error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setShouldRedirect(true);
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [isAuthenticated, setUser]);

  if (isLoading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>;
  }

  if (shouldRedirect || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}



