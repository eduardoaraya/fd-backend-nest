import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { User } from '../models/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async list() {
    try {
      return { data: await this.userRepository.find() };
    } catch (err) {
      return {
        error: err,
      };
    }
  }
}
