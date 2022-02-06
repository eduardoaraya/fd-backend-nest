import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Release } from '../../release/models/release.entity';
import { Wallet } from '../../wallet/models/wallet.entity';
import { UserInterface } from '../interfaces/user.interface';

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(() => Wallet, (wallet) => wallet.user)
  wallets: Wallet[];

  @OneToMany(() => Release, (release) => release.user)
  releases: Release[];
}
