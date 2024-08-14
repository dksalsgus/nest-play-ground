import { Module } from '@nestjs/common';
import { TestRepository } from './repository/test.repository';

@Module({ imports: [], providers: [TestRepository], exports: [] })
export class TestModule {}
