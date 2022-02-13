import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AbstractEntity } from '../../core/models/abstract.entity';
import { User } from '../../user/models/user.entity';
import { Wallet } from '../../wallet/models/wallet.entity';
import { ReleaseInterface } from '../interfaces/release.interface';
import { ReleaseCategory } from './release-category.entity';
import { ReleaseOrigin } from './release-origin.entity';

@Entity()
export class Release extends AbstractEntity implements ReleaseInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({
    type: 'date',
  })
  release_date: string;
  @Column()
  type: string;
  @Column()
  description: string;

  @OneToOne(() => Wallet, (wallet) => wallet.releases)
  @JoinColumn({
    name: 'wallet_id',
  })
  wallet: Wallet;

  @OneToOne(() => User, (user) => user.releases)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @OneToOne(() => ReleaseCategory, (category) => category.releases)
  @JoinColumn({
    name: 'release_category_id',
  })
  category: ReleaseCategory;

  @OneToOne(() => ReleaseOrigin, (origin) => origin.releases)
  @JoinColumn({
    name: 'release_origin_id',
  })
  origin: ReleaseOrigin;
}
