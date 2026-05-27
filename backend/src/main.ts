import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ManufacturerRbacMiddleware } from './common/middleware/manufacturer-rbac.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global API prefix
  app.setGlobalPrefix('api');

  // Non-invasive RBAC layer for Manufacturer-only endpoints:
  // Blocks with 403 if req.user.role !== 'manufacturer'
  const manufacturerMiddleware = new ManufacturerRbacMiddleware();
  app.use('/api/production-orders', manufacturerMiddleware.use.bind(manufacturerMiddleware));
  app.use('/api/purchase-orders', manufacturerMiddleware.use.bind(manufacturerMiddleware));
  app.use('/api/suppliers', manufacturerMiddleware.use.bind(manufacturerMiddleware));

  await app.listen(process.env.PORT ?? 3000);
  console.log('Factoryze ERP backend running on port 3000');
}
bootstrap();
