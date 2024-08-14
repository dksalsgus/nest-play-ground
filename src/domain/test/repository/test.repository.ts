import { Injectable } from '@nestjs/common';
import { TestEntity } from 'src/core/entity/test/test.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TestRepository extends Repository<TestEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(TestEntity, dataSource.createEntityManager());
  }
}
