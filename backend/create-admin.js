/**
 * Script pour créer un utilisateur administrateur
 * Usage: node create-admin.js
 */

const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createAdminUser() {
  console.log('\n============================================');
  console.log('  KEEPFOOD - CRÉATION UTILISATEUR ADMIN');
  console.log('============================================\n');

  try {
    const apiUrl = await question('URL de l\'API (défaut: http://localhost:5201/api): ') || 'http://localhost:5201/api';
    
    console.log('\n📋 Informations de l\'utilisateur:\n');
    
    const email = await question('Email (défaut: leonard.anghe@gmail.com): ') || 'leonard.anghe@gmail.com';
    const password = await question('Mot de passe (défaut: Admin123!): ') || 'Admin123!';
    const firstName = await question('Prénom (défaut: Leonard): ') || 'Leonard';
    const lastName = await question('Nom (défaut: Anghe): ') || 'Anghe';
    const phone = await question('Téléphone (défaut: +33612345678): ') || '+33612345678';
    
    console.log('\n⏳ Création de l\'utilisateur...\n');

    // Créer l'utilisateur via l'API
    const response = await axios.post(`${apiUrl}/auth/register`, {
      email,
      password,
      firstName,
      lastName,
      phone,
      role: 'SUPER_ADMIN'
    });

    console.log('\n✅ ============================================');
    console.log('  UTILISATEUR CRÉÉ AVEC SUCCÈS!');
    console.log('============================================\n');
    console.log('📧 Email:', email);
    console.log('🔑 Mot de passe:', password);
    console.log('👤 Rôle: SUPER_ADMIN');
    console.log('\nVous pouvez maintenant vous connecter à:');
    console.log('   http://localhost:5202/login\n');

  } catch (error) {
    console.error('\n❌ ERREUR lors de la création de l\'utilisateur:\n');
    
    if (error.response) {
      console.error('Statut:', error.response.status);
      console.error('Message:', error.response.data.message || error.response.data);
      
      if (error.response.status === 409) {
        console.log('\n💡 Cet email existe déjà. Essayez de vous connecter.');
      }
    } else if (error.request) {
      console.error('Erreur de connexion au serveur.');
      console.error('Vérifiez que le backend est démarré sur:', apiUrl);
    } else {
      console.error(error.message);
    }
  } finally {
    rl.close();
  }
}

// Exécuter
createAdminUser();
