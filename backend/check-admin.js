/**
 * Script pour vérifier et corriger le restaurantId de l'admin
 */

const axios = require('axios');

const API_URL = 'http://localhost:5201/api';

async function checkAndFix() {
  console.log('\n============================================');
  console.log('  VÉRIFICATION UTILISATEUR ADMIN');
  console.log('============================================\n');

  try {
    // Tenter de se connecter
    console.log('🔐 Connexion avec leonard.anghe@gmail.com...\n');
    
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'leonard.anghe@gmail.com',
      password: 'Admin123!'
    });

    const { user, accessToken } = loginResponse.data;

    console.log('✅ Connexion réussie!\n');
    console.log('📋 Informations utilisateur:');
    console.log('   Email:', user.email);
    console.log('   Nom:', user.firstName, user.lastName);
    console.log('   Rôle:', user.role);
    console.log('   Restaurant ID:', user.restaurantId || '❌ MANQUANT');
    console.log('');

    if (!user.restaurantId) {
      console.log('⚠️  PROBLÈME DÉTECTÉ: RestaurantId manquant!');
      console.log('   Cela explique l\'erreur 400 sur le dashboard.\n');
      console.log('💡 SOLUTION: Exécutez le script SQL:');
      console.log('   psql -U postgres -d keepfood -f backend/check-and-fix-admin.sql\n');
      return;
    }

    // Tester l'appel au dashboard
    console.log('🧪 Test appel dashboard...\n');
    
    const dashboardResponse = await axios.get(
      `${API_URL}/statistics/dashboard?restaurantId=${user.restaurantId}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    console.log('✅ Dashboard fonctionne!');
    console.log('📊 Statistiques reçues:', Object.keys(dashboardResponse.data));
    console.log('');
    console.log('🎉 Tout est OK! Vous pouvez vous connecter sur:');
    console.log('   http://localhost:5202/login\n');

  } catch (error) {
    if (error.response) {
      console.error('❌ ERREUR:', error.response.status, error.response.data.message || error.response.data);
      
      if (error.response.status === 400) {
        console.log('\n💡 L\'erreur 400 est probablement due au restaurantId manquant.');
        console.log('   Exécutez: psql -U postgres -d keepfood -f backend/check-and-fix-admin.sql\n');
      } else if (error.response.status === 401) {
        console.log('\n💡 Le mot de passe est incorrect.');
        console.log('   Vérifiez: Admin123!\n');
      }
    } else {
      console.error('❌ ERREUR:', error.message);
      console.log('\n💡 Vérifiez que le backend est démarré sur:', API_URL, '\n');
    }
  }
}

checkAndFix();
