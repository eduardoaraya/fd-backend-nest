import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ReleaseOriginInterface } from '../interfaces/release-origin.interface';
import { Release } from './release.entity';

@Entity()
export class ReleaseOrigin implements ReleaseOriginInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Release, (release) => release.origin)
  releases: Release[];
}
