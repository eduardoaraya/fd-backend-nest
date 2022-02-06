import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReleaseCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
