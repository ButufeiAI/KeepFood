import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

async function cleanup() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'keepfood',
    entities: [],
    synchronize: false,
  });

  try {
    await dataSource.initialize();
    console.log('✅ Connexion à la base de données établie');

    // Utiliser des requêtes SQL directes pour éviter les problèmes d'entités
    const queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    
    try {
      // Supprimer tous les restaurants
      const restaurantResult = await queryRunner.query('SELECT COUNT(*) as count FROM restaurants');
      const restaurantCount = parseInt(restaurantResult[0].count);
      
      if (restaurantCount > 0) {
        await queryRunner.query('DELETE FROM restaurants');
        console.log(`✅ ${restaurantCount} restaurants supprimés`);
      } else {
        console.log('ℹ️  Aucun restaurant à supprimer');
      }

      // Supprimer tous les utilisateurs orphelins (sans restaurant)
      const orphanResult = await queryRunner.query('SELECT COUNT(*) as count FROM users WHERE "restaurantId" IS NULL');
      const orphanCount = parseInt(orphanResult[0].count);
      
      if (orphanCount > 0) {
        await queryRunner.query('DELETE FROM users WHERE "restaurantId" IS NULL');
        console.log(`✅ ${orphanCount} utilisateurs orphelins supprimés`);
      } else {
        console.log('ℹ️  Aucun utilisateur orphelin à supprimer');
      }

      console.log('🎉 Nettoyage terminé !');
    } finally {
      await queryRunner.release();
    }
  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
  } finally {
    await dataSource.destroy();
  }
}

cleanup();

