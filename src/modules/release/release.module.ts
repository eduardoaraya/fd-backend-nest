import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleaseCategory } from './models/release-category.entity';
import { ReleaseOrigin } from './models/release-origin.entity';
import { Release } from './models/release.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Release, ReleaseOrigin, ReleaseCategory]),
  ],
  exports: [TypeOrmModule],
})
export class ReleaseModule {}
