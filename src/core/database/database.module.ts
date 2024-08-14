import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const entityPath: string = __dirname + '/../**/*.entity.js';
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '1234',
          database: 'ebdb',
          entities: [entityPath],
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
