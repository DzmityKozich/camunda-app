import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard, RolesGuard } from '@share/guards';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CamundaModule } from './camunda-api';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CamundaModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
