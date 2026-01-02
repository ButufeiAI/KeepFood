import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { loyaltyService, LoyaltyAccount, LoyaltyTransaction } from '../services/loyalty.service';
import { useClientStore } from '../stores/client.store';

export function LoyaltyHistory() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  // const [searchParams] = useSearchParams(); // Non utilisé
  const { identifier: clientIdentifier, generateIdentifier } = useClientStore();
  const [account, setAccount] = useState<LoyaltyAccount | null>(null);
  const [transactions, setTransactions] = useState<LoyaltyTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurantId && clientIdentifier) {
      loadData();
    } else if (restaurantId) {
      generateIdentifier();
    }
  }, [restaurantId, clientIdentifier]);

  const loadData = async () => {
    if (!restaurantId || !clientIdentifier) return;
    try {
      setLoading(true);
      const accountData = await loyaltyService.getMyAccount(restaurantId, clientIdentifier);
      setAccount(accountData);
      
      // Les transactions sont déjà dans account.transactions
      if (accountData.transactions) {
        setTransactions(accountData.transactions);
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: '600' }}>
        ⭐ Mon Programme de Fidélité
      </h1>

      {account && account.points > 0 ? (
        <>
          {/* Carte points */}
          <div style={{
            backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '2rem',
            color: 'white',
            marginBottom: '2rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>Vos points actuels</p>
              <h2 style={{ margin: '0.5rem 0 0 0', fontSize: '3rem', fontWeight: '700' }}>
                {account.points}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', opacity: 0.9 }}>
              <div>
                <p style={{ margin: 0 }}>Total gagnés</p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.25rem', fontWeight: '600' }}>
                  {account.totalPointsEarned}
                </p>
              </div>
              <div>
                <p style={{ margin: 0 }}>Total dépensés</p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.25rem', fontWeight: '600' }}>
                  {account.totalPointsSpent}
                </p>
              </div>
            </div>
          </div>

          {/* Historique */}
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Historique des transactions
            </h3>

            {transactions.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#6c757d', padding: '2rem' }}>
                Aucune transaction pour le moment
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      backgroundColor: transaction.type === 'EARNED' ? '#d4edda' : '#f8d7da',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 0.25rem 0', fontWeight: '500' }}>
                        {transaction.description}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6c757d' }}>
                        {new Date(transaction.createdAt).toLocaleString('fr-FR')}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{
                        margin: 0,
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: transaction.type === 'EARNED' ? '#28a745' : '#dc3545',
                      }}>
                        {transaction.type === 'EARNED' ? '+' : '-'}{Math.abs(transaction.points)} ⭐
                      </p>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#6c757d' }}>
                        Solde: {transaction.balanceAfter} ⭐
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '3rem',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐</p>
          <p style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '0.5rem' }}>
            Vous n'avez pas encore de points de fidélité
          </p>
          <p style={{ color: '#6c757d' }}>
            Commandez pour gagner des points et débloquer des récompenses !
          </p>
        </div>
      )}
    </div>
  );
}
