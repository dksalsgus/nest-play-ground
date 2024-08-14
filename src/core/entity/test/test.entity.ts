import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test_table' })
export class TestEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
    unsigned: true,
    comment: 'id',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'name',
  })
  name: string;
}
