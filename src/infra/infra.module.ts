import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';

@Module({ imports: [RedisModule], providers: [], exports: [RedisModule] })
export class InfraModule {}
