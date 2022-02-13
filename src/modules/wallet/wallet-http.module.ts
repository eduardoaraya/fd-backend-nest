import { Module } from '@nestjs/common';
import { WalletController } from './controllers/wallet.controller';
import { WalletModule } from './wallet.module';

@Module({
  imports: [WalletModule],
  controllers: [WalletController],
})
export default class WalletHTTPModule {}
