import { Injectable } from '@nestjs/common';
import Redlock, { ResourceLockedError } from 'redlock';
import { setTimeout } from 'timers/promises';
import { RedisManager } from '../manager/redis.manager';

@Injectable()
export class RedisRedLockProvider {
  private redLock: Redlock;

  constructor(private readonly redisManager: RedisManager) {
    const redisClient = this.redisManager.getClient();
    this.redLock = new Redlock([redisClient], {
      // driftFactor: 0.01, // clock drift를 보상하기 위해 driftTime 지정에 사용되는 요소, 해당 값과 아래 ttl값을 곱하여 사용.
      // retryCount: 1, // 에러 전까지 재시도 최대 횟수
      // retryDelay: 200, // 각 시도간의 간격
      // retryJitter: 200, // 재시도시 더해지는 되는 쵀대 시간(ms)
      // automaticExtensionThreshold: 500, // lock 연장 전에 남아야 하는 최소 시간(ms)
    });

    this.redLock.on('error', (err) => {
      // Ignore cases where a resource is explicitly marked as locked on a client.
      if (err instanceof ResourceLockedError) {
        console.log(`RED LOCKED ${err}`);
        return;
      }
      console.log(`RED LOCK ERROR ${err}`);
    });
  }

  async setLock(
    resource: string[],
    duration: number,
    action: () => Promise<void>,
  ): Promise<void> {
    const lock = await this.redLock.acquire(resource, duration);
    try {
      await action();
      await setTimeout(2000, '');
      await lock.release();
    } catch (error) {
      throw error;
    } finally {
      if (!lock) return;
    }
  }
}
