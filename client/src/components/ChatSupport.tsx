import { useState, useEffect, useRef } from 'react';
import { useToast } from '../components/ToastContainer';
import { useIsMobile } from '../hooks/useIsMobile';
import io, { Socket } from 'socket.io-client';

interface Message {
  id: string;
  sender: 'client' | 'support';
  message: string;
  timestamp: string;
  read: boolean;
}

export function ChatSupport() {
  const toast = useToast();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Connexion au socket pour le chat
    socketRef.current = io('http://localhost:5201/chat');

    socketRef.current.on('connect', () => {
      console.log('[Chat] Connecté au serveur');
      setIsConnected(true);
    });

    socketRef.current.on('disconnect', () => {
      console.log('[Chat] Déconnecté du serveur');
      setIsConnected(false);
    });

    socketRef.current.on('message', (data: Message) => {
      setMessages((prev) => [...prev, data]);
      setIsTyping(false);
    });

    socketRef.current.on('typing', () => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 3000);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim() || !socketRef.current) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'client',
      message: inputMessage.trim(),
      timestamp: new Date().toISOString(),
      read: false,
    };

    socketRef.current.emit('message', message);
    setMessages((prev) => [...prev, message]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (value: string) => {
    setInputMessage(value);
    if (socketRef.current) {
      socketRef.current.emit('typing');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: isMobile ? '1rem' : '2rem',
          right: isMobile ? '1rem' : '2rem',
          width: isMobile ? '56px' : '64px',
          height: isMobile ? '56px' : '64px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          fontSize: isMobile ? '1.5rem' : '2rem',
          zIndex: 9999,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = 'scale(1)')}
        title="Ouvrir le chat support"
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isMobile ? 0 : '2rem',
        right: isMobile ? 0 : '2rem',
        width: isMobile ? '100%' : '400px',
        height: isMobile ? '100%' : '600px',
        backgroundColor: '#fff',
        borderRadius: isMobile ? '0' : '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Support KeepFood</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>
            {isConnected ? '🟢 En ligne' : '🔴 Hors ligne'}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0',
            width: '32px',
            height: '32px',
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
        }}
      >
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
            <p style={{ margin: 0 }}>Bienvenue ! Comment pouvons-nous vous aider ?</p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'client' ? 'flex-end' : 'flex-start',
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                maxWidth: '75%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                backgroundColor: msg.sender === 'client' ? '#007bff' : '#fff',
                color: msg.sender === 'client' ? '#fff' : '#333',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <p style={{ margin: '0 0 0.25rem 0', wordBreak: 'break-word' }}>{msg.message}</p>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {new Date(msg.timestamp).toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Le support est en train d'écrire...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '1rem',
          borderTop: '1px solid #e9ecef',
          backgroundColor: '#fff',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Écrivez votre message..."
            disabled={!isConnected}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || !isConnected}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: inputMessage.trim() && isConnected ? '#007bff' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: inputMessage.trim() && isConnected ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

