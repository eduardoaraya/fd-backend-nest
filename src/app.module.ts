import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './configs/typeorm';
import { ReleaseModule } from './modules/release/release.module';
import UserHTTPModule from './modules/user/user-http.module';

@Module({
  imports: [
    ReleaseModule,
    UserHTTPModule,
    TypeOrmModule.forRoot(typeorm.pgdev),
  ],
})
export class AppModule {}
