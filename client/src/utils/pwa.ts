// Utilitaires PWA pour l'installation et les notifications

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

/**
 * Enregistrer le Service Worker
 */
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });
      console.log('[PWA] Service Worker enregistré:', registration);

      // Vérifier les mises à jour toutes les heures
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1000);

      return registration;
    } catch (error) {
      console.error('[PWA] Erreur d\'enregistrement du Service Worker:', error);
      return null;
    }
  }
  return null;
};

/**
 * Désactiver le Service Worker
 */
export const unregisterServiceWorker = async (): Promise<boolean> => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      return await registration.unregister();
    }
  }
  return false;
};

/**
 * Capturer l'événement beforeinstallprompt
 */
export const setupInstallPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    console.log('[PWA] Prompt d\'installation disponible');
  });
};

/**
 * Afficher le prompt d'installation
 */
export const showInstallPrompt = async (): Promise<boolean> => {
  if (!deferredPrompt) {
    console.warn('[PWA] Prompt d\'installation non disponible');
    return false;
  }

  try {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[PWA] Résultat de l\'installation:', outcome);
    deferredPrompt = null;
    return outcome === 'accepted';
  } catch (error) {
    console.error('[PWA] Erreur lors du prompt d\'installation:', error);
    return false;
  }
};

/**
 * Vérifier si l'app est installée
 */
export const isAppInstalled = (): boolean => {
  // Vérifier si l'app est en mode standalone (installée)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }
  // @ts-ignore - Safari
  if (window.navigator.standalone === true) {
    return true;
  }
  return false;
};

/**
 * Demander la permission pour les notifications push
 */
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    console.warn('[PWA] Les notifications ne sont pas supportées');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
};

/**
 * S'abonner aux notifications push
 */
export const subscribeToPushNotifications = async (
  registration: ServiceWorkerRegistration
): Promise<PushSubscription | null> => {
  try {
    // Clé publique VAPID (à remplacer par votre vraie clé)
    const vapidPublicKey = 'YOUR_PUBLIC_VAPID_KEY_HERE';
    
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
    });

    console.log('[PWA] Abonnement aux notifications:', subscription);
    return subscription;
  } catch (error) {
    console.error('[PWA] Erreur d\'abonnement aux notifications:', error);
    return null;
  }
};

/**
 * Se désabonner des notifications push
 */
export const unsubscribeFromPushNotifications = async (
  registration: ServiceWorkerRegistration
): Promise<boolean> => {
  try {
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      return await subscription.unsubscribe();
    }
    return false;
  } catch (error) {
    console.error('[PWA] Erreur de désabonnement:', error);
    return false;
  }
};

/**
 * Afficher une notification locale
 */
export const showNotification = async (
  title: string,
  options?: NotificationOptions
): Promise<void> => {
  if (!('Notification' in window)) {
    console.warn('[PWA] Les notifications ne sont pas supportées');
    return;
  }

  if (Notification.permission !== 'granted') {
    await requestNotificationPermission();
  }

  if (Notification.permission === 'granted') {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.showNotification(title, {
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        vibrate: [200, 100, 200],
        ...options,
      });
    } else {
      new Notification(title, options);
    }
  }
};

/**
 * Convertir une clé VAPID Base64 en Uint8Array
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Vérifier le statut de la connexion
 */
export const isOnline = (): boolean => {
  return navigator.onLine;
};

/**
 * Écouter les changements de connexion
 */
export const onConnectionChange = (callback: (online: boolean) => void): (() => void) => {
  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};

/**
 * Synchroniser en arrière-plan
 */
export const requestBackgroundSync = async (tag: string): Promise<void> => {
  if ('serviceWorker' in navigator && 'sync' in ServiceWorkerRegistration.prototype) {
    try {
      const registration = await navigator.serviceWorker.ready;
      // @ts-ignore - Background Sync API
      await registration.sync.register(tag);
      console.log('[PWA] Synchronisation en arrière-plan demandée:', tag);
    } catch (error) {
      console.error('[PWA] Erreur de synchronisation:', error);
    }
  }
};

