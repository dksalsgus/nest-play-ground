import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedLockModule } from './domain/redlock/redlock.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule, RedLockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
