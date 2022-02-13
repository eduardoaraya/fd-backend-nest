import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AbstractEntity } from '../../core/models/abstract.entity';
import { Release } from '../../release/models/release.entity';
import { User } from '../../user/models/user.entity';
import { WalletInterface } from '../interfaces/wallet.interface';

@Entity()
export class Wallet extends AbstractEntity implements WalletInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToOne(() => User, (user) => user.wallets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Release, (release) => release.wallet)
  releases: Release[];
}
