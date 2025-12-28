// Script simple pour réinitialiser le mot de passe d'un utilisateur
// Usage: node reset-password.js <email> <nouveauMotDePasse>

const axios = require('axios');

const email = process.argv[2];
const newPassword = process.argv[3];

if (!email || !newPassword) {
  console.error('Usage: node reset-password.js <email> <nouveauMotDePasse>');
  process.exit(1);
}

async function resetPassword() {
  try {
    const response = await axios.post('http://localhost:5201/api/auth/reset-password', {
      email: email,
      newPassword: newPassword,
    });
    
    console.log('✅ Mot de passe réinitialisé avec succès!');
    console.log('Email:', response.data.email);
  } catch (error) {
    console.error('❌ Erreur:', error.response?.data?.message || error.message);
    process.exit(1);
  }
}

resetPassword();

