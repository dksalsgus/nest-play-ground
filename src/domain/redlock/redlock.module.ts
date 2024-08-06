import { Module } from '@nestjs/common';
import { RedisModule } from 'src/infra/redis/redis.module';
import { RedLockController } from './controller/redlock.controller';

@Module({
  imports: [RedisModule],
  providers: [],
  exports: [],
  controllers: [RedLockController],
})
export class RedLockModule {}
