/**
 * Service d'analytics pour tracker les événements utilisateur
 */

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  timestamp?: Date;
}

class AnalyticsService {
  private isEnabled: boolean;
  private userId: string | null = null;

  constructor() {
    // Activer analytics seulement en production
    this.isEnabled = import.meta.env.PROD;
  }

  /**
   * Initialiser l'analytics avec un ID utilisateur
   */
  setUserId(userId: string | null) {
    this.userId = userId;
    
    if (this.isEnabled && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
      });
    }
  }

  /**
   * Tracker un événement
   */
  trackEvent(eventName: string, properties?: Record<string, any>) {
    if (!this.isEnabled) {
      console.log('[Analytics - DEV]', eventName, properties);
      return;
    }

    const event: AnalyticsEvent = {
      eventName,
      properties: {
        ...properties,
        userId: this.userId,
      },
      timestamp: new Date(),
    };

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, event.properties);
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('trackCustom', eventName, event.properties);
    }

    // Mixpanel
    if (window.mixpanel) {
      window.mixpanel.track(eventName, event.properties);
    }

    console.log('[Analytics]', event);
  }

  /**
   * Tracker une page vue
   */
  trackPageView(path: string, title?: string) {
    this.trackEvent('page_view', {
      page_path: path,
      page_title: title || document.title,
    });
  }

  // ===== Événements E-commerce =====

  /**
   * Produit ajouté au panier
   */
  trackAddToCart(product: {
    id: string;
    name: string;
    price: number;
    category?: string;
    variant?: string;
    quantity?: number;
  }) {
    this.trackEvent('add_to_cart', {
      currency: 'EUR',
      value: product.price * (product.quantity || 1),
      items: [{
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        item_variant: product.variant,
        price: product.price,
        quantity: product.quantity || 1,
      }],
    });
  }

  /**
   * Produit retiré du panier
   */
  trackRemoveFromCart(product: {
    id: string;
    name: string;
    price: number;
    quantity?: number;
  }) {
    this.trackEvent('remove_from_cart', {
      currency: 'EUR',
      value: product.price * (product.quantity || 1),
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity || 1,
      }],
    });
  }

  /**
   * Début du checkout
   */
  trackBeginCheckout(cart: {
    total: number;
    items: Array<{
      id: string;
      name: string;
      price: number;
      quantity: number;
    }>;
  }) {
    this.trackEvent('begin_checkout', {
      currency: 'EUR',
      value: cart.total,
      items: cart.items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }

  /**
   * Achat complété
   */
  trackPurchase(order: {
    id: string;
    total: number;
    orderType: string;
    items: Array<{
      id: string;
      name: string;
      price: number;
      quantity: number;
    }>;
  }) {
    this.trackEvent('purchase', {
      transaction_id: order.id,
      currency: 'EUR',
      value: order.total,
      order_type: order.orderType,
      items: order.items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }

  // ===== Événements de recherche =====

  trackSearch(query: string, resultsCount?: number) {
    this.trackEvent('search', {
      search_term: query,
      results_count: resultsCount,
    });
  }

  // ===== Événements de favoris =====

  trackAddToFavorites(productId: string, productName: string) {
    this.trackEvent('add_to_favorites', {
      product_id: productId,
      product_name: productName,
    });
  }

  trackRemoveFromFavorites(productId: string, productName: string) {
    this.trackEvent('remove_from_favorites', {
      product_id: productId,
      product_name: productName,
    });
  }

  // ===== Événements d'authentification =====

  trackLogin(method: string = 'email') {
    this.trackEvent('login', {
      method,
    });
  }

  trackSignup(method: string = 'email') {
    this.trackEvent('sign_up', {
      method,
    });
  }

  trackLogout() {
    this.trackEvent('logout', {});
    this.setUserId(null);
  }

  // ===== Événements de menu =====

  trackViewMenu(restaurantId: string, restaurantName: string) {
    this.trackEvent('view_menu', {
      restaurant_id: restaurantId,
      restaurant_name: restaurantName,
    });
  }

  trackViewProduct(product: {
    id: string;
    name: string;
    price: number;
    category?: string;
  }) {
    this.trackEvent('view_item', {
      currency: 'EUR',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
      }],
    });
  }

  // ===== Événements de QR code =====

  trackScanQRCode(tableId: string, restaurantId: string) {
    this.trackEvent('scan_qr_code', {
      table_id: tableId,
      restaurant_id: restaurantId,
    });
  }

  // ===== Événements d'erreur =====

  trackError(error: Error, context?: string) {
    this.trackEvent('error', {
      error_message: error.message,
      error_stack: error.stack,
      context,
    });
  }
}

// Export singleton
export const analytics = new AnalyticsService();

// Types globaux pour window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    mixpanel?: {
      track: (eventName: string, properties?: any) => void;
      identify: (userId: string) => void;
    };
  }
}

