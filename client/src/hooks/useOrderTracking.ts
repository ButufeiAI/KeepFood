import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export type OrderStatus = 'PENDING' | 'IN_PREPARATION' | 'READY' | 'COMPLETED' | 'CANCELLED' | 'PAID';

interface OrderUpdate {
  orderId: string;
  status: OrderStatus;
  timestamp: string;
  message?: string;
}

/**
 * Hook pour suivre une commande en temps réel via WebSocket
 * @param orderId - ID de la commande à suivre
 * @returns status et lastUpdate
 */
export const useOrderTracking = (orderId: string | null) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [status, setStatus] = useState<OrderStatus>('PENDING');
  const [lastUpdate, setLastUpdate] = useState<OrderUpdate | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) return;

    // Créer la connexion WebSocket
    const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5201';
    const socketInstance = io(backendUrl, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    setSocket(socketInstance);

    // Événements de connexion
    socketInstance.on('connect', () => {
      console.log('WebSocket connecté');
      setIsConnected(true);
      setError(null);
      // Rejoindre la room de la commande
      socketInstance.emit('joinOrder', orderId);
    });

    socketInstance.on('disconnect', () => {
      console.log('WebSocket déconnecté');
      setIsConnected(false);
    });

    socketInstance.on('connect_error', (err) => {
      console.error('Erreur de connexion WebSocket:', err);
      setError('Erreur de connexion au serveur');
      setIsConnected(false);
    });

    // Écouter les mises à jour de commande
    socketInstance.on('orderUpdate', (data: OrderUpdate) => {
      console.log('Mise à jour commande:', data);
      setStatus(data.status);
      setLastUpdate(data);
    });

    // Écouter les changements de statut spécifiques
    socketInstance.on('orderStatusChanged', (data: { status: OrderStatus; message?: string }) => {
      console.log('Statut changé:', data);
      setStatus(data.status);
    });

    // Nettoyage
    return () => {
      if (socketInstance) {
        socketInstance.emit('leaveOrder', orderId);
        socketInstance.off('connect');
        socketInstance.off('disconnect');
        socketInstance.off('connect_error');
        socketInstance.off('orderUpdate');
        socketInstance.off('orderStatusChanged');
        socketInstance.disconnect();
      }
    };
  }, [orderId]);

  return {
    status,
    lastUpdate,
    isConnected,
    error,
    socket,
  };
};

