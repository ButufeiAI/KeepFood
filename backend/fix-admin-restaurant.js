/**
 * Script pour ajouter le restaurantId à l'utilisateur admin
 */

const axios = require('axios');

const API_URL = 'http://localhost:5201/api';
const RESTAURANT_ID = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d';

async function fixAdminUser() {
  console.log('\n============================================');
  console.log('  CORRECTION UTILISATEUR ADMIN');
  console.log('============================================\n');

  try {
    // Se connecter en tant qu'admin
    console.log('🔐 Connexion...\n');
    
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'leonard.anghe@gmail.com',
      password: 'Admin123!'
    });

    const { user, accessToken } = loginResponse.data;
    console.log('✅ Connecté:', user.email);
    console.log('   Restaurant actuel:', user.restaurantId || 'AUCUN');
    console.log('');

    // Créer un nouvel utilisateur avec le bon restaurantId
    // (L'API register permet de recréer avec les bonnes données)
    console.log('🔧 Mise à jour avec restaurantId...\n');

    try {
      // Essayer de créer directement via l'API auth
      const updateResponse = await axios.post(
        `${API_URL}/auth/register`,
        {
          email: 'leonard.anghe@gmail.com',
          password: 'Admin123!',
          firstName: 'Leonard',
          lastName: 'Anghe',
          phone: '+33612345678',
          role: 'SUPER_ADMIN',
          restaurantId: RESTAURANT_ID
        }
      );
      
      console.log('✅ Utilisateur mis à jour avec succès!\n');
    } catch (registerError) {
      if (registerError.response && registerError.response.status === 409) {
        console.log('ℹ️  L\'utilisateur existe déjà. Utilisons une autre méthode...\n');
        
        // Essayer via l'endpoint users (si disponible)
        console.log('Veuillez exécuter cette commande SQL manuellement:\n');
        console.log('psql -U postgres -d keepfood -c "UPDATE users SET \\"restaurantId\\" = \'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d\' WHERE email = \'leonard.anghe@gmail.com\'"\n');
        return;
      }
      throw registerError;
    }

    // Vérifier que ça fonctionne
    console.log('🧪 Test avec le nouveau restaurantId...\n');
    
    const newLoginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'leonard.anghe@gmail.com',
      password: 'Admin123!'
    });

    const newUser = newLoginResponse.data.user;
    const newToken = newLoginResponse.data.accessToken;

    console.log('📋 Nouvelles informations:');
    console.log('   Email:', newUser.email);
    console.log('   Restaurant ID:', newUser.restaurantId);
    console.log('');

    // Tester le dashboard
    const dashboardResponse = await axios.get(
      `${API_URL}/statistics/dashboard?restaurantId=${newUser.restaurantId}`,
      { headers: { Authorization: `Bearer ${newToken}` } }
    );

    console.log('✅ ============================================');
    console.log('  TOUT EST CORRIGÉ!');
    console.log('============================================\n');
    console.log('🎉 Le dashboard fonctionne maintenant!');
    console.log('📊 Stats:', Object.keys(dashboardResponse.data).join(', '));
    console.log('');
    console.log('Connectez-vous sur:');
    console.log('   http://localhost:5202/login\n');

  } catch (error) {
    console.error('\n❌ ERREUR:', error.response?.data?.message || error.message);
    console.log('\n💡 Essayez manuellement avec SQL:');
    console.log('psql -U postgres -d keepfood');
    console.log('UPDATE users SET "restaurantId" = \'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d\' WHERE email = \'leonard.anghe@gmail.com\';\n');
  }
}

fixAdminUser();
