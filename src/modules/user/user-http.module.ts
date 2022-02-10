import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersService } from './services/user.service';
import UserModule from './user.module';

@Module({
  imports: [UserModule],
  providers: [UsersService],
  controllers: [UserController],
})
export default class UserHTTPModule {}
