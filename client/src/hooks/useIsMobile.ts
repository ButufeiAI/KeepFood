import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour détecter si l'écran est mobile
 * @param breakpoint - Largeur en pixels pour considérer comme mobile (défaut: 768px)
 * @returns boolean - true si la largeur de l'écran est inférieure au breakpoint
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakpoint);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Nettoyage
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  
  return isMobile;
};

