import { useEffect, useState } from 'react';

/**
 * Hook pour débouncer une valeur (utile pour les recherches)
 * @param value - La valeur à débouncer
 * @param delay - Délai en millisecondes (défaut: 500ms)
 * @returns La valeur débouncée
 */
export const useDebounce = <T,>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Créer un timer qui met à jour la valeur après le délai
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Nettoyer le timer si la valeur change avant la fin du délai
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

