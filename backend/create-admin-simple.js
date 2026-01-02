/**
 * Script simple pour créer l'utilisateur admin
 * Usage: node create-admin-simple.js
 */

const axios = require('axios');

const API_URL = 'http://localhost:5201/api';

const adminUser = {
  email: 'leonard.anghe@gmail.com',
  password: 'Admin123!',
  firstName: 'Leonard',
  lastName: 'Anghe',
  phone: '+33612345678',
  role: 'SUPER_ADMIN'
};

console.log('\n============================================');
console.log('  KEEPFOOD - CRÉATION UTILISATEUR ADMIN');
console.log('============================================\n');

console.log('📋 Création de l\'utilisateur...');
console.log('   Email:', adminUser.email);
console.log('   Nom:', adminUser.firstName, adminUser.lastName);
console.log('   Rôle:', adminUser.role);
console.log('');

axios.post(`${API_URL}/auth/register`, adminUser)
  .then(response => {
    console.log('✅ ============================================');
    console.log('  UTILISATEUR CRÉÉ AVEC SUCCÈS!');
    console.log('============================================\n');
    console.log('Informations de connexion:');
    console.log('   📧 Email:', adminUser.email);
    console.log('   🔑 Mot de passe:', adminUser.password);
    console.log('   👤 Rôle:', adminUser.role);
    console.log('\nConnectez-vous sur:');
    console.log('   🌐 http://localhost:5202/login\n');
  })
  .catch(error => {
    console.error('\n❌ ERREUR:\n');
    
    if (error.response) {
      console.error('Statut:', error.response.status);
      console.error('Message:', error.response.data.message || error.response.data);
      
      if (error.response.status === 409 || error.response.status === 400) {
        console.log('\n💡 L\'email existe déjà ou il y a une erreur de validation.');
        console.log('   Essayez de vous connecter avec:');
        console.log('   📧 Email:', adminUser.email);
        console.log('   🔑 Mot de passe:', adminUser.password);
        console.log('\n   Si vous avez oublié le mot de passe, utilisez la fonction "Mot de passe oublié".\n');
      }
    } else if (error.request) {
      console.error('❌ Impossible de contacter le serveur.');
      console.error('Vérifiez que le backend est démarré:');
      console.error('   cd backend');
      console.error('   npm run start:dev');
      console.error('\nOu vérifiez l\'URL:', API_URL, '\n');
    } else {
      console.error(error.message);
    }
  });
