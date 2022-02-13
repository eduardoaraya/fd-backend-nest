import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Release } from '../modules/release/models/release.entity';
import { ReleaseCategory } from '../modules/release/models/release-category.entity';
import { ReleaseOrigin } from '../modules/release/models/release-origin.entity';
import { User } from '../modules/user/models/user.entity';
import { Wallet } from '../modules/wallet/models/wallet.entity';

export default {
  pgdev: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'fddatabase',
    synchronize: true,
    entities: [User, Wallet, Release, ReleaseOrigin, ReleaseCategory],
  },
} as {
  [key: string]: TypeOrmModuleOptions;
};
