import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import UserCreateDto from '../dto/user-create.dto';
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

  @Post()
  async create(@Body() userCreate: UserCreateDto) {
    try {
      return { data: await this.userRepository.create(userCreate) };
    } catch (err) {
      return {
        error: err,
      };
    }
  }
}
