import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './models/wallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  exports: [TypeOrmModule],
})
export class WalletModule {}
