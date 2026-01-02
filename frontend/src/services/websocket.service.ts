import { io, Socket } from 'socket.io-client';

const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    return envUrl;
  }
  
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:5201/api';
  }
  
  const hostname = window.location.hostname;
  const port = '5201';
  return `http://${hostname}:${port}/api`;
};

class WebSocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000; // 1 seconde
  private isConnecting = false;
  private listeners: Map<string, Set<Function>> = new Map();

  private getSocketUrl(): string {
    const apiUrl = getApiUrl();
    // Convertir http://localhost:5201/api en http://localhost:5201
    // socket.io gère automatiquement le protocole ws/wss
    return apiUrl.replace('/api', '');
  }

  connect(token?: string): Socket | null {
    if (this.socket?.connected) {
      return this.socket;
    }

    if (this.isConnecting) {
      return this.socket;
    }

    this.isConnecting = true;
    const socketUrl = this.getSocketUrl();

    try {
      this.socket = io(socketUrl, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionDelay: this.reconnectDelay,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: this.maxReconnectAttempts,
        auth: token ? { token } : undefined,
      });

      this.setupEventHandlers();
      this.isConnecting = false;
      return this.socket;
    } catch (error) {
      console.error('Erreur connexion WebSocket:', error);
      this.isConnecting = false;
      return null;
    }
  }

  private setupEventHandlers() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('✅ WebSocket connecté:', this.socket?.id);
      this.reconnectAttempts = 0;
      this.reconnectDelay = 1000;
      
      // Réinscrire tous les listeners
      this.listeners.forEach((callbacks, event) => {
        callbacks.forEach(callback => {
          this.socket?.on(event, callback as any);
        });
      });
    });

    this.socket.on('disconnect', (reason) => {
      console.warn('⚠️ WebSocket déconnecté:', reason);
      
      if (reason === 'io server disconnect') {
        // Le serveur a forcé la déconnexion, reconnecter manuellement
        this.socket?.connect();
      }
    });

    this.socket.on('connect_error', (error) => {
      console.error('❌ Erreur connexion WebSocket:', error.message);
      this.reconnectAttempts++;
      
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectDelay = Math.min(this.reconnectDelay * 2, 5000);
        console.log(`Tentative de reconnexion ${this.reconnectAttempts}/${this.maxReconnectAttempts} dans ${this.reconnectDelay}ms...`);
      } else {
        console.error('Nombre maximum de tentatives de reconnexion atteint');
      }
    });

    this.socket.on('reconnect', (attemptNumber) => {
      console.log(`✅ WebSocket reconnecté après ${attemptNumber} tentatives`);
      this.reconnectAttempts = 0;
      this.reconnectDelay = 1000;
    });

    this.socket.on('reconnect_attempt', (attemptNumber) => {
      console.log(`🔄 Tentative de reconnexion ${attemptNumber}/${this.maxReconnectAttempts}...`);
    });

    this.socket.on('reconnect_failed', () => {
      console.error('❌ Échec de la reconnexion WebSocket');
    });
  }

  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)?.add(callback);

    if (this.socket) {
      this.socket.on(event, callback as any);
    }
  }

  off(event: string, callback?: Function) {
    if (callback) {
      this.listeners.get(event)?.delete(callback);
      if (this.socket) {
        this.socket.off(event, callback as any);
      }
    } else {
      this.listeners.delete(event);
      if (this.socket) {
        this.socket.off(event);
      }
    }
  }

  emit(event: string, data?: any) {
    if (this.socket?.connected) {
      this.socket.emit(event, data);
    } else {
      console.warn('WebSocket non connecté, impossible d\'émettre:', event);
    }
  }

  joinRoom(room: string, data?: any) {
    if (room.startsWith('order-')) {
      this.emit('joinOrder', room.replace('order-', ''));
    } else if (room.startsWith('restaurant-')) {
      this.emit('joinRestaurant', room.replace('restaurant-', ''));
    }
  }

  leaveRoom(room: string) {
    if (room.startsWith('order-')) {
      this.emit('leaveOrder', room.replace('order-', ''));
    } else if (room.startsWith('restaurant-')) {
      this.emit('leaveRestaurant', room.replace('restaurant-', ''));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.listeners.clear();
      this.reconnectAttempts = 0;
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  reconnect() {
    if (this.socket) {
      this.socket.connect();
    } else {
      this.connect();
    }
  }
}

export const websocketService = new WebSocketService();
