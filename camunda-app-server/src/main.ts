import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { keycloak } from '@/share';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(keycloak.middleware());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
