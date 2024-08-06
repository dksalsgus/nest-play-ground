import { Module } from '@nestjs/common';
import { RedisManager } from './manager/redis.manager';
import { RedisRedLockProvider } from './provider/redis-red-lock.provider';

@Module({
  imports: [],
  providers: [
    {
      provide: RedisManager,
      useFactory: async () => {
        const redis = new RedisManager();
        await redis.connect();
        return redis;
      },
    },
    RedisRedLockProvider,
  ],
  exports: [RedisRedLockProvider],
})
export class RedisModule {}
