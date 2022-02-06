import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './configs/typeorm';
import { ReleaseModule } from './modules/release/release.module';

@Module({
  imports: [ReleaseModule, TypeOrmModule.forRoot(typeorm.pgdev)],
})
export class AppModule {}
