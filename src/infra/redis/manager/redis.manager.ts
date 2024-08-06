import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisManager {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: 'localhost',
      port: 6379,
      lazyConnect: true,
    });
    this.client.on('connect', () => {
      console.log('redis connect');
    });

    this.client.on('error', (err) => {
      console.log(`redis error ${err}`);
    });
  }

  getClient(): Redis {
    return this.client;
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }
}
