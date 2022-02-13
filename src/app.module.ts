import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './configs/typeorm';
import ReleaseHTTPModule from './modules/release/release-http.module';
import UserHTTPModule from './modules/user/user-http.module';
import WalletHTTPModule from './modules/wallet/wallet-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeorm.pgdev),
    ReleaseHTTPModule,
    UserHTTPModule,
    WalletHTTPModule,
  ],
})
export class AppModule {}
