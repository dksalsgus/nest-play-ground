import { Controller, Post } from '@nestjs/common';
import { RedisRedLockProvider } from '../../../infra/redis/provider/redis-red-lock.provider';

@Controller({ path: 'redlock' })
export class RedLockController {
  constructor(private readonly redisRedLockProvider: RedisRedLockProvider) {}

  @Post()
  async redlock(): Promise<void> {
    await this.redisRedLockProvider.setLock(
      ['test-lock-2'],
      5000,
      async () => {},
    );
  }
}
