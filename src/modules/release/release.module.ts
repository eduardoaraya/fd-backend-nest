import { Module } from '@nestjs/common';
import ReleaseController from './controllers/release.controller';

@Module({
  controllers: [ReleaseController],
})
export class ReleaseModule {}
