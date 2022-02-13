import { Module } from '@nestjs/common';
import { ReleaseController } from './controllers/release.controller';
import { ReleaseModule } from './release.module';

@Module({
  imports: [ReleaseModule],
  controllers: [ReleaseController],
})
export default class ReleaseHTTPModule {}
