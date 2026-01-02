import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './src/entities/user.entity';

// Charger les variables d'environnement
dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'keepfood',
  entities: ['src/entities/*.entity.ts'],
  synchronize: false,
});

async function fixAdminRestaurant() {
  console.log('\n============================================');
  console.log('  CORRECTION RESTAURANTID ADMIN');
  console.log('============================================\n');

  try {
    await AppDataSource.initialize();
    console.log('✅ Connexion à la base de données établie\n');

    const userRepository = AppDataSource.getRepository(User);

    // Trouver l'utilisateur admin
    const adminUser = await userRepository.findOne({
      where: { email: 'leonard.anghe@gmail.com' }
    });

    if (!adminUser) {
      console.error('❌ Utilisateur admin non trouvé!');
      console.log('   Exécutez d\'abord: node create-admin-simple.js\n');
      await AppDataSource.destroy();
      return;
    }

    console.log('📋 Utilisateur trouvé:');
    console.log('   Email:', adminUser.email);
    console.log('   Nom:', adminUser.firstName, adminUser.lastName);
    console.log('   Rôle:', adminUser.role);
    console.log('   Restaurant actuel:', adminUser.restaurantId || 'AUCUN');
    console.log('');

    // Mettre à jour le restaurantId
    adminUser.restaurantId = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d';
    await userRepository.save(adminUser);

    console.log('✅ ============================================');
    console.log('  RESTAURANTID MIS À JOUR!');
    console.log('============================================\n');
    console.log('   Email:', adminUser.email);
    console.log('   Restaurant ID:', adminUser.restaurantId);
    console.log('');
    console.log('🎉 Vous pouvez maintenant vous connecter:');
    console.log('   http://localhost:5202/login');
    console.log('');
    console.log('   Email: leonard.anghe@gmail.com');
    console.log('   Pass: Admin123!\n');

    await AppDataSource.destroy();

  } catch (error) {
    console.error('❌ ERREUR:', error.message);
    console.log('\nVérifiez:');
    console.log('   - Que PostgreSQL est démarré');
    console.log('   - Les paramètres de connexion dans backend/.env');
    console.log('   - Que la base de données "keepfood" existe\n');
  }
}

fixAdminRestaurant();
