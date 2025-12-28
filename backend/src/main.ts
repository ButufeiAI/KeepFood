import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS configuration - Accepter les requêtes depuis localhost et l'IP locale
  const getLocalIP = () => {
    const os = require('os');
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
    return 'localhost';
  };
  
  const localIP = getLocalIP();
  const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:5202',
    process.env.MARKETING_URL || 'http://localhost:5200',
    process.env.CLIENT_URL || 'http://localhost:5203',
    `http://${localIP}:5202`,
    `http://${localIP}:5200`,
    `http://${localIP}:5203`,
  ];
  
  app.enableCors({
    origin: (origin, callback) => {
      // Permettre les requêtes sans origine (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      // Vérifier si l'origine est autorisée
      if (allowedOrigins.includes(origin) || origin.includes(`:5202`) || origin.includes(`:5200`) || origin.includes(`:5203`)) {
        callback(null, true);
      } else {
        callback(null, true); // En développement, accepter toutes les origines
      }
    },
    credentials: true,
  });

  // Global prefix for API routes
  app.setGlobalPrefix('api');

  // Cookie parser
  app.use(cookieParser());

  // Global validation pipe
      app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true,
          exceptionFactory: (errors) => {
            const messages = errors.map(error => 
              Object.values(error.constraints || {}).join(', ')
            );
            return new BadRequestException(messages.join('; '));
          },
        }),
      );
      
      // Logger les erreurs non gérées
      process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      });
      
      process.on('uncaughtException', (error) => {
        console.error('Uncaught Exception:', error);
      });

  const port = process.env.PORT || 5201;
  const host = process.env.HOST || '0.0.0.0'; // Écouter sur toutes les interfaces
  await app.listen(port, host);
  console.log(`🚀 KeepFood API is running on:`);
  console.log(`   - Local:   http://localhost:${port}/api`);
  console.log(`   - Network: http://${localIP}:${port}/api`);
}
bootstrap();

