import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ReleaseCategoryInterface } from '../interfaces/release-category.interface';
import { Release } from './release.entity';

@Entity()
export class ReleaseCategory implements ReleaseCategoryInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Release, (release) => release.origin)
  releases: Release[];
}
