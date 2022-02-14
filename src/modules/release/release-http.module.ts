import { Module } from '@nestjs/common';
import { ReleaseCategoryController } from './controllers/release-category.controller';
import { ReleaseOriginController } from './controllers/release-origin.controller';
import { ReleaseController } from './controllers/release.controller';
import { ReleaseModule } from './release.module';

@Module({
  imports: [ReleaseModule],
  controllers: [
    ReleaseController,
    ReleaseOriginController,
    ReleaseCategoryController,
  ],
})
export default class ReleaseHTTPModule {}
