import { AxiosError } from 'axios';

/**
 * Gère les erreurs API de manière centralisée
 * @param error - L'erreur à traiter
 * @param showToast - Fonction optionnelle pour afficher un toast (si disponible)
 * @returns Message d'erreur formaté
 */
export const handleApiError = (error: any, showToast?: (message: string, type: 'error') => void): string => {
  let message = 'Une erreur est survenue';

  if (error.response) {
    // Erreur avec réponse du serveur
    const status = error.response.status;
    
    switch (status) {
      case 400:
        message = error.response.data?.message || 'Requête invalide';
        break;
      case 401:
        message = 'Session expirée. Veuillez vous reconnecter';
        // Rediriger vers login si nécessaire
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
        }
        break;
      case 403:
        message = 'Accès non autorisé';
        break;
      case 404:
        message = error.response.data?.message || 'Ressource non trouvée';
        break;
      case 409:
        message = error.response.data?.message || 'Conflit avec les données existantes';
        break;
      case 422:
        message = error.response.data?.message || 'Données invalides';
        break;
      case 500:
        message = 'Erreur serveur. Veuillez réessayer plus tard';
        break;
      case 503:
        message = 'Service temporairement indisponible';
        break;
      default:
        message = error.response.data?.message || `Erreur ${status}`;
    }
  } else if (error.request) {
    // Erreur réseau (pas de réponse)
    message = 'Erreur de connexion. Vérifiez votre connexion internet';
  } else {
    // Autre type d'erreur
    message = error.message || 'Une erreur inattendue est survenue';
  }

  // Afficher le toast si la fonction est fournie
  if (showToast) {
    showToast(message, 'error');
  }

  // Logger l'erreur en développement
  if (process.env.NODE_ENV === 'development') {
    console.error('API Error:', error);
  }

  return message;
};

/**
 * Gère les erreurs de validation de formulaire
 */
export const handleValidationError = (errors: Record<string, string[]>): string => {
  const firstError = Object.values(errors)[0];
  return firstError?.[0] || 'Erreur de validation';
};

/**
 * Vérifie si une erreur est une erreur réseau
 */
export const isNetworkError = (error: any): boolean => {
  return error.request && !error.response;
};

/**
 * Vérifie si une erreur est une erreur d'authentification
 */
export const isAuthError = (error: any): boolean => {
  return error.response?.status === 401 || error.response?.status === 403;
};

/**
 * Retry une fonction en cas d'erreur réseau
 */
export const retryOnNetworkError = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: any;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      if (!isNetworkError(error) || i === maxRetries - 1) {
        throw error;
      }
      
      // Attendre avant de réessayer (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
  
  throw lastError;
};

