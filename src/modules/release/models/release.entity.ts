import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Release {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
